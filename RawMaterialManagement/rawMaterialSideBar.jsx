import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../Finance_Management/commoncomponents/lahirucommoncss.css'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RawmaterialView from './rawmaterialView';
import RawMaterialForm from './rawMaterialForm';
import RawMaterialPreinter from './rawMaterialPrinter';
import RawmaterialReportSearch from './rawMaterialSearch';
//import RawmeterialReportView from './rawMaterialPrintView';

class RawMaterialSidebar extends Component{
  render(){
      return (
        <div className="FinanceManagementRoute">
        <div className="encloser">
        <div className="fmwrapper">
        <div className="fmsidebar">
            <h4>Raw Material Management</h4>
            <ul>
                <li><i></i><Link className="nav-link" to="/Home">Home Page</Link></li>
                <li><i></i><Link className="nav-link" to="/rawmaterialManagement/view">View Raw materials</Link></li>
                <li><i></i><Link className="nav-link" to="/rawmaterialManagement/-1"> Create Raw materials</Link></li>
                <li><i></i><Link className="nav-link" to="/rawmaterialManagement/report"> Create material Monthy report</Link></li>
                
                <li><i></i><Link className="nav-link" to="/"> LogOut</Link></li>
                <li><i ></i></li>
            </ul>
            </div>
            <div className="fmmain_content">
            <div className="fminfo">
            <Switch>
                <Route path = "/rawmaterialManagement/report/:month" exact component = {RawMaterialPreinter}/>
                <Route path = "/rawmaterialManagement/report" exact component = {RawmaterialReportSearch}/>

                <Route path = "/rawmaterialManagement" exact component = {RawmaterialView}/>
                <Route path = "/rawmaterialManagement/view" exact component = {RawmaterialView}/>
                <Route path = "/rawmaterialManagement/:id" exact component = {RawMaterialForm}/>
            </Switch>
            </div>
        </div>
        </div>
        </div>
        </div>
   );
}

}
export default RawMaterialSidebar;