/* eslint-disable */
import moment from 'moment';
import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import BillDataService from '../../API/Finance_management/BillServise.js'

class billform extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
            description : 'Enter Discription',
            amount:'Enter Amount',
            billDate : moment(new Date()).format('YYYY-MM-DD'),
            billType : 'Enter Bill Type'
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate(values){
        let errors = {}
        if (!values.description){
            errors.description = 'Enter A Discription'
        }else if (values.description.length < 5){
            errors.description = "Enter Atleast 5 Charactors in description"
        }

        if (!moment(values.billDate).isValid()) {
            errors.billDate = 'Enter a valid Date'
        }

        if (!values.amount){
            errors.amount = 'Enter A Amount'
        }else if (!/^[0-9]{2,8}$/i.test (values.amount)){
            errors.amount = "Enter Correct Amount"
        }
        if (!values.billType){
            errors.billType = 'Enter A Type'
        }

        return errors
    }
    componentDidMount() {
        if (this.state.id == -1){
            return
        }
        
        BillDataService.retriveBill(this.state.id)
            .then (response => this.setState({
                description : response.data.discription,
                amount : response.data.amount,
                billDate : moment(response.data.billDate).format('YYYY-MM-DD'),
                billType : response.data.billType

            }))
    }


    onSubmit(values){
        if (this.props.match.params.id == -1){
            BillDataService.createBill({
                id: this.state.id,
                discription : values.description,
                amount : values.amount,
                billDate : values.billDate,
                billmonth: null,
                billyear: null,
                billType : values.billType})
            .then(() => this.props.history.push('/FinanceManagement/bills/view'))
        }else{
            BillDataService.updateBill(this.props.match.params.id , {
                id: this.state.id,
                discription : values.description,
                amount : values.amount,
                billDate : values.billDate,
                billmonth: null,
                billyear: null,
                billType : values.billType})
        .then(() => this.props.history.push('/FinanceManagement/bills/view'))
         }
    }


    render(){
        //let description = this.state.description
        
        let {description, amount, billDate, billType} =this.state
        return(
        <div><br></br>
            <h1>Bill</h1>
            <div className = "container">
                <Formik
                    initialValues ={{description, amount, billDate, billType}}
                    onSubmit = {this.onSubmit}
                    //validateOnChange = {false}
                    //validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage name = "description" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Description</label>
                                    <Field className ="form-control" type ="text" name ="description"/>
                                </fieldset>
                                <ErrorMessage name = "amount" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Amount</label>
                                    <Field className ="form-control" type ="text" name ="amount"/>
                                </fieldset>
                                <ErrorMessage name = "billDate" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                        <label>Bill Date</label>
                                        <Field className="form-control" type="date" name="billDate" />
                                </fieldset>
                                <ErrorMessage name = "billType" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Bill Type</label>
                                    <Field className ="form-control" type ="text" name ="billType"/>
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
export default billform;