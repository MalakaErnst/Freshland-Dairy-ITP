import axios from "axios"
import { JPA_API_URL } from "../../Constants";

class SupplyDataService{

    retrieveAllSupply(name){
        return axios.get(`${JPA_API_URL}/jpa/users/${name}/Supplyy`);
        //console.log('executed service')
    }
     deleteSupply(name, sid){
        return axios.delete(`${JPA_API_URL}/jpa/users/${name}/Supplyy/${sid}`);
        //console.log('executed service')
    }
    retrieveSupply(name,sid){
        return axios.get(`${JPA_API_URL}/jpa/users/${name}/Supplyy/${sid}`);
        //console.log('executed service')
    }
    updateSupply(name, sid, Supply){
        return axios.put(`${JPA_API_URL}/jpa/users/${name}/Supplyy/${sid}`, Supply);
        //console.log('executed service')
    }
    createSupply(name, Supply){
        return axios.post(`${JPA_API_URL}/jpa/users/${name}/Supplyy`, Supply);
        //console.log('executed service')
    }

}

export default new SupplyDataService()