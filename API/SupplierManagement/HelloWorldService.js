import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:9191/hello-world');
        //console.log('executed service')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:9191/hello-world-bean');
        //console.log('executed service')
    }

    executeHelloWorldPathVariableService(name){

        // let username = 'malaka'
        // let password = 'dark'

        // let basicAuthHeader = 'Basic ' +window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // {
        //     headers: {
        //         authorization: basicAuthHeader
        //     }
        // }
        );
        
    }

    
}
export default new HelloWorldService()