import React, {Component} from 'react'
import SalaryService from '../../API/Finance_management/SalaryService';

class SalaryReportView extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            month : this.props.match.params.month,
            year : this.props.match.params.year,
            eid : 'Enter eid',
            job : 'Enter job',
            basic:'Enter basic',
            ot : 'Enter ot',
            bonus : 'Enter bonus',
            etf : 'Enter etf',
            epf : 'Enter epf',
            total : 'Enter total'

        }
    }
    
    componentDidMount (){
        SalaryService.getSum(this.state.month, this.state.year)
            .then (response => this.setState({
                basic : response.data.basic,
                ot : response.data.ot,
                bonus : response.data.bonus,
                etf : response.data.etf,
                epf : response.data.epf,
                total : response.data.total
            }))
        
    }
    
    render(){

        return(
            <div>
            <div className = "container">
            <h1>Salary Report</h1>
            <br></br>
            <h5>Month : {this.state.month}</h5>
            <h5>Year : {this.state.year}</h5>
            <table className = "table">
                <tbody>
                    <tr>
                        <td >Totol Of Paid Basics For Salarys</td>
                        <td>{this.state.basic}</td>
                    </tr>
                    <tr>
                        <td >Totol Of Paid ETF For Salarys</td>
                        <td>{this.state.etf}</td>
                    </tr>
                    <tr>
                        <td >Totol Of Paid EPF For Salarys</td>
                        <td>{this.state.epf}</td>
                    </tr>
                    <tr>
                        <td >Totol Of Paid OT For Salarys</td>
                        <td>{this.state.ot}</td>
                    </tr>
                    <tr>
                        <td >Totol Of Paid Bonus For Salarys</td>
                        <td>{this.state.bonus}</td>
                    </tr>
                    
                </tbody>
            </table><br></br>
            <table className = "table">
            <tr >
                    <th >Total Salary For The All Employees</th><th>Total Wages Deducted From EMployees(ETF+EPF)</th><th>Total SalarySalary Expense For Company</th></tr>
                    <tr>    <td>{this.state.total}</td>
                    
                        <td >{ this.state.epf + this.state.etf}</td>
                        <td>{this.state.total - this.state.epf - this.state.etf}</td>
                    </tr>
            </table>
            </div>

        </div>
        )
    }
}

export default SalaryReportView;