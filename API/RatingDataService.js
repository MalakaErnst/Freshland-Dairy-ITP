import axios from "axios"
import {JPA_API_URL } from '../Constants';

class RatingDataService {

    RerieveAllRatings(){
        return axios.get(`${JPA_API_URL}/shop/rating`);
    }

    deleteRating(id){
        return axios.delete(`${JPA_API_URL}/shop/rating/${id}`);
    }

    updateRating(id, rating){
        return axios.put(`${JPA_API_URL}/shop/rating/${id}`, rating);
    }

    addRating(rating){
        return axios.post(`${JPA_API_URL}/shop/rating`, rating);
    }
    
}

export default new RatingDataService()
