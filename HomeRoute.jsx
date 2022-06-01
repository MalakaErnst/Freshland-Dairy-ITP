import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogoutComponent from './Login/LogoutComponent'
import ErrorMessage from './Login/ErrorMessage'
import AuthenticatedRoute from './AuthenticatedRoute';
import ShopMain from './Shop/ShopMain';
import Home from './Home';
import Login from './Login/Login';
import FinanceManagementRoute from './Finance_Management/commoncomponents/financemng_route';
import SaleseManagementHome from './Sales_Management/SalesManagementHome';
import RawMaterialSidebar from './RawMaterialManagement/rawMaterialSideBar';
import SupplierApp from './SupplierManagementMain/SupplierApp';
import SupplierMainRoute from './SupplierManagementMain/SupplierMainRoute';

import TestNav from './SupplierManagementMain/TestNav';
import WelcomeComponent from './SupplierManagementMain/WelcomeComponent';
import SupplierComponent from './SupplierManagementMain/SupplierComponent';
import TestList from './SupplierManagementMain/TestList';
import SupplyComponent from './SupplierManagementMain/SupplyComponent';
import ListSupplyComponent from './SupplierManagementMain/ListSupplyComponent';

import HeaderComponent from './SupplierManagementMain/HeaderComponent';


 ///SupplierManagement


function HomeRoute() {
//     return (
//         <div className="HomeRoute">
//             <Router>
//                 <>
//                     <Switch>
//                         <Route path="/" exact component={Login} />
//                         <Route path="/Home" exact component={Home} />
//                         <Route path="/FinanceManagement" component={FinanceManagementRoute} />
//                         <Route path="/Sales-management" component={SaleseManagementHome} />
//                         <Route path="/rawmaterialManagement" component={RawMaterialSidebar} />

//                         <Route path="/SupplierManagement/welcome" component={TestNav} />
//                         <Route path="/SupplierManagement/welcome/:name" component={WelcomeComponent} />
//                         <Route path="/SupplierManagement/Suppliers/:id" component={SupplierComponent} />
//                         <Route path="/SupplierManagement/Suppliers" component={TestList} />
//                         <Route path="/SupplierManagement/Supplyy/:sid" component={SupplyComponent} />
//                         <Route path="/SupplierManagement/Supplyy" component={ListSupplyComponent} />

//                         <ShopMain />
//                         <FinanceManagementRoute />
//                         <SaleseManagementHome />
//                         <RawMaterialSidebar />

//                         <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
//                         <Route component={ErrorMessage} />
//                     </Switch>
//                 </>
//             </Router>
//         </div>
//     )
// }
return (
    <div className="FinanceManagementRoute">
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/FinanceManagement" component={FinanceManagementRoute} />
                    <Route path="/Sales-management" component={SaleseManagementHome} />
                    <Route path="/rawmaterialManagement" component={RawMaterialSidebar} />

                    <Route path="/SupplierManagement/welcome" component={TestNav} />
                    <Route path="/SupplierManagement/welcome/:name" component={WelcomeComponent} />
                    <Route path="/SupplierManagement/Suppliers/:id" exact component={TestNav} />
                    <Route path="/SupplierManagement/Suppliers" exact component={TestNav} />
                    <Route path="/SupplierManagement/Supplyy/:sid" component={TestNav} />
                    <Route path="/SupplierManagement/Supplyy" component={TestNav} />

                    <ShopMain />
                    <FinanceManagementRoute />
                    <SaleseManagementHome />
                    <RawMaterialSidebar />

                    <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                    <Route component={ErrorMessage} />
                </Switch>
            </>
        </Router>
    </div>
)
}
export default HomeRoute