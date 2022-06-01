// import React, {Component, useEffect, useState} from 'react'
import React, { useState, useEffect } from 'react'
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
import { useHistory } from 'react-router'
// import MyData from '../../api/myApi/BillService.js'


import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from "../API/Sales_Management/ProductService"



function ViewProduct(){

    const [itemlist,setItemlist]= useState([])
    const history = useHistory()

  useEffect(()=>{
  
      ProductService.viewProduct()
      .then((Response) =>{setItemlist(Response.data)})

 
  },[])

// const refresh=()=>{
//   MyData.viewItem()
//   .then((Response) =>{setItemlist(Response.data)})
// }

  const additem=()=>{
  history.push("/Sales-management/addproduct");
  }

  const updateClicked=(pid)=>{
    console.log(pid)
    history.push(`/Sales-management/updateproduct/${pid}`);
    alert(pid);

  // component={Link} {`/updateproduct/${i.pid}`}
  // history.push('/addproduct/${pid}');
  // // to=('/addproduct/${id}');
  // console.log(pid)
  }

  const deleteClicked=(pid)=>{
  // history.push('/addproduct/${id}');
      alert(pid);
      ProductService.deleteProduct(pid)
        .then(res =>{
          setItemlist(itemlist.filter(itemlist =>itemlist.pid!==pid))
        });
      
      // setItemlist(itemlist.filter(itemlist =>itemlist.pid!==pid))
      console.log(Response)
  }
 
//className = "table table-striped table-bordered"
//striped bordered
    return (
    <div className="container">
      <h2>product list</h2>
    <Table striped bordered >
        <thead>
          <tr>
            <th>pid</th>
            <th>pName</th>
            <th>price</th>
            <th>update</th>
            <th>delete</th>
           
          </tr>
        </thead>
        <tbody>

            {itemlist.map((i) => (
               <tr key={i.pid}>
                <td>{i.pid}</td>   
               <td>{i.pName}</td>
               <td>{i.price}</td>
               <td><button className="btn btn-success" onClick={() =>{updateClicked(i.pid)}}>update</button></td>
               <td><button className="btn btn-warning" onClick={() =>{deleteClicked(i.pid)}}>delete</button></td>

               {/* <td><button className="btn btn-success" component={Link} to={`/updateproduct/${i.pid}`}>update</button></td> */}
               
               
             </tr> 
            ))}
          
          
        </tbody>
      </Table>

      <Button variant="primary"  onClick={additem}>
       add product
      </Button>
      </div>
      )

}
export default ViewProduct