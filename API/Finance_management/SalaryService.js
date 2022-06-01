import axios from "axios";

class SalaryServices{
    retriveAllSalarys(){
        return axios.get('http://localhost:8080/users/salary');
    }

    deleteSalary(id){
        return axios.delete(`http://localhost:8080/users/salary/${id}`);
    }

    retriveSalary(id){
        return axios.get(`http://localhost:8080/users/salary/${id}`);
    }

    updateSalary(id, Salary){
        return axios.put(`http://localhost:8080/users/salary/${id}`, Salary);
    }

    createSalary(Salary){
        return axios.post('http://localhost:8080/users/salary', Salary);
    }

    getSum(month, year){
        return axios.get(`http://localhost:8080/users/salary/salarysum/${month}/${year}`)
    }
    getsendtoAccounts(month, year){
        return axios.get(`http://localhost:8080/users/accounts/makesalaryaccount/${month}/${year}`)
    }
    
    
}
export default new SalaryServices();