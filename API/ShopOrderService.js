import axios from "axios"
import {JPA_API_URL } from '../Constants';

class ShopOrderService {

    RerieveAllOrders(){
        return axios.get(`${JPA_API_URL}/shop-order/orders`);
    }

    RerieveOrder(id){
        return axios.get(`${JPA_API_URL }/shop-order/order/${id}`);
    }

    deleteOrder(id){
        return axios.delete(`${JPA_API_URL}/shop-order/order/${id}`);
    }

    updateOrder(id, Order){
        return axios.put(`${JPA_API_URL}/shop-order/order/${id}`, Order);
    }

    addOrder(Order){
        return axios.post(`${JPA_API_URL}/shop-order/order`, Order);
    }

}

export default new ShopOrderService()
