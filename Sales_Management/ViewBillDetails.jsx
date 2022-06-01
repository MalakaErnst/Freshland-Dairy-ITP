
import React, {Component} from 'react'

//import MyData from '../../api/myApi/BillService.js'
import moment from 'moment'
import MyData from '../API/Sales_Management/BillService'

import { useState, useEffect } from 'react'
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
import { useHistory,useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewBillDetails(props){

    const {id}= useParams();
    //const {billlist}= useParams();
    const [bill,setbill] =useState([]);
    const history = useHistory()
    const [details,setdetails] = useState([]);


    //const bid:props.id,
    console.log( 'view',id);
   //console.log(billlist);

    useEffect(()=>{
        console.log("detailss");
        MyData.retrieveBill(id)
        .then((Response) =>{setbill(Response.data)})
        console.log(bill);
        // settotal([amount]);

        MyData.retrieveBillDetailsByID(id)
        .then((Response) =>{setdetails(Response.data)})

      },[])

      console.log(bill);
      console.log(details);

      return(

        <div className="container">
        <h2>detilsss</h2>
        id={bill.id}
         date={moment(bill.date) .format('YYYY-MM-DD')}
         name={bill.cName}
         total={bill.total}
       

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>item</th>
            
            <th>qty</th>
            <th>amount</th>
           
          </tr>
        </thead>
        <tbody>

            {details.map((i) => (
               <tr key={i.id}>
                <td>{i.billproductpk.pName}</td> 
                
               <td>{i.qty}</td>
              
               <td>{i.amount}</td>
               
               
             </tr> 
             
             
            ))}
          
          
        </tbody>
      </Table>
        </div>
);

}
export default ViewBillDetails


