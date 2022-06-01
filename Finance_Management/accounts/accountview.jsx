import React, { useState, useEffect} from 'react'
import AccountService from '../../API/Finance_management/AccountService';
import { useHistory } from 'react-router'

const AccountView =() =>{
    const [acounts, setaccounts] = useState([])
    const [message, setMessage] = useState(null)
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=>{
        refreshAccounts()
    },[])

    
    const deleteAccountClicked = (id) =>{
        AccountService.deleteAccount(id)
        .then(response => {
                setMessage(`Delete Of Account ${id} successful`)
                refreshAccounts()
            }
        );
    }
    const updateAccountClicked =(id) =>{
        history.push(`/FinanceManagement/accounts/${id}`);
    }

    
    const refreshAccounts=() =>{

        AccountService.retriveAllAccounts()
            .then(response => {setaccounts(response.data)}
            )
    }
    
    
    return(
        <><br></br>
        <div className = "ViewAccounts">
                <h1>List OF Accounts </h1>
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
                            <th>Department</th>
                            <th>Account Type</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Amount</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { acounts.filter((val) =>
                            {
                                if (search === ""){
                                    return val
                                }
                                else if (
                                    val.department.toLowerCase().includes(search.toLowerCase())||
                                    val.accountType.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return val
                                }
                                return 0;
                            }).map(
                                (acounts)=>
                                <tr key ={acounts.id}>
                                    <td>{acounts.department}</td>
                                    <td>{acounts.accountType}</td>
                                    <td>{acounts.month}</td>
                                    <td>{acounts.year}</td>
                                    <td>{acounts.amount}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => deleteAccountClicked(acounts.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => updateAccountClicked(acounts.id)}>Update</button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>

        </div><br></br>
        </>
    );
}
export default AccountView;