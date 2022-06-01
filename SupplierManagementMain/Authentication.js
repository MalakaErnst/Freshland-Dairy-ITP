import axios from "axios";
import { API_URL } from "../Constants.js";

export const USERNAME_SESSION_ATTRIBUTE_NAME='authenticatedUser'

class Authentication{

    executeBasicAuthenticationService(username, password){
        return axios.get(`${API_URL}/basicauth`, {headers: {authorization: this.createBasicAuth(username, password)}})

    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })

    }


    createBasicAuth(username,password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccess(username, password){
        
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        console.log('SUCCESSFUL LOGIN')
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME,username)
        this.setupAxiosInterceptors(this.createBasicAuth(username, password))
    }

    registerSuccessforJWT(username,token){
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME,username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }
     
    logout(){
        sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedin(){
        let user =sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user===null)return false
        return true
    } 
    LoggedinUsername(){
        let user =sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user===null)return ''
        return user
    }

    setupAxiosInterceptors(token){

        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedin()){
                config.headers.authorization= token
            }
            return config
        }

        )
    }
}

export default new Authentication()