import React, {Component} from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
//import MyData from '../../api/myApi/BillService.js'
import moment from 'moment'
import MyData from '../API/Sales_Management/BillService'

import { useState, useEffect } from 'react'
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
import { useHistory } from 'react-router'
 //import MyData from '../../api/myApi/MyData.js'

import ViewBillDetails from './ViewBillDetails.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';





function ViewNewBill(){

    const [billlist,setbilllist]= useState([])
    const history = useHistory()


    
    
    useEffect(()=>{
      console.log("compooo");
      MyData.viewBill()
      .then((Response) =>{setbilllist(Response.data)})
    
      // settotal([amount]);
    },[])


    const updateClicked=(id)=>{
        history.push('/Sales-management/update/:id');
        alert(id);
      
        // component={Link} {`/updateproduct/${i.pid}`}
        // history.push('/update/:${id}');
        // // to=('/addproduct/${id}');
        // console.log(bid)
      }


      const viewClick=(id)=>{
        history.push(`/Sales-management/viewbilldetails/${id}`);
        alert(id);
        console.log(id)
      }
      
      const deleteClicked=(id)=>{
        // history.push('/addproduct/${id}');
      alert(id);
        MyData.deleteBill(id);
        console.log(Response)
        setbilllist(billlist.filter(billlist =>billlist.id!==id))
      }




    return(
      
        <div className="container">
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>bid</th>
            <th> date</th>
            <th> cName</th>
            {/* <th> pname</th> */}
            
            <th>total</th>
            <th>action</th>
            {/* <th>delete</th> */}
           
          </tr>
        </thead>
        <tbody>

            {billlist.map((b) => (
               <tr key={b.id}>
                <td>{b.id}</td>
                <td>{moment(b.date) .format('YYYY-MM-DD')}</td>   
               <td>{b.cName}</td>
               {/* <td>{b.pName}</td> */}
               <td>{b.total}</td>
               <td><button className="btn btn-success" onClick={() =>{updateClicked(b.id)}}>update</button>
               <button className="btn btn-warning" onClick={() =>{deleteClicked(b.id)}}>delete</button>
               <button className="btn btn-success" onClick={() =>{viewClick(b.id)}}>view</button>
               </td>

               {/* <td><button className="btn btn-success" component={Link} to={`/updateproduct/${i.pid}`}>update</button></td> */}
               
               {/* /updateproduct/:id */}
             </tr> 
            ))}
          
          
        </tbody>
      </Table>

      {/* <Button variant="primary"  onClick={additem}>
       add
      </Button> */}
      </div>





    ); 
}
export default ViewNewBill