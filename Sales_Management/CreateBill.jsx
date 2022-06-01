import React from "react";
import react, { useState, useEffect } from 'react';
// import MyData from '../../api/myApi/BillService.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect, Table } from 'react-bootstrap';

// import BillData from '../../api/myApi/BillService.js'
import ProductService from "../API/Sales_Management/ProductService";
import BillService from "../API/Sales_Management/BillService";



export default function CreateBill() {


  const [pname, setpname] = useState('');
  const [qty, setqty] = useState(0);
  //const[name,setname]=useState('');
  const [amount, setamount] = useState(0);
  const [price, setprice] = useState(0);
  const [total, settotal] = useState(amount);

  // product list enne mekennn
  const [itemlist, setItemlist] = useState([])
  const [b, setb] = useState([])


  //metanin ganneee
  useEffect(() => {
    console.log("compooo");
    ProductService.viewProduct()
      .then((Response) => { setItemlist(Response.data) })


  }, [])


  const clickSubmit = (event) => {
    event.preventDefault();

    const data = event.target;
    const billSubmit = {
      date: data.date.value,
      //date : moment( Date()).format('YYYY-MM-DD'),
      cName: data.cname.value,
      total: data.total.value,
    }
    console.log(billSubmit);

    // MyData.insertBill(billSubmit)
    //   .then((res)=>console.log(res));

    BillService.insertBill(billSubmit)
      .then((res => {
        {
          b.map((p) => {
            let order = { id: res.data.id, pName: p.pName, qty: p.qty, amount: p.amount }
            // let order ={id:res.data.id, pName:pname, qty:qty, amount:amount}
            BillService.insertBillDetails(order)
            console.log(order);
          })
        }
      }))
    //console.log(order);

  };


  const selectprice = (event) => {
    let a = event.target.value;
    console.log(a);
  }



  const entrtQty = (event) => {

    event.preventDefault();
    console.log(event.target.value);

    setqty(event.target.value)

    const a = event.target.value * price;
    console.log(a);


    setamount(event.target.value * price);
  }

  //set kara ganneeee 
  const selectItem = (event) => {
    event.preventDefault();
    // console.log(event.target.value);

    // setpname([...pname,event.target.value]);
    setpname(event.target.value);
    // console.log([pname]);

    itemlist.forEach((p) => {
      if (p.pName == event.target.value)
        setprice(p.price)


    })
    // console.log(pid)

    // {itemlist.map((t) =>(
    //   t.pName==event.target.value && t.price 

    // ))}

    // console.log(event.target.price);
    // b=event.target.value;

    // setprice([event.target.value])
  }


  const moreAdd = (e) => {
    e.preventDefault();
    console.log('add more');

    const o = {
      pName: pname,
      qty: qty,
      price: price,
      amount: amount,
      total: total + amount,

    }
    setb([...b, o]);

    console.log(amount);
    let t = 0;
    // b.forEach(i =>{t+=i.total})
    t = t + o.total;
    console.log('t', t);
    settotal(t);
    console.log('total', total);

    console.log(o)
    // totalcal();

    // console.log(b)
  }
  console.log(b)
  // let p=b.amount;
  // console.log(p)




  return (
    <div className="container">



      <h2>hiiii</h2>
      <h2>bill</h2>
      <Form onSubmit={clickSubmit}>

        <div className="card col-md-20 offset-md-0 offset-md-0">
          <div>
            <td>

              <Form.Group className="mb-3" controlId="formBasicDate">
                date
                <Form.Control type="date" name="date" />

              </Form.Group>

            </td>
          </div>

          <div>
            <td>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="name" name="cname" required />
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

                 
                  <Form.Select required aria-label="Default select example" name="item" required onChange={selectItem}>
                    <option name="item" onChange={selectItem} >Open this select menu</option>

                    {itemlist.map((t) => (
                      <option key={t.id} value={t.pName}>{t.pName}</option>

                    ))}

                  </Form.Select>

                </td>

                <td>
                  <Form.Group className="mb-3" controlId="formBasicItemName">
                   
                    <Form.Control type="number" name="price" value={price} placeholder="rs" readOnly onChange={selectprice} />
                  </Form.Group>
                </td>

                <td>
                  <Form.Group className="mb-3" controlId="formBasicQty">
                    
                    <Form.Control type="number" name="qty" placeholder="qty" onChange={entrtQty} />
                  </Form.Group>
                </td>

                <td>
                  <Form.Control value={amount} type="text" placeholder="value" readOnly name="amount">
                    
                  </Form.Control>


                </td>

               

              </tr>
            </tbody>
          </table>
          total
          <Form.Control value={total} type="text" placeholder="value" readOnly name="total">
            
          </Form.Control>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="primary" onClick={moreAdd}>
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