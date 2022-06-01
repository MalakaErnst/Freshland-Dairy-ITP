import React, {Component} from 'react'
import BillDataService from '../../API/Finance_management/BillServise.js'
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import moment from 'moment';

class ViewBils extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            bills : [],
             //{id:1, discription:'water bill'},
               // {id:2, discription:'Electricity bill'},
               // {id:3, discription:'phone bill'} 
            message : null

        }
        this.deleteBillClicked = this.deleteBillClicked.bind(this)
        this.refreshBills = this.refreshBills.bind(this)
        this.updateBillClicked = this.updateBillClicked.bind(this)
        this.addBillClicked = this.addBillClicked.bind(this)
    }
    
    componentDidMount (){
        this.refreshBills()
    }
    
    deleteBillClicked(id){
        BillDataService.deleteBill(id)
        .then(
            response => {
                this.setState({message : `Delete Of Bill ${id} successful`})
                this.refreshBills()
            }
        )
    }

    updateBillClicked(id){
        
        this.props.history.push(`/FinanceManagement/viewbills/${id}`)
        // BillDataService.deleteBill(id)
        // .then(
        //     response => {
        //         this.setState({message : `Delete Of Bill ${id} successful`})
        //         this.refreshBills()
        //     }
        // )
    }

    addBillClicked (){
        this.props.history.push('/FinanceManagement/viewbills/-1')
    }
    refreshBills (){

        BillDataService.retriveAllBills()
            .then(
                response => {
                    this.setState({bills : response.data})
                }
            )

    }
    
    
    render(){
        return(
            <div className = "ViewBils"><br></br>
                <h1>List Bills </h1>
                {this.state.message && <div className ="alert alert-succcess">{this.state.message}</div>}
                <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            {/*<th>ID</th>*/}
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Bill Date</th>
                            <th>Bill Type</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*<tr>
                            <td> {this.state.bills.id} </td>
                            <td> {this.state.bills.discription} </td>
                        </tr>*/}
                        {
                        this.state.bills.map(
                            bills =>
                                <tr key ={bills.id}>
                                    {/*<td>{bills.id}</td>*/}
                                    <td>{bills.discription}</td>
                                    <td>{bills.amount}</td>
                                    <td>{moment(bills.billDate).format('YYYY-MM-DD')}</td>
                                    <td>{bills.billType}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => this.deleteBillClicked(bills.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => this.updateBillClicked(bills.id)}>Update</button></td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
                {/*
                <div className = "row">
                        <button className = "btn btn-success" onClick ={this.addBillClicked}>Add</button>
                </div>
                */}
                
                </div>
            </div>
        )
    }
}

export default ViewBils;