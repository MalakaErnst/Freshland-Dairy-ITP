//import React, { Component } from 'react';
import React, { useState, useEffect} from 'react'
import BillDataService from '../../API/Finance_management/BillServise.js'
import { useHistory } from 'react-router'
import moment from "moment";
//import { Search } from '@material-ui/icons';

const FmBillView =() =>{
    
    const [bills, setBills] = useState([])
    const [message, setMessage] = useState(null)
    const [search, setSearch] = useState("");
    const history = useHistory()
    
    useEffect(()=>{
        refreshBills()
    },[])

    
    const deleteBillClicked = (id) =>{
        BillDataService.deleteBill(id)
        .then(response => {
                setMessage(`Delete Of Bill ${id} successful`)
                refreshBills()
            }
        );
    }
    const updateBillClicked =(id) =>{
        history.push(`/FinanceManagement/bills/${id}`);
    }

    
    const refreshBills=() =>{

        BillDataService.retriveAllBills()
            .then(response => {setBills(response.data)}
            )
    }
    
    
    return(
        <><br></br>
        <div className = "ViewBils">
                <h1>List Bills </h1>
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
                            {/*<th>ID</th>*/}
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Bill Date</th>
                            <th>Bill Type</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bills.filter((val) =>
                            {
                                if (search === ""){
                                    return val
                                }
                                else if (
                                    val.discription.toLowerCase().includes(search.toLowerCase())||
                                    val.billType.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return val
                                }
                                return 0;
                            }).map(
                                (bills)=>
                                <tr key ={bills.id}>
                                    {/*<td>{bills.id}</td>*/}
                                    <td>{bills.discription}</td>
                                    <td>{bills.amount}</td>
                                    <td>{moment(bills.billDate).format('YYYY-MM-DD')}</td>
                                    <td>{bills.billType}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => deleteBillClicked(bills.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => updateBillClicked(bills.id)}>Update</button></td>
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
export default FmBillView;