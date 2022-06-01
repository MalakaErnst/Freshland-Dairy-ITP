// // eslint-disable
// import React, {Component} from 'react'
// import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
// import moment from 'moment'
// import { Field, Form, Formik } from 'formik'
// import MyData from '../../api/myApi/BillService.js'
// import ViewNewBill from './ViewNewBill.jsx'

// class UpdateBill extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             bid : this.props.match.params.bid,
//             date : moment(new Date()).format('YYYY-MM-DD'),
//             cname : '',
//             item : '',
//             qty : '',
//             total : '',

//         }

//         this.onSubmit = this.onSubmit.bind(this)
//         // this.cal = this.cal.bind(this)
//         this.qtychangeHandler = this.qtychangeHandler.bind(this)


//     }

//     componentDidMount() {

//         if(this.state.bid==-1){
//             return
//         }

//         MyData.retrieveBill(this.state.bid)
//         .then(response => this.setState({
//             date: moment(response.data.date).format('YYYY-MM-DD'),
//             cname: response.data.cname,
//             item: response.data.item,
//             qty: response.data.qty,
//             total: response.data.total,
//         }))


//         // this.cal();
//         // this.qtychangeHandler();
//     }    

//         onSubmit(values) {

//             let m = {
//                 id: this.state.bid,
//                 date: values.date,
//                 name: values.name,
//                 item: values.item,
//                 qty: values.qty,
//                 amount: values.amount,

//             }

//             if (this.state.bid ==-1) {
//                 MyData.insertBill(m).then(() => this.props.history.push("/view"))

//             } else {

//                 MyData.updateBill(this.state.bid, m ).then(() => this.props.history.push("/view"))

//             }

//         }

//         validate(values){
            
//         }

//         // cal(event){
//             // let p = 500
//             // let i ={qty: values.qty,amount: values.amount}
//             // cal=() =>{
//             //     console.log('quentity:', this.state.qty)
//             // this.setState( {
                
//             //     amount: this.state.qty * 500,
//             //     // console.log('Cal Function')
                
//             //   } )
//             //   console.log('Cal Function')
//             // }
//         // }
//             // // if(values.item=="milk")
//             // console.log(values.amount)
//             // // this.state.amount= p*this.state.qty
//             // // console.log('enwatheee')
//         //     console.log(this.amount)
//         //     // return i

//         // }

//         qtychangeHandler(event) {
//             console.log(event.target.value)
//             this.setState({
//                 qty: event.target.value,
//                 amount: event.target.value * 500,
//                 // name: event.target.values,
//                 // item: event.target.values,

//             });
            
//         }

    


//     render(){

//         let {date,name,item,qty,amount}= this.state

//         return(
//                 <div className="UpdateBill">
//                     <h2>bill</h2>
//                     <div className="container">
//                         <Formik initialValues={{date,name,item,qty,amount}} onSubmit={this.onSubmit} validate={this.validate}  enableReinitialize={true}>
//                             {
//                                 (props) =>  (
//                                     <Form>
//                                         <div>
//                                     <td><fieldset className="form-group" >
                                       
//                                        <Field className="form-control" type="date" name="date" />
//                                    </fieldset></td>
                                   
//                                     <div>
//                                    <td> <fieldset className="form-group">
                                       
//                                        <Field className="form-control" type="text" name="name" />
//                                    </fieldset></td>
//                                     </div>
//                                         <table className="table">
//                                         <thead>
//                                         <tr>
//                                             {/* <th>id</th> */}
//                                             {/* <th>date</th>
//                                             <th>name</th> */}
//                                             <th>item</th>
//                                             {/* <th>price</th> */}
//                                             <th>qty</th>
//                                             <th>rs</th>
//                                         </tr>
//                                          </thead> 

//                                          <tbody>
//                                              <tr>


                                        

                                       

//                                       {/* <td>  <fieldset className="form-group" >
                                            
//                                             <Field className="form-control" type="text" name="item"/>
//                                         </fieldset></td> */}

                                      

//                                            <td> <fieldset className="form-group">
//                                            <Field className="form-control" component="select"  name="item"  >
                                                
//                                                <option value="ice">ice</option> 
//                                                <option value="milk">milk</option> 
//                                                <option value="cake">cake</option> 
//                                                </Field>
//                                            </fieldset></td>


//                                            {/* <td> <fieldset className="form-group">
                                               
//                                            <Field className="form-control" component="select"  name="item"  >
//                                            <select>
//                                                 <option disabled selected="true">select</option>
//                                                <option value="ice">ice</option> 
//                                                <option value="milk">milk</option> 
//                                                <option value="cake">cake</option> 
//                                                </select>
//                                                </Field>
                                               
//                                            </fieldset></td> */}



//                                         {/* <td> <fieldset className="form-group">
//                                                  500
//                                             </fieldset></td> */}

//                                       <td>  <fieldset className="form-group">
                                            
//                                             <Field className="form-control" type="text" name="qty" onChange={this.qtychangeHandler}/>
//                                         </fieldset></td>

//                                      {/* <td>   <fieldset className="form-group">
                                            
//                                             <Field className="form-control" type="text" name="amount"/>
//                                         </fieldset></td> */}

//                                         <td> <fieldset className="form-group">
//                                             {/* {this.state.qty*50} */}
//                                             {this.state.amount}
//                                             </fieldset></td>
//                                         {console.log(this.state.qty)}
                                        

//                                         </tr>

//                                         </tbody>
//                                         </table>
//                                         {/* <button className="btn btn-success" onClick={this.cal}>cal</button> */}
//                                         <button className="btn btn-success" type="submit" >save</button>
//                                         </div>
//                                     </Form>
                                     
//                                 )

//                             }
//                         </Formik>
//                         {/* <button className="btn btn-success" onClick={this.cal}>cal</button> */}

                        



//                     </div>
//                     {/* <div>id - {this.props.match.params.id}</div> */}
                    
//                 </div>
//         )
//     }
// } 
 
// export default UpdateBill