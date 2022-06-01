import React, {Component} from 'react'
import SalaryService from '../../API/Finance_management/SalaryService';

class Paysheetview extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
            eid : '',
            job : '',
            month : '',
            year : '',
            basic:'',
            ot : '',
            bonus : '',
            etf : '',
            epf : '',
            total : ''

        }
    }

    componentDidMount() {
        
        SalaryService.retriveSalary(this.state.id)
            .then (response => this.setState({
                month : response.data.month,
                year : response.data.year,
                eid : response.data.eid,
                job : response.data.job,
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
            <h1>Pay Sheet OF Employee : {this.state.eid}</h1>
            <br></br>
            <h5>Month : {this.state.month}</h5>
            <h5>Year : {this.state.year}</h5>
            <h5>Job : {this.state.job}</h5>
            <table className = "table">
                <tbody>
                    <tr>
                        <td >Basic Salary</td>
                        <td>{this.state.basic}</td>
                    </tr>
                    <tr>
                        <td >ETF</td>
                        <td>{this.state.etf}</td>
                    </tr>
                    <tr>
                        <td >EPF</td>
                        <td>{this.state.epf}</td>
                    </tr>
                    <tr>
                        <td >OT</td>
                        <td>{this.state.ot}</td>
                    </tr>
                    <tr>
                        <td >Bonus</td>
                        <td>{this.state.bonus}</td>
                    </tr>
                    <tr>
                        <td >Total</td>
                        <td>{this.state.total}</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </div>
        )
    }
}
export default Paysheetview;