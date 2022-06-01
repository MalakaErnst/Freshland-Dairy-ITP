//import { withRouter } from "react-router";
import React, {Component} from 'react'
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Authentication from '../API/Authentication';
import './SideNav.css';
//import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import WelcomeComponent from "./WelcomeComponent.jsx";
import 'semantic-ui-css/semantic.min.css'
import SupplierComponent from './SupplierComponent.jsx';
import TestList from './TestList.jsx';
import ListSupplyComponent from './ListSupplyComponent';
import SupplyComponent from './SupplyComponent';

class TestNav extends Component{
    render(){
       

        const isUserLoggedIn = Authentication.isUserLoggedin()

        return(
            <div class="wrapper">
                <div class="sidebar">
                    <h2>Supplier Management</h2>
                    <ul>
                        <li><Link className="nav-link" to="/SupplierManagement/welcome/:name"><i className="big home icon"></i> <b> Home </b></Link></li>
                        <li><Link className="nav-link" to="/SupplierManagement/Suppliers"><i className="big handshake outline icon"></i> <b> Suppliers </b></Link></li>
                        <li><Link className="nav-link" to="/SupplierManagement/Supplyy"><i className="big balance scale icon"></i> <b> Supply </b></Link></li>
                        <li><Link className="nav-link" to="/logout" onClick={Authentication.logout}><i className="big sign-out alternate icon"></i> <b> Logout </b></Link></li>
                    
                    </ul>
                    {/* <div class="social_media"> <a href="#"><i class="fa fa-facebook-f"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-instagram"></i></a> </div> */}
                </div>
    <div class="main_content">
        
        <div class="info">
        <Route  path="/SupplierManagement/welcome/:name" exact component={WelcomeComponent}/>  
        <Route  path="/SupplierManagement/Suppliers/:id" exact component={SupplierComponent}/> 
        <Route  path="/SupplierManagement/Suppliers" exact component={TestList}/> 
        <Route  path="/SupplierManagement/Supplyy/:sid" exact component={SupplyComponent}/> 
        <Route  path="/SupplierManagement/Supplyy" exact component={ListSupplyComponent}/> 
            
        </div>
    </div>
</div>
        )
    }


}
export default TestNav