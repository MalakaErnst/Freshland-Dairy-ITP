import { Component } from 'react';
import './login.css';
import Authentication from '../API/Authentication';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'username', password: 'password', LoginFail: 'false', Succsess: 'false'
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginclick = this.loginclick.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginclick() {

        Authentication.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {
                    Authentication.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                    this.props.history.push('/Home')
                }
            ).catch(
                () => {
                    this.setState({ LoginFail: true })
                    this.setState({ Succsess: false })
                }
            )

    }

    render() {
        return (
            <div className="container px-4 py-5 mx-auto">
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        <div className="card card1">
                            <div className="row justify-content-center my-auto">
                                <div className="col-md-8 col-10 my-5">
                                    <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.graphicmama.com/blog/wp-content/uploads/2020/10/30131032/P-amazing-3D-logo-design-concept-in-20211.jpg" alt="logo"></img> </div>
                                    <h3 className="mb-5 text-center heading">We are Freshland Dairy</h3>
                                    <h6 className="msg-info">Please login to your account</h6>
                                    {this.state.LoginFail && <div className="alert alert-warning">Invalid Credentials</div>}
                                    <div className="form-group"> <label className="label">Username</label><input type="text" id="email" name="username" placeholder="Username" className="textarea" value={this.state.username} onChange={this.handleChange} /></div>
                                    <div className="form-group"> <label className="label">Password</label> <input type="password" id="psw" name="password" placeholder="Password" className="textarea" value={this.state.password} onChange={this.handleChange} /> </div><br />
                                    <div className="row justify-content-center my-3 px-3"> <button className="btn-block btn-color" onClick={this.loginclick}>Login</button> </div>
                                    <div className="row justify-content-center my-2"> <a href="/Login"><small className="text-muted">Forgot Password?</small></a> </div>
                                </div>
                            </div>
                            {/* <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button className="btn btn-white ml-2">Create new</button></p>
                            </div> */}
                        </div>
                        <div className="card card2">
                            <div className="my-auto mx-md-5 px-md-5 right">
                                <h3 className="text-white">We are more than just a company</h3>
                                <br/>
                                <small className="text-white">
                                    “To be a proactive partner in achieving the targeted growth in fresh milk production while strengthening the local dairy farmer.
                                    Modern technology supported with continuous improvement initiatives to be applied in the processing of nutritious food and beverages to provide our valued consumers at affordable prices.”
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login