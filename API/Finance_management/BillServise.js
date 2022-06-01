import axios from "axios";

class BillDataService{
    retriveAllBills(){
        return axios.get('http://localhost:8080/users/bills');
    }

    deleteBill(id){
        return axios.delete(`http://localhost:8080/users/bills/${id}`);
    }

    retriveBill(id){
        return axios.get(`http://localhost:8080/users/bills/${id}`);
    }

    updateBill(id, bill){
        return axios.put(`http://localhost:8080/users/bills/${id}`, bill);
    }

    createBill(bill){
        return axios.post('http://localhost:8080/users/bills', bill);
    }
    
    searchBill(searchitems){
        return axios.get(`http://localhost:8080/users/bills/search/${searchitems}`);
    }
    searchBillCount(searchitems){
        return axios.get(`http://localhost:8080/users/bills/search/count/${searchitems}`);
    }
    searchBillsum(searchitems){
        return axios.get(`http://localhost:8080/users/bills/search/sum/${searchitems}`);
    }

    createBillAccount(month){
        return axios.get(`http://localhost:8080/users/accounts/makeBillaccount/${month}`);
    }
    
}
export default new BillDataService();