
import axios from "axios"
//import {API_URL ,JPA_API_URL} from '../../Constants'

const JPA_API_URL = 'http://localhost:8080'

class ProductService{


    viewProduct(){
       
        return axios.get(`${JPA_API_URL}/product`);
       
    }
    
    getProductByID(pid){
        return axios.get(`${JPA_API_URL}/product/${pid}`);
    }
    
    
    
    addProduct(product){
        return axios.post(`${JPA_API_URL}/product` , product);
    }
    
    deleteProduct(pid){
        return axios.delete(`${JPA_API_URL}/product/${pid}`);
    }
    
    
    updateProduct(pid,p){
        return axios.put(`${JPA_API_URL}/product/${pid}` , p);
    }
    


}

export default new ProductService()