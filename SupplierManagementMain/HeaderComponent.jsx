import React, { Component } from 'react'
import Authentication from '../API/Authentication';
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        // const isUserLoggedin =Authentication.isUserLoggedin()  navbar navbar-expand-lg navbar-dark bg-dark
        // //console.log(isUserLoggedin);
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className= "navbar-brand"><h2>FRESHLAND DAIRY</h2></div> 
                    <ul className="navbar-nav">
                         <li><Link className="nav-link" to="/SupplierManagement/welcome/:name"><h3>Home</h3></Link></li>
                         
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        
                        <li><Link className="nav-link" to="/logout" onClick={Authentication.logout}><h3>Logout</h3></Link></li>
                    </ul>
                </nav>
            </header>
        
        )
    }
}
 
//export default withRouter(HeaderComponent);
export default HeaderComponent;