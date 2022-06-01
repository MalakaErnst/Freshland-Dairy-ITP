import '../../App.css';
//import '../../boostrap.css';
import '../../bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MyHeader from './header';
import MyFooter from './footer';
import FinanceMngSidebar from './finance_mng_sidebar';
import accountsSidebar from '../accounts/accountssidebar';
import SalarySidebar from '../salary/salarysidebar';
//import Home from "../../Home"
import FinanceManagementHome from './FinanceMnagementHome';

class FinanceManagementRoute extends Component {
  render() {
    return (
      <div className="FinanceManagementRoute">

            <MyHeader/>
            
            <Route path = "/FinanceManagement/bills" component = {FinanceMngSidebar}/>
            <Route path = "/FinanceManagement/accounts" component = {accountsSidebar}/>
            <Route path = "/FinanceManagement/salary" component = {SalarySidebar}/>
            <Route path = "/FinanceManagement" exact component = {FinanceManagementHome}/>            
            <MyFooter/>
            
      </div>
      );
  }
}
export default FinanceManagementRoute;