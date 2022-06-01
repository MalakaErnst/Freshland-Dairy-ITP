import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import SupplierComponent from './SupplierComponent.jsx'
import TestList from './TestList.jsx'
import TestNav from './TestNav.jsx'
import ListSupplyComponent from './ListSupplyComponent.jsx'
import SupplyComponent from './SupplyComponent.jsx'

export default class SupplierMainRoute extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <Route path="/SupplierManagement/welcome" component={TestNav} />
                <Route path="/SupplierManagement/welcome/:name" component={WelcomeComponent} />
                <Route path="/SupplierManagement/Suppliers/:id" component={SupplierComponent} />
                <Route path="/SupplierManagement/Suppliers" component={TestList} />
                <Route path="/SupplierManagement/Supplyy/:sid" component={SupplyComponent} />
                <Route path="/SupplierManagement/Supplyy" component={ListSupplyComponent} />
                
                <FooterComponent />
            </>
        )
    }
}
