// import React from "react";
// import react, { useState, useEffect } from 'react';
// import MyData from '../../api/myApi/BillService.js'
// import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
// import moment from 'moment'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
// import CreateBill from "./CreateBill.jsx";

// function BillView(props){

//     // const [bill, setbill] = useState(initialValues)


//     const bill = props.bill;
//     const [bd, setbd] = useState([])

//     // setbd([bd,bill]);

//     setbd([bill])
//     // setbd([...bd,bill]);


//     useEffect(()=>{
//       console.log("compooo");
//       // CreateBill(props.billSubmit);
//       // setbd(props.billSubmit);
//       // setbd([...bd,billSubmit]);
//       // .then((Response) => setbd([Response]));
//       // MyData.viewItem()
//       // .then((Response) =>{setItemlist(Response.data)})
//   })



//     return(

     
// <div className="container">
// <Table striped bordered hover size="sm">
//   <thead>
//     <tr>
//       <th>item</th>
//       <th>price</th>
//       <th>qty</th>
//       <th>amount</th>
//     </tr>
//   </thead>
//   <tbody>

//       {bd=bill.map((b)=>(
//         <tr key={b.id}>
//         <td>{b.item}</td>
//         <td>{b.price}</td>
//         <td>{b.qty}</td>
//         <td>{b.amount}</td>
//       </tr>
//       ))}




    
//   </tbody>
// </Table>
// {console.log('hiii')};


// </div>
//     )
// }
// export default BillView