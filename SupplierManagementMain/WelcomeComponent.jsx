
import { Component } from "react";
//import { Link } from 'react-router-dom'
import HelloWorldService from "../API/SupplierManagement/HelloWorldService"
import sup from '../supply.jpg'
import HeaderComponent from "./HeaderComponent";

class WelcomeComponent extends Component{
    constructor(props){
        super(props);
         this.retrieveMSG =this.retrieveMSG.bind(this)
         this.state={
             welcomeMSG : ''
         }
         this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
         this.handleError=this.handleError.bind(this)

    }
    render(){
        return (
            <>
            <HeaderComponent/>
            <div>
                <img src={sup} height={"100%"} width={"100%"} alt ="welcome"></img>
                </div>
            
        </>)
    }


    retrieveMSG(){
   
            HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error=>this.handleError(error))
        }

    
    handleSuccessfulResponse(response){
        this.setState({welcomeMSG:response.data.message})
    }            
    
    handleError(error){
       
        console.log(error.response)
        let errorMessage='';
        if (error.message){
            errorMessage += error.message
        }

        if(error.response && error.response.data){
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMSG: errorMessage})
    }       
}
export default WelcomeComponent