import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../commoncomponents/lahirucommoncss.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalaryView from './salaryview';
import Salaryform from './salaryForm';
import FinancePic from '../commoncomponents/finacepic';
import FinancePrinter from '../commoncomponents/financeprinter';
import SalarySearch from './salaryPrintSearch';

class SalarySidebar extends Component{
  render(){
      return (
        < div className="encloser">
        <div className="fmwrapper">
        <div className="fmsidebar">
            <h4>Salary Management</h4>
            <ul>
                <li><i ></i> <Link className="nav-link" to="/FinanceManagement/salary/view">View Salaries</Link></li>
                <li><i></i> <Link className="nav-link" to="/FinanceManagement/salary/-1"> Create New salary</Link></li>
                <li><i ></i><Link className="nav-link" to="/FinanceManagement/salary/report"> Monthly salary Report</Link></li>
                
                <li><i ></i></li>
            </ul>
            </div>
            <div className="fmmain_content">
            <Switch>
                <Route path = "/FinanceManagement/salary/" exact component = {FinancePic}/>
                </Switch>
            <div className="fminfo">
            <Switch>
            <Route path = "/FinanceManagement/salary/view" exact component = {SalaryView}/>
            <Route path = "/FinanceManagement/salary/report" exact component = {SalarySearch}/>
            <Route path = "/FinanceManagement/salary/:id" exact component = {Salaryform}/>
            <Route path = "/FinanceManagement/salary/report/:id" exact component = {FinancePrinter}/>
            <Route path = "/FinanceManagement/salary/report/:month/:year" exact component = {FinancePrinter}/>
            
            </Switch>
            </div>
        </div>
    </div>
    </div>
   );
}

}
export default SalarySidebar;