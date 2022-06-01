import React, {Component} from 'react'
import BillDataService from '../../API/Finance_management/BillServise.js'
import moment from 'moment';

class BillReportView extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            bills : [],
            month : this.props.match.params.month,
            sum : 0 ,
            count : 0
        }
        
    }
    
    componentDidMount (){
        BillDataService.searchBill(this.state.month)
            .then(
                response => {
                    this.setState({bills : response.data})
                }
            )

        BillDataService.searchBillCount(this.state.month)
            .then (response => this.setState({count : response.data}))

        BillDataService.searchBillsum(this.state.month)
            .then (response => this.setState({sum : response.data}))
        
    }
    
    
    render(){
        return(
            <div className = "ViewBils"><br></br>
                <h1>List Bills </h1>
                <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            
                            <th>Description</th>
                            <th>Bill Date</th>
                            <th>Bill Type</th>
                            <th>Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                        this.state.bills.map(
                            bills =>
                                <tr key ={bills.id}>
                                    <td>{bills.discription}</td>
                                    <td>{moment(bills.billDate).format('YYYY-MM-DD')}</td>
                                    <td>{bills.billType}</td>
                                    <td>{bills.amount}</td>
                                </tr>
                        )
                        }
                        <tr><td colspan="3"> Total of {this.state.count} Bills</td><td>{this.state.sum}</td></tr>
                    </tbody>
                </table>
                
                
                </div>
            </div>
        )
    }
}

export default BillReportView;