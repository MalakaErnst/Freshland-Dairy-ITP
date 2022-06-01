
import React, { Component } from "react";
// import react, { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect ,Table} from 'react-bootstrap';
// import { useHistory,useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ProductService from "../../api/myApi/ProductService.js";
import ProductService from "../API/Sales_Management/ProductService"


import react, { useState,useEffect } from 'react';
 import { useHistory,useParams } from 'react-router'


// class UpdateProduct extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             pid : this.props.match.params.pid,
//             pName: '',
//             price:''


//         }

//         // this.onSubmit = this.onSubmit.bind(this)
//         // // this.cal = this.cal.bind(this)
//         // this.qtychangeHandler = this.qtychangeHandler.bind(this)
//         this.savedata = this.savedata.bind(this);
//         this.changepname = this.changepname.bind(this);
//         this.changeprice = this.changeprice.bind(this);


//     }


//     componentDidMount() {

//         console.log(this.state.pid)
//         ProductService.getProductByID(this.state.pid)
//             .then(response => 
//                 this.setState({
//                 pName:response.data.pName,
//                 price:response.data.price


//         }))


       
//     } 
    
    


//     changepname = (e) =>{
//         this.setState({pName:e.target.value})
//     }

//     changeprice = (e) =>{
//         this.setState({price:e.target.value})
//     }

//     savedata = (e)=>{
//         e.preventDefault();
//         let p ={
            
//             pName:this.state.pName,
//             price:this.state.price
//         };
//         console.log(p);
//         ProductService.updateProduct(this.state.pid,p)
//         .then(response =>{this.props.history.push('/ViewProduct')});
//     }



//     render() {
//         return (

//             <div className="container" >
//                 <h2>update item</h2>
//                 <div className="card col-md-6 offset-md-3 offset-md-3">
//                 <div className="card-body">
//             <Form>

//                 <Form.Group className="mb-3" controlId="itemname">
//                     <Form.Label>item name</Form.Label>
//                     <Form.Control type="text"  value={this.state.pName} placeholder="name" name="pName"  onChange={this.changepname} />
//                 </Form.Group>
//                     <Form.Group className="mb-3" controlId="price">
//                     <Form.Label>price</Form.Label>
//                     <Form.Control type="number" value={this.state.price} placeholder="price" name="price"  onChange={this.changeprice} />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" onClick={this.savedata}>
//                     Submit
//                 </Button>
//             </Form>
//             </div>
//             </div>
//              </div>
//         )
//     }

// }
// export default UpdateProduct
















function UpdateProduct(props){

  
const {pid}= useParams();
const [product,setproduct] =useState({pid:props.pid,pName:'',price:''});
const history = useHistory()



console.log(pid)
console.log(product)
useEffect(()=>{
    console.log("compooo");
    
    ProductService.getProductByID(pid)
        .then((Response)=>
        {setproduct({pName:Response.data.pName,
                     price:Response.data.price})});
  console.log(product)
    
  },[])




const clickSubmit=(event)=>{
    event.preventDefault();
    const psubmit = {
        
        pName:event.target.pName.value,
        price:event.target.price.value,

        // setproduct([psubmit])
    }

    setproduct([psubmit])
    console.log(product);
    ProductService.updateProduct(pid,psubmit)
    .then(res =>{ history.push("/ViewProduct") })
    // history.push("/")
    console.log(psubmit);
    console.log(Response);
    // history.push("/item")

}



const changeName=(event)=>{
    setproduct({pName:event.target.value})
    //value=event.target.value;
}

const changePrice=(event)=>{
    setproduct({price:event.target.value})
    //value=event.target.value;
}
// history.push("/item")

// function ProductAdd(){
    return (
<div className="container">
    <Form onSubmit={clickSubmit}>

  <Form.Group className="mb-3" controlId="itemname">
    <Form.Label>item name</Form.Label>
    <Form.Control type="text" placeholder="name" name="pName" value={product.pName } onChange={changeName}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label>price</Form.Label>
    <Form.Control type="number" placeholder="price" name="price"  value={product.price  } onChange={changePrice} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
)
}
export default UpdateProduct