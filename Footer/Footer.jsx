import { Component } from 'react';
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import WhatsApp from '@material-ui/icons/WhatsApp'
import Email from '@material-ui/icons/EmailRounded'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-white">
                    <div className="container py-5">
                        <div className="row py-3">
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">Contact Us</li>
                                    <li className="mb-2">About Us</li>
                                    <li className="mb-2">Stories</li>
                                    <li className="mb-2">Press</li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">Payments</li>
                                    <li className="mb-2">Shipping</li>
                                    <li className="mb-2">Cancellation</li>
                                    <li className="mb-2">Returns</li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">Return Policy</li>
                                    <li className="mb-2">Terms Of Use</li>
                                    <li className="mb-2">Security</li>
                                    <li className="mb-2">Privacy</li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">Login</li>
                                    <li className="mb-2">Register</li>
                                    <li className="mb-2">Sitemap</li>
                                    <li className="mb-2">Our Products</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                                <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><Facebook/></li>
                                    <li className="list-inline-item"><Twitter/></li>
                                    <li className="list-inline-item"><Instagram/></li>
                                    <li className="list-inline-item"><WhatsApp/></li>
                                    <li className="list-inline-item"><Email/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="p-0 m-0 b-0"></hr>
                    <div className="bg-light py-2">
                        <div className="container text-center">
                            <p className="text-muted mb-0 py-2">©{new Date().getFullYear()} Freshland Dairy All risghts reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer