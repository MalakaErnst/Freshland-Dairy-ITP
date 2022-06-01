import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountReportView from '../accounts/accountreportview';

class ComponentToPrint extends Component {
    render() {
      return (
        <>
        <Switch>
                <Route path = "/FinanceManagement/accounts/report/:month/:year"  component = {AccountReportView}/>
                
            </Switch>
         </>
      );
    }
  }

export default ComponentToPrint;