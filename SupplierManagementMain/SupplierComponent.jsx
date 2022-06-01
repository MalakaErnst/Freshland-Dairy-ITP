import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
// eslint-disable-next-line
import { Form, Field, Formik, ErrorMessage } from 'formik'
import SuppliersDataService from '../API/SupplierManagement/SuppliersDataService'
//import Authentication from './Authentication'
import HeaderComponent from './HeaderComponent'
import './formCSS.css'
//import ListSupplierComponent from './ListSuppliersComponent'

class SupplierComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            id : this.props.match.params.id,
            name :'',
            item :'',
            price :'',
            phoneNo :'',
            address :'',
            accNo :''
        }
    

    this.onSubmit=this.onSubmit.bind(this)
    this.validate=this.validate.bind(this)

    }

    componentDidMount(){
        if(this.state.id===-1){
            return
        }
        let username = "Chamal"

        SuppliersDataService.retrieveSuppliers(username,this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                item: response.data.item,
                price: response.data.price,
                phoneNo: response.data.phoneNo,
                address: response.data.address,
                accNo: response.data.accNo
               
            }))
        
    }


    validate(values){
        let errors={}
        if(!values.name){
            errors.name=alert('Enter a name')
        }
        else if(values.name.length < 4){
            errors.name=alert('Enter at least 4 letters in the name')
        }
        if(!values.item){
            errors.item=alert('Enter a item')
        }
        if(!values.price){
            errors.price=alert('Enter a price')
        }
        if(!values.address){
            errors.address=alert('Enter an Address')
        }
        if(!values.accNo){
            errors.accNo=alert('Enter  the Account No')
        }
        else if(!/^[0-9]{9}$/i.test (values.accNo)){
            errors.accNo=alert('Enter 9 numbers in the account number')
        }
        
       
        return errors
    }


    onSubmit(values){
        let username = "Chamal"
        

        let Supplier={
            id: this.state.id,
            name: values.name,
            item: values.item,
            price: values.price,
            phoneNo: values.phoneNo,
            address: values.address,
            accNo: values.accNo
        }
        // eslint-disable-next-line
        if(this.state.id==-1){
            SuppliersDataService.createSuppliers(username, Supplier)
            .then(
                ()=>{this.props.history.push('/SupplierManagement/Suppliers')}
            )
            console.log(values)
            }
        
        else{
            SuppliersDataService.updateSuppliers(username, this.state.id, Supplier)
            .then(
                ()=>{this.props.history.push('/SupplierManagement/Suppliers')}
            )
            console.log(values)
            }
    }


    render(){
        let name=this.state.name
        let item=this.state.item
        let price=this.state.price
        let phoneNo=this.state.phoneNo
        let address=this.state.address
        let accNo=this.state.accNo

        

        return (
            <>
            <HeaderComponent/>
        <div><br></br>
        <h2 className="ui black header"><i className="users icon"></i>Enter Info</h2><br></br>
       
        <div className="container">
            <div class="row">
            <div class="col-sm-10">
             <div class="frmf">
                <div class="cardF">
                <div class="boxF">
            
                <Formik 
                    initialValues={{name ,item, price, phoneNo, address, accNo}}
                    onSubmit={this.onSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}  //change; true 
                    validate={this.validate}
                    enableReinitialize={true}
                    >
                    {(props) => (
                        <Form className="ui large form">
                            {/* <ErrorMessage name="name" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="accNo" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="address" component="div" className="alert alert-warning"/> */}
                            
                            <fieldset className = "form-group">
                                <label>Name</label>
                                <Field className="form-control" type="text"  name="name"/>
                            </fieldset>
                            <fieldset className = "form-group">
                                <label>Item</label>
                                <Field className="form-control" type="text" name="item"/>
                            </fieldset>
                            <fieldset className = "form-group">
                                <label>Price</label>
                                <Field className="form-control" type="number" name="price"/>
                            </fieldset>
                            <fieldset className = "form-group">
                                <label>PhoneNo</label>
                                {/* <Field className="form-control" type="number" name="phoneNo"/> */}
                                <Field className="form-control" type = "tel" name="phoneNo" pattern ="[0-9]{10}" required/>
                            </fieldset>
                            <fieldset className = "form-group">
                                <label>Address</label>
                                <Field className="form-control" type="text" name="address"/>
                            </fieldset>
                            <fieldset className = "form-group">
                                <label>AccNo</label>
                                <Field className="form-control" type="number" name="accNo" />
                            </fieldset>

                            <br></br>
                            <div class="col-auto">
                            <button className='ui big green icon button' type="submit">
                                <i className='save icon'></i> Save</button>
                                </div>
                        </Form>
                    )}
                </Formik>
                <br></br>

                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div></>)
    }
}
export default SupplierComponent