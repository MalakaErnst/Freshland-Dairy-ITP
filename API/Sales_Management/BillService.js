import axios from "axios"
//import {API_URL ,JPA_API_URL} from '../../Constants'

const JPA_API_URL = 'http://localhost:8080'

class MyData {
    viewBill(){
        // console.log('exxxx')
        return axios.get(`${JPA_API_URL}/bill`);
        // return axios.get('http://localhost:8080/mylist');
    }


deleteBill(id){
    return axios.delete(`${JPA_API_URL}/bill/${id}`);
}

retrieveBill(id){
    return axios.get(`${JPA_API_URL}/bill/${id}`);
}

updateBill(id,bill){
    return axios.put(`${JPA_API_URL}/bill/${id}` , bill);
}

insertBill(bill){
    return axios.post(`${JPA_API_URL}/bill` , bill);
}

insertBillDetails(bill){
    return axios.post(`${JPA_API_URL}/billproduct` , bill);
}


rerieveAllBillsDetails(){
    return axios.get(`${JPA_API_URL}/billproduct`);
}

retrieveBillDetailsByID(id){
    return axios.get(`${JPA_API_URL}/billproduct/${id}`);
}







// viewItem(){
//     // console.log('exxxx')
//     return axios.get(`${JPA_API_URL}/product`);
//     // return axios.get('http://localhost:8080/mylist');
// }

// retrieveproduct(pid){
//     return axios.get(`${JPA_API_URL}/product/${pid}`);
// }

// // newRet(pid){
// //     return axios.get(`http://localhost:8080//jpa/product/${pid}`);
// // }

// addProduct(pid){
//     return axios.post(`${JPA_API_URL}/product` , pid);
// }

// deleteProduct(pid){
//     return axios.delete(`${JPA_API_URL}/product/${pid}`);
// }

// // addBill(order){
// //     return axios.post(`${JPA_API_URL}/order/` , order);
// // }
// updateProduct(pid,p){
//     return axios.put(`${JPA_API_URL}/product/${pid}` , p);
// }






}

export default new MyData()