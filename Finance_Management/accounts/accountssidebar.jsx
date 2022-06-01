import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../commoncomponents/lahirucommoncss.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountView from './accountview';
import Accountform from './accountform';
import FinancePic from '../commoncomponents/finacepic';
import AccountSearch from './accountSearch';
import FinancePrinter from '../commoncomponents/financeprinter';
class accountsSidebar extends Component{
        //constructor(props){
        // super(props)
        //}
      render(){
          return (
            <div className="fmwrapper">
            <div className="fmsidebar">
                <h4>Account Management</h4>
                <ul>
                    <li><i className="fa fa-home"></i> <Link className="nav-link" to="/FinanceManagement/accounts/view">View Accounts</Link></li>
                    <li><i className="fa fa-user"></i> <Link className="nav-link" to="/FinanceManagement/accounts/-1"> Create New Account</Link></li>
                    <li><i className="fa fa-user"></i><Link className="nav-link" to="/FinanceManagement/accounts/report"> Monthly Account Report</Link></li>
                    
                    <li><i className="fa fa-user"></i></li>
                </ul>
                </div>
                <div className="fmmain_content">
                <Switch>
                <Route path = "/FinanceManagement/accounts/" exact component = {FinancePic}/>
                </Switch>
                <div className="fminfo">
                <Switch>
                <Route path = "/FinanceManagement/accounts/view" exact component = {AccountView}/>
                <Route path = "/FinanceManagement/accounts/report" exact component = {AccountSearch}/>
                <Route path = "/FinanceManagement/accounts/report/:month/:year" exact component = {FinancePrinter}/>
                <Route path = "/FinanceManagement/accounts/:id" exact component = {Accountform}/>
                </Switch>
                </div>
            </div>
        </div>
       );
  }

}
export default accountsSidebar;