import React, {Component} from 'react'
import BillDataService from '../../API/Finance_management/BillServise.js'
import moment from 'moment';
import { Formik , Form , Field, ErrorMessage} from 'formik';


class BillSearch extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            bills : [],
            results : null,
            tempvalue : null,
            message : null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteBillClicked = this.deleteBillClicked.bind(this)
        this.refreshBills = this.refreshBills.bind(this)
        this.updateBillClicked = this.updateBillClicked.bind(this)
    }

    deleteBillClicked(id, tempvalue){
        BillDataService.deleteBill(id)
        .then(response => {
            this.setState({message : `Delete Of Bill ${id} successful`})
        }).finally(
            this.state.results = false
        )
    }

    updateBillClicked(id){
        
        this.props.history.push(`/FinanceManagement/bills/${id}`)
        
    }

    

    refreshBills (tempvalue){

        BillDataService.searchBill(tempvalue)
        .then (
            response => {
                this.setState({bills : response.data})
            
            }
        )

    }
    
    onSubmit(values){
        BillDataService.searchBill(values.search)
        .then (
            response => {
                this.state.results = true;
                this.state.tempvalue = values.search;
                this.setState({bills : response.data})
            }
        )
        }
        
        //BillDataService.searchBill(values.search, values.DateFrom, values.DateTo)
        //.then (
            //response => {
              //  this.state.results = true;
               // this.state.tempvalue = values.search;
               // this.setState({bills : response.data})
            
            //}
        //)
        
    



    render(){
        let search = "* optional"
        return(
            <>
            <h1>Bill Search</h1>
             <Formik
                initialValues ={{search}}
                onSubmit = {this.onSubmit}
                enableReinitialize = {true}
                
             >
                 {
                     (props)=> (
                        <Form>
                        
                        <fieldset className = "form-group">
                            <label>By Key Word</label>
                            <Field className ="form-control" type ="text" name ="search"  />
                        
                            <label>Date (From)</label>
                            <Field className="form-control" type="date" name="DateFrom" />

                            <label>Date (To)</label>
                            <Field className="form-control" type="date" name="DateTo" />
                        </fieldset>
                        
                        <button className ="btn btn-success" type ="submit">Search</button> 
                                
                        </Form>
                     )
                 }
              </Formik>  



              {this.state.message && <div className ="alert alert-succcess">{this.state.message}</div>}
             {this.state.results && <div>
             <div className = "ViewBils">
                <h1>List Bills </h1>
               
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
            </div></div>}
            
            </>


        )
    }
}

export default BillSearch;