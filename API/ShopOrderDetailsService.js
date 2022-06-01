import axios from "axios"
import {JPA_API_URL } from '../Constants';

export class ShopOrderDetailsService{

    RerieveAllOrdersDetails(){
        return axios.get(`${JPA_API_URL}/shop-order/orderdetails`);
    }

    RerieveOrderDetails(id){
        return axios.get(`${JPA_API_URL }/shop-order/orderdetails/${id}`);
    }

    deleteOrderDetails(Order){
        return axios.delete(`${JPA_API_URL}/shop-order/orderdetails/delete`, Order);
    }

    updateOrderDetails(id, Order){
        return axios.put(`${JPA_API_URL}/shop-order/orderdetails/${id}`, Order);
    }

    addOrderDetails(Order){
        return axios.post(`${JPA_API_URL}/shop-order/orderdetails`, Order);
    }
}

export default new ShopOrderDetailsService()
