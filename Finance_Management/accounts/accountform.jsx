/* eslint-disable */
import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
//import AccountService from '../../api/lahiru/AccountService.js';
import AccountService from '../../API/Finance_management/AccountService';

class Accountform extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
            year : 'Enter Year',
            amount:'Enter Amount',
            department : 'Enter Department',
            month : 'Enter month',
            accountType : 'Enter Type'
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    

    validate(values){
        let errors = {}
        if (!values.department){
            errors.department = 'Enter A Discription'
        }else if (values.department.length < 5){
            errors.department = "Enter Atleast 5 Charactors in department"
        }

        if (!values.month) {
            errors.month = 'Enter a valid year'
        }
        if (!values.year) {
            errors.year = 'Enter a validyear'
        }else if (!/^[0-9]{4}$/i.test (values.year)){
            errors.year = "Enter Correct Year"
        }

        if (!values.amount){
            errors.amount = 'Enter A Amount'
        }else if (!/^[0-9]{2,8}$/i.test (values.amount)){
            errors.amount = "Enter Correct Amount"
        }

        if (!values.accountType){
            errors.accountType = 'Enter A Type'
        }

        return errors
    }
    componentDidMount() {
        if (this.state.id == -1){
            return
        }
        
        AccountService.retriveAccount(this.state.id)
            .then (response => this.setState({
                month : response.data.month,
                year : response.data.year,
                amount : response.data.amount,
                department : response.data.department,
                accountType : response.data.accountType
            }))
    }


    onSubmit(values){
        if (this.props.match.params.id == -1){
            AccountService.createAccount({
                id: this.state.id,
                month : values.month,
                year : values.year,
                amount : values.amount,
                department : values.department,
                accountType : values.accountType})
            .then(() => this.props.history.push('/FinanceManagement/accounts/view'))
        }else{
            AccountService.updateAccount(this.props.match.params.id , {
                id: this.state.id,
                month : values.month,
                year : values.year,
                amount : values.amount,
                department : values.department,
                accountType : values.accountType})
        .then(() => this.props.history.push('/FinanceManagement/accounts/view'))
         }
    }

    render(){
        
        let {department, amount, month, accountType, year} =this.state
        return(
        <div><br></br>
            <h1>Account</h1>
            <div className = "container">
                <Formik
                    initialValues ={{department, amount, month, accountType, year}}
                    onSubmit = {this.onSubmit}
                    //validateOnChange = {false}
                    //validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage name = "department" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Department</label>
                                    <Field className ="form-control" type ="text" name ="department"/>
                                </fieldset>

                                <ErrorMessage name = "amount" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Amount</label>
                                    <Field className ="form-control" type ="text" name ="amount"/>
                                </fieldset>

                                <ErrorMessage name = "month" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Month</label>
                                    <Field className="form-control" type="text" name="month" />
                                </fieldset>


                                <ErrorMessage name = "year" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label> Year</label>
                                    <Field className ="form-control" type ="text" name ="year"/>
                                </fieldset>


                                

                                <ErrorMessage name = "accountType" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Type</label>
                                    <Field className ="form-control" type ="text" name ="accountType"/>
                                </fieldset>

                                


                                <button className ="btn btn-success" type ="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            <br></br>
        </div>
        )
    }
}
export default Accountform;