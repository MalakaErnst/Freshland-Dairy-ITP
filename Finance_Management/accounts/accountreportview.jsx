import React, {Component} from 'react'
import AccountService from '../../API/Finance_management/AccountService';

class AccountReportView extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            month : this.props.match.params.month,
            year : this.props.match.params.year,
            expenses : [],
            income : [],
            incomesum : null,
            expensesum : null,
            expensetype : 'Expence',
            incometype :'Income'

        }
    }
    
    componentDidMount (){
        AccountService.getAccountReportObjects(this.state.expensetype, this.state.month, this.state.year)
            .then(
                response => {
                    this.setState({expenses : response.data})
                }
            )

        AccountService.getAccountReportObjects(this.state.incometype, this.state.month, this.state.year)
            .then(
                response => {
                    this.setState({income : response.data})
                }
            )
        
        AccountService.getSum(this.state.incometype, this.state.month, this.state.year)
            .then(
                response => {
                    this.setState({incomesum : response.data})
                }
            )
        
        AccountService.getSum(this.state.expensetype, this.state.month, this.state.year)
            .then(
                response => {
                    this.setState({expensesum : response.data})
                }
            )
        
        
    }
    
    render(){
        return(
            <div className = "AccountReportView"><br></br>
                <h1>Monthly Account report</h1>
                <div className="container">
                <br></br><h3>Income Reports</h3>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Account Type</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                        this.state.income.map(
                            income =>
                                <tr key ={income.id}>
                                    <td>{income.department}</td>
                                    <td>{income.accountType}</td>
                                    <td>{income.month}</td>
                                    <td>{income.year}</td>
                                    <td>{income.amount}</td>
                                </tr>
                        )
                        }
                    <tr><td colspan="4">Total</td><td>{this.state.incomesum}</td></tr>    
                    </tbody>
                </table>
                <br></br>
                <h3>Expence Reports</h3>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Account Type</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                        this.state.expenses.map(
                            expenses =>
                                <tr key ={expenses.id}>
                                    <td>{expenses.department}</td>
                                    <td>{expenses.accountType}</td>
                                    <td>{expenses.month}</td>
                                    <td>{expenses.year}</td>
                                    <td>{expenses.amount}</td>
                                </tr>
                        )
                        }
                    <tr><td colspan="4">Total</td><td>{this.state.expensesum}</td></tr>
                    </tbody>
                </table>
                <br></br><h3>Summery</h3>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Income</th>
                            <th>Expence</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.year}</td>
                            <td>{this.state.month}</td>
                            <td>{this.state.incomesum}</td>
                            <td>{this.state.expensesum}</td>
                            <td>{this.state.incomesum - this.state.expensesum}</td>
                        </tr>
                    </tbody>
                </table>
                
                </div>
            </div>
        )
    }
}

export default AccountReportView;