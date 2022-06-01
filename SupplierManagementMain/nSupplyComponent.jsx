import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import SupplyDataService from '../API/SupplierManagement/SupplyDataService'
import Authentication from './Authentication'
//import ListSupplierComponent from './ListSuppliersComponent'
import moment from 'moment'

class nSupplyComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            sid : this.props.match.params.sid,
            Id :'',
            price :'',
            qty :'',
            total: '',
            date: moment(new Date()).format('YYYY-MM-DD')
           
        }
    

    this.onSubmit=this.onSubmit.bind(this)
    this.validate=this.validate.bind(this)

    }

    componentDidMount(){
        if(this.state.sid===-1){
            return
        }
        let username = "Chamal"                       // let id = supplier.id        or       none at all
        SupplyDataService.retrieveSupply(username, this.state.sid)              // (id,this.state.sid)       or         (Supplier,this.state.sid)
            .then(response => this.setState({
                price: response.data.price,
                Id: response.data.Id,
                qty: response.data.qty,
                total: response.data.total,
                date: moment(response.data.date).format('YYYY-MM-DD')
               
            }))
        
    }


    validate(values){

        let errors={}
        if(!values.qty){
            errors.qty='Enter a qty'
        }
        if(!values.price){
            errors.price='Enter Item price'
        }
        return errors
    }


    onSubmit(values){
        let username = "Chamal"           // let id = supplier.id      or         none
        
        

        let Supply={
            sid: this.state.sid,
            ssid: values.Id,
            price: values.price,
            qty: values.qty,
            date: values.date,
            
        }
        if(this.state.sid===-1){
            SupplyDataService.createSupply(username, Supply)            //(Supplier, Supply)
            .then(
                ()=>this.props.history.push(`/Supplyy`)
            )
            console.log(values)
            }
        
        else{
            SupplyDataService.updateSupply(username, this.state.sid, Supply)
            .then(
                ()=>{this.props.history.push('/Supplyy')}
            )
            console.log(values)
            }
    }


    render(){
        
        let Id=this.state.Id
        let price=this.state.price
        let qty=this.state.qty
        let total=this.state.total
        let date=this.state.date
       

        return (
        <div><br></br><h1 className="ui olive inverted header">Input stock </h1>
            <div className="container">
            
                <Formik 
                    initialValues={{Id, price, qty, date, total}}
                    onSubmit={this.onSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}  //change; true 
                    validate={this.validate}
                    enableReinitialize={true}
                    >
                    {(props) => (
                        <Form className="ui inverted large form">
                            <ErrorMessage name="qty" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="price" component="div" className="alert alert-warning"/>
                            
                            <fieldset className = "field">
                                <label>Id</label>
                                <Field className="form-control" type="number" name="Id"/>
                            </fieldset>
                            <fieldset className = "field">
                                <label>Price</label>
                                <Field className="form-control" type="number" name="price"/>
                            </fieldset>
                            <fieldset className = "field">
                                <label>qty</label>
                                <Field className="form-control" type="number" name="qty"/>
                            </fieldset>
                            <fieldset className = "field">
                                <label>date</label>
                                <Field className="form-control" type="date" name="date"/>
                            </fieldset>
                            
                            <br></br>
                            <button className='ui big green icon button' type="submit">
                                <i className='save icon'></i> Save</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>)
    }
}
export default nSupplyComponent