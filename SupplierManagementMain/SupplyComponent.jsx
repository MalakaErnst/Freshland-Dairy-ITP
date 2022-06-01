import React from "react";
import  { useState,useEffect } from 'react';
import HeaderComponent from './HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,} from 'react-bootstrap';
import { useHistory } from 'react-router'
// import ProductService from "../../api/myApi/ProductService.js";
//import ProductService from "../API/Sales_Management/ProductService"
import SupplyDataService from "../API/SupplierManagement/SupplyDataService";
import SuppliersDataService from "../API/SupplierManagement/SuppliersDataService";
//import Authentication from './Authentication'


function SupplyComponent(props){

  

const [Supply,setSupply] =useState([]);
const history = useHistory()
const [suplist,setSuplist]= useState([]);

const [Price,setPrice]= useState(0);
const [amount,setAmount]= useState(0);

const pid = props.match.params.id;

useEffect(()=>{
    console.log("compooo");
    SuppliersDataService.retrieveAllSuppliers()
    .then((Response) =>{setSuplist(Response.data)})
    
  },[])


const clickSubmit=(event)=>{
    let username = "Chamal"
    event.preventDefault();
    const Sup = {
        //sid:event.target.sid.value,
        sname:event.target.sname.value,
        qty:event.target.qty.value,
        amount:event.target.amount.value,
        date : event.target.date.value,      
    }

 
 

    setSupply([Sup])
    console.log(Supply);
    // if(Sup.sid===-1){                                 //balapn - supply.sid
        SupplyDataService.createSupply(username,Sup)
        .then(res =>{ history.push(`/SupplierManagement/Supplyy`) })
        
        console.log(Response);
        // history.push("/")
        console.log(Sup);
        console.log(Response);
        // history.push("/item")
    
}



const selectName = (event)=>{
    event.preventDefault();

     //setName(event.target.value);
// console.log([pname]);

   suplist.forEach((p) => {
   if(p.name==event.target.value)
   setPrice(p.price) 
   console.log(Price)
   
  })

}
console.log(Price)


const enterQty = (event)=>{

    event.preventDefault();
    console.log(event.target.value);

    // setqty(event.target.value)

    const a= event.target.value*Price;
    console.log(a);


      setAmount( a );
 }
// history.push("/item")

// function ProductAdd(){
    return (
    <>
    <HeaderComponent/>
        <div className="container" >
            <br></br>
                <h2><i className=" warehouse icon"></i> Add Supply</h2><br></br>

            <div className="container"> 
             <div class="row"> 
             <div class="col-sm-10">
             <div class="frmf"> 
                 <div class="cardF">
                <div class="boxF">

        <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
                
            <Form onSubmit={clickSubmit}>
                
                    {/* drop down */}
                    <Form.Select required aria-label="Default select example" name="sname" required onChange={selectName}>
                            <option  name="sname" onChange={selectName} >Select a Supplier</option>
                            
                                {suplist.map((t) =>(
                                <option  key={t.id}   value={t.name}>{t.name}</option> 
                                
                                ))}
                                
                    </Form.Select>
                            <br></br>
                    <Form.Group className="mb-3" controlId="formBasicItemName">
                      <Form.Label>price</Form.Label>
                      <Form.Control type="number" name="price" value={Price}  readOnly  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="qty">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number"  name="qty" min="1" max="5000" onChange={enterQty}/>
                    </Form.Group>

                    <Form.Label>Amount</Form.Label>
                    <Form.Control  value={amount} type="text"  readOnly name="amount">
                      {/* {amount} */}
                      </Form.Control>
                        <br></br>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Select the Date</Form.Label>
                        <Form.Control type="date"  name="date" />
                    </Form.Group>


                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
        
            </Form>
            </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         
</>);
}
export default SupplyComponent