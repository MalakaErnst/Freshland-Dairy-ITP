import { Component } from "react";
import Authentication from "./Authentication";

class LoginComponent extends Component{

    constructor(props){
        super(props);              

         this.state={
            username: '',
            password: '',
            hasLoginFailed:false,
            showSuccessMsg:false
         }
         
    
          this.handleChange=this.handleChange.bind(this);
          this.loginClicked=this.loginClicked.bind(this);
        }

        loginClicked(){
          
            Authentication.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                    Authentication.registerSuccessforJWT(this.state.username,response.data.token)
                    this.props.history.push(`/welcome/${this.state.username}`)
                }
            ).catch(() => {
                this.setState({showSuccessMsg:false})
                this.setState({hasLoginFailed:true})
            })
        }


         handleChange(event) {
            this.setState(
                {
                    [event.target.name]
                        :event.target.value 
                }
                )
         }
  
    render(){
        return(
            <div>
                
                <div class="box">
                <h1>Login</h1>
                <p class="text-muted"> Please enter your login and password!</p> 
             
                    {/*<ShowInvalidity hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccess showSuccessMsg={this.state.showSuccessMsg}/>*/}

                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentails</div>}
                    {this.state.showSuccessMsg && <div>Successful</div>}
        
                    <br></br>
                    <p class="text-muted">Username:</p> <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input><br></br><br></br>
                    <p class="text-muted">Password:</p> <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input><br></br><br></br>
                    <button className="button" onClick={this.loginClicked}> Login </button>
               
                </div>
                
                </div>
            
        )
    }
}
export default LoginComponent