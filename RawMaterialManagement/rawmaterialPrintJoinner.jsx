import React, {Component} from 'react'
import RawmeterialReportView from './rawMaterialPrintView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class RawmetrialPrintJiner extends Component {
    render(){
        return(
            <>
            
            <Route path = "/rawmaterialManagement/report/:month" component = {RawmeterialReportView}/>
            
            </>
        );
    }
}

export default RawmetrialPrintJiner;