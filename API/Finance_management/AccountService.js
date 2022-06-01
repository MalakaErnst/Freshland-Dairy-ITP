import axios from "axios";

class AccountServices{
    retriveAllAccounts(){
        return axios.get('http://localhost:8080/users/accounts');
    }

    deleteAccount(id){
        return axios.delete(`http://localhost:8080/users/accounts/${id}`);
    }

    retriveAccount(id){
        return axios.get(`http://localhost:8080/users/accounts/${id}`);
    }

    updateAccount(id, Account){
        return axios.put(`http://localhost:8080/users/accounts/${id}`, Account);
    }

    createAccount(Account){
        return axios.post('http://localhost:8080/users/accounts', Account);
    }
    
    getAccountReportObjects(accountType, month, year){
        return axios.get(`http://localhost:8080/users/accounts/getreportobjects/${accountType}/${month}/${year}`)
    }

    getSum(accountType, month, year){
        return axios.get(`http://localhost:8080/users/accounts/getreportsums/${accountType}/${month}/${year}`)
    }
    
}
export default new AccountServices();