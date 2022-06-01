import React, { useState, useEffect} from 'react'
import SalaryService from '../../API/Finance_management/SalaryService'
import { useHistory } from 'react-router'

const SalaryView =() =>{
    const [salary, setsalary] = useState([])
    const [message, setMessage] = useState(null)
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=>{
        refreshSalarys()
    },[])

    const deleteSalaryClicked = (id) =>{
        SalaryService.deleteSalary(id)
        .then(response => {
                setMessage(`Delete Of Salary ${id} successful`)
                refreshSalarys()
            }
        );
    }
    const updateSalaryClicked =(id) =>{
        history.push(`/FinanceManagement/salary/${id}`);
    }
    const printClicked =(id) =>{
        history.push(`/FinanceManagement/salary/report/${id}`);
    }

    
    const refreshSalarys=() =>{

        SalaryService.retriveAllSalarys()
            .then(response => {setsalary(response.data)}
            )
    }

    return(
        <>
        <div className = "ViewSalary">
                <h1>List OF Salarys </h1>
                {message && <div className ="alert alert-succcess">{message}</div>}

                <br></br>
                 <div>
                     <input type="text" placeholder="search" className="form-control" style={{
                         marginLeft:"10%",marginTop:20, marginBottom:20, width:"40%"}}
                         onChange={
                             (e)=>{
                                setSearch(e.target.value)
                             }
                         }/>
                 </div>

                 <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Empoyee ID</th>
                            <th>Job</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Basic</th>
                            <th>OT</th>
                            <th>Bonus</th>
                            <th>ETF</th>
                            <th>EPF</th>
                            <th>Total</th>
                            <th>Delete</th>
                            <th>Update</th>
                            <th>Pay Sheet</th>
                        </tr>
                    </thead>
                    <tbody>
                        { salary.filter((val) =>
                            {
                                if (search === ""){
                                    return val
                                }
                                else if (
                                    val.eid.toLowerCase().includes(search.toLowerCase())||
                                    val.job.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return val
                                }
                                return 0;
                            }).map(
                                (salary)=>
                                <tr key ={salary.id}>
                                    <td>{salary.eid}</td>
                                    <td>{salary.job}</td>
                                    <td>{salary.month}</td>
                                    <td>{salary.year}</td>
                                    <td>{salary.basic}</td>
                                    <td>{salary.ot}</td>
                                    <td>{salary.bonus}</td>
                                    <td>{salary.etf}</td>
                                    <td>{salary.epf}</td>
                                    <td>{salary.total}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => deleteSalaryClicked(salary.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => updateSalaryClicked(salary.id)}>Update</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => printClicked(salary.id)}>print</button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>

        </div>
        </>
    );

}
export default SalaryView;