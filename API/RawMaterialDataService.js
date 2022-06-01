import axios from "axios";

class RawMaterialDataService{
    retriveAllrawmaterial(){
        return axios.get('http://localhost:8080/users/rawmaterial');
    }

    deleterawmaterial(id){
        return axios.delete(`http://localhost:8080/users/rawmaterial/${id}`);
    }

    retriverawmaterial(id){
        return axios.get(`http://localhost:8080/users/rawmaterial/${id}`);
    }

    updaterawmaterial(id, rawmaterial){
        return axios.put(`http://localhost:8080/users/rawmaterial/${id}`, rawmaterial);
    }

    createrawmaterial(rawmaterial){
        return axios.post('http://localhost:8080/users/rawmaterial', rawmaterial);
    }
    
    

    Search(month){
        return axios.get(`http://localhost:8080/users/rawmaterial/search/${month}`)
    }
    
}
export default new RawMaterialDataService();