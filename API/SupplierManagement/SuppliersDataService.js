import axios from "axios"
import { JPA_API_URL } from "../../Constants";

class SuppliersDataService{

    retrieveAllSuppliers(name){
        return axios.get(`${JPA_API_URL}/jpa/users/${name}/Suppliers`);
        //console.log('executed service')
    }
     deleteSuppliers(name, id){
        return axios.delete(`${JPA_API_URL}/jpa/users/${name}/Suppliers/${id}`);
        //console.log('executed service')
    }
    retrieveSuppliers(name,id){
        return axios.get(`${JPA_API_URL}/jpa/users/${name}/Suppliers/${id}`);
        //console.log('executed service')
    }
    updateSuppliers(name, id, Supplier){
        return axios.put(`${JPA_API_URL}/jpa/users/${name}/Suppliers/${id}`, Supplier);
        //console.log('executed service')
    }
    createSuppliers(name, Supplier){
        return axios.post(`${JPA_API_URL}/jpa/users/${name}/Suppliers`, Supplier);
        //console.log('executed service')
    }

}

export default new SuppliersDataService()