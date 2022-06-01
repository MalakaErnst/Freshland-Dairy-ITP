  
// import faker from 'faker';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { 
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Avatar,
//     Grid,
//     Typography,
//     TablePagination,
//     TableFooter
//  } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     table: {
//       minWidth: 650,
//     },
//     tableContainer: {
//         borderRadius: 15,
//         margin: '10px 10px',
//         maxWidth: 950
//     },
//     tableHeaderCell: {
//         fontWeight: 'bold',
//         backgroundColor: theme.palette.primary.dark,
//         color: theme.palette.getContrastText(theme.palette.primary.dark)
//     },
//     avatar: {
//         backgroundColor: theme.palette.primary.light,
//         color: theme.palette.getContrastText(theme.palette.primary.light)
//     },
//     name: {
//         fontWeight: 'bold',
//         color: theme.palette.secondary.dark
//     },
//     status: {
//         fontWeight: 'bold',
//         fontSize: '0.75rem',
//         color: 'white',
//         backgroundColor: 'grey',
//         borderRadius: 8,
//         padding: '3px 10px',
//         display: 'inline-block'
//     }
//   }));

// let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         phone: faker.phone.phoneNumber(),
//         jobTitle: faker.name.jobTitle(),
//         company: faker.company.companyName(),
//         joinDate: faker.date.past().toLocaleDateString('en-US'),
//         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
//     }
// }

// function MTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//             <TableRow key={row.name}>
//               <TableCell>
//                   <Grid container>
//                       <Grid item lg={2}>
//                           <Avatar alt={row.name} src='.' className={classes.avatar}/>
//                       </Grid>
//                       <Grid item lg={10}>
//                           <Typography className={classes.name}>{row.name}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.email}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
//                       </Grid>
//                   </Grid>
//                 </TableCell>
//               <TableCell>
//                   <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
//                   <Typography color="textSecondary" variant="body2">{row.company}</Typography>
//                 </TableCell>
//               <TableCell>{row.joinDate}</TableCell>
//               <TableCell>
//                   <Typography 
//                     className={classes.status}
//                     style={{
//                         backgroundColor: 
//                         ((row.status === 'Active' && 'green') ||
//                         (row.status === 'Pending' && 'blue') ||
//                         (row.status === 'Blocked' && 'orange'))
//                     }}
//                   >{row.status}</Typography>
//                 </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//         <TablePagination
//             rowsPerPageOptions={[5, 10, 15]}
//             component="div"
//             count={USERS.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

// export default MTable;











// //import React, { Component } from 'react';
// import React, { useState, useEffect} from 'react'
// import VehicleService from '../services/VehicleService';
// import { useHistory } from 'react-router'
// import moment from "moment";

// const LIstVehicleComponent =() =>{

//     const [vehicles , setVehicle] = useState([])
//     const [massage , setMessage] = useState(null)
//     const history = useHistory()
//     const [search, setSearch] = useState("");


//     useEffect(()=>{
//         console.log("component did mount")
//         VehicleService.getVehicle()
//         .then((res) => {setVehicle(res.data)} )
//      },[])

    


//     const addVehicle=()=>{
//         history.push("/add-vehicle");
//     }
//     const editVehicle=(id)=>{
//         history.push(`/update-vehicle/${id}` );
//     }

//     const deleteVehicle=(id)=>{
//         VehicleService.deleteVehicle(id).then( res => {
//             setMessage(`Delete of todo ${id} Successful`)
//             setVehicle(vehicles.filter(vehicle => vehicle.id !== id))}
           
//         );
//     }
    

    
    
//         return (
//             <div >
//                  <h2 className="text-center"> Vehicle List</h2>
//                  {massage && <div className="alert alert-success">{massage}</div>}
//                  <div className="row">
//                  <button className="btn btn-primary" onClick={addVehicle}> Add Vehicle </button>

//                  </div>
//                  <br></br>
//                  <div>
//                      <input type="texr" placeholder="search" className="form-control" style={{
//                          marginTop:20, marginBottom:20, width:"40%"}}
//                          onChange={
//                              (e)=>{
//                                 setSearch(e.target.value)
//                              }
//                          }/>
//                  </div>
        
//                  <div className = "row"></div>
//                     <table  className = "table table-striped table-bordered">
//                     <thead>
//                             <tr>
//                                 <th> Vehicle Register Number</th>
//                                 <th> Vehicale Modle</th>
//                                 <th> Vehicle Category</th>
//                                 <th> Model year</th>
//                                 <th> Department</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 vehicles.filter((val)=>
//                                 {
//                                     if(search===""){
//                                         return val
//                                     }else if(
//                                         val.reg_number.toLowerCase().includes(search.toLowerCase())||
//                                         val.veh_modle.toLowerCase().includes(search.toLowerCase())
//                                     ){
//                                         return val
//                                     }
//                                     return 0;
//                                 }).map(
//                                     (vehicle) =>       
//                                     <tr key = {vehicle.id}>
//                                     <td> {vehicle.reg_number} </td>   
//                                     <td> {vehicle.veh_modle}</td>
//                                     <td> {vehicle.veh_category}</td>
//                                     <td> {moment(vehicle.year).format('YYYY-MM-DD')}</td>
//                                     <td> {vehicle.deparment}</td>
//                                     <td>
//                                         <button onClick={ () => editVehicle(vehicle.id)} className="btn btn-info">Update </button>
//                                         <button style={{marginLeft: "10px"}} onClick={ () => deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
//                                         {/* <button style={{marginLeft: "10px"}} onClick={ () => viewVehicle(vehicle.id)} className="btn btn-info">View </button>  */}
//                                     </td>
//                                 </tr>
//                             )
                                
//                             }


//                         </tbody>
//                     </table>
//             </div>
//         );
    
// }

// export default LIstVehicleComponent;


















import React from "react";
import react, { useState,useEffect } from 'react';
import MyData from '../../api/myApi/BillService.js'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect ,Table} from 'react-bootstrap';

import BillData from '../../api/myApi/BillService.js'
import ProductService from "../../api/myApi/ProductService.js";
import BillService from "../../api/myApi/BillService.js";



function CreateBill(){


const [pname,setpname] =useState('');
const [qty,setqty]=useState(0);
//const[name,setname]=useState('');
const [amount, setamount] = useState(0);
const [price, setprice] = useState(0);
const [total, settotal] = useState(amount);

// product list enne mekennn
const [itemlist,setItemlist]= useState([])
const [b,setb]= useState([])


//metanin ganneee
  useEffect(()=>{
    console.log("compooo");
    ProductService.viewProduct()
    .then((Response) =>{setItemlist(Response.data)})

    
},[])


    const clickSubmit = (event)=>{
      event.preventDefault();
    
          const data = event.target;
          const billSubmit = {
                  date : data.date.value,
                  //date : moment( Date()).format('YYYY-MM-DD'),
                  cName : data.cname.value,
                  total :data.total.value,       
            }
            console.log(billSubmit);
              
             
             BillService.insertBill(billSubmit)
                 .then((res=>{
                  {b.map((p)=>{
                    let order ={id:res.data.id, pName:p.pName, qty:p.qty, amount:p.amount}
                   // let order ={id:res.data.id, pName:pname, qty:qty, amount:amount}
                    BillService.insertBillDetails(order)
                    console.log(order);
                  })}
                }))
                
      
    };
    

        const selectprice = (event)=>{
          let a= event.target.value;
          console.log(a);
        }



     const entrtQty = (event)=>{

        event.preventDefault();
        console.log(event.target.value);

        setqty(event.target.value)

        const a= event.target.value*price;
        console.log(a);
    
   
          setamount( event.target.value*price);
     }
  
//set kara ganneeee 
      const selectItem = (event)=>{
       event.preventDefault();
   
        setpname(event.target.value);
   // console.log([pname]);

      itemlist.forEach((p) => {
      if(p.pName==event.target.value)
      setprice(p.price) 

      
     })
   
  }


  const moreAdd =(e)=>{
    e.preventDefault();
    console.log('add more');

      const o={
      pName:pname,
      qty:qty,
      price:price,
      amount:amount,
      total:total+amount,

      }
      setb([...b,o]);

       console.log(amount);
      let t=0;
     // b.forEach(i =>{t+=i.total})
       t= t+o.total;
       console.log('t', t);
        settotal(t);
       console.log('total', total);

      console.log(o)
     // totalcal();

    // console.log(b)
  }
  console.log(b)
 

    return (
    <div className="container">
        <h2>bill</h2>
        <Form onSubmit={clickSubmit}>
  
          <div className="card col-md-20 offset-md-0 offset-md-0">
                <div>           
                      <td>
                  
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          {/* <Form.Label>date</Form.Label> */}date
                          <Form.Control type="date"  name="date"/>
                          
                        </Form.Group>

                      </td>
                </div>

                  <div>
                    <td>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>name</Form.Label>
                      <Form.Control type="text" placeholder="name" name="cname" required  />
                    </Form.Group>

                    </td>
                    </div>

          <table className="table">
            <thead>
              <tr>
               
                <th>item</th>
                <th>price</th>
                <th>qty</th>
                
                <th>value</th>
              </tr>
            </thead>

            <tbody>
              <tr>

                     <td>

                       {/* drop down */}
                      <Form.Select required aria-label="Default select example" name="item" required onChange={selectItem}>
                        <option  name="item" onChange={selectItem} >Open this select menu</option>
                        
                            {itemlist.map((t) =>(
                              <option  key={t.id}   value={t.pName}>{t.pName}</option> 
                              
                            ))}
                            
                      </Form.Select>

                    </td>

                      <td>
                      <Form.Group className="mb-3" controlId="formBasicItemName">
                      {/* <Form.Label>item name</Form.Label> */}
                      <Form.Control type="number" name="price" value={price} placeholder="rs" readOnly onChange={selectprice} />
                    </Form.Group>
                      </td>

                    <td>
                    <Form.Group className="mb-3" controlId="formBasicQty">
                    {/* <Form.Label>qty</Form.Label> */}
                    <Form.Control type="number" name="qty" placeholder="qty" onChange={entrtQty} />
                  </Form.Group>
                    </td>

                      <td>
                      <Form.Control  value={amount} type="text" placeholder="value" readOnly name="amount">
                      {/* {amount} */}
                      </Form.Control>
                    

                      </td>

                {/* </div>
                  ))}       */}
                        
              </tr>
              </tbody>
              </table>
              total
              <Form.Control  value={total} type="text" placeholder="value" readOnly name="total">
                      {/* {amount} */}
                      </Form.Control>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

          <Button variant="primary"  onClick={moreAdd}>
           add
          </Button>
        </div>
      </Form>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>item</th>
            <th>price</th>
            <th>qty</th>
            <th>amount</th>
           
          </tr>
        </thead>
        <tbody>

            {b.map((i) => (
               <tr key={i.id}>
                <td>{i.pName}</td> 
                <td>{i.price}</td>  
               <td>{i.qty}</td>
              
               <td>{i.amount}</td>
               
               
             </tr> 
             
             
            ))}
          
          
        </tbody>
      </Table>



    </div>
    )

}



export default CreateBill



