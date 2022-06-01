import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
//import ListSuppliersComponent from './ListSuppliersComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import SupplierComponent from './SupplierComponent.jsx'
import TestList from './TestList.jsx'
import TestNav from './TestNav.jsx'

import nSupplyComponent from './nSupplyComponent.jsx'
import ListSupplyComponent from './ListSupplyComponent.jsx'
import SupplyComponent from './SupplyComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

class SupplierApp extends Component{
    render(){
        return(
            <div className="SupplierApp">
                    <>
                    <HeaderComponent/>
                        <Route path ="/welcome/" component={TestNav}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/Suppliers/:id"  component={SupplierComponent}/>
                        <Route path="/Suppliers" component={TestList}/>

                        <Route path="/Supplyy/:sid" component={SupplyComponent}/>
                        <Route path="/Supplyy" component={ListSupplyComponent}/>
                    <FooterComponent/>
                    </>
            </div>
        )
    }
}

export default SupplierApp