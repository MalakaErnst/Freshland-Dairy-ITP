/* eslint-disable */
import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import SalaryService from '../../API/Finance_management/SalaryService';

class Salaryform extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
            eid : 'Enter eid',
            job : 'Enter job',
            month : 'Enter month',
            year : 'Enter Year',
            basic:'Enter basic',
            ot : 'Enter ot',
            bonus : 'Enter bonus',
            etf : 'Enter etf',
            epf : 'Enter epf',
            total : 'Enter total'

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    

    validate(values){
        let errors = {}
        if (!values.eid){
            errors.eid = 'Enter A Empoyee ID'
        }

        if (!values.month) {
            errors.month = 'Enter a valid year'
        }
        if (!values.year) {
            errors.year = 'Enter a validyear'
        }

        if (!values.job){
            errors.job = 'Enter A job'
        }

        if (!values.basic){
            errors.basic = 'Enter basic'
        }

        if (!values.ot){
            errors.ot = 'Enter ot'
        }

        if (!values.bonus) {
            errors.bonus = 'Enter a Bonus'
        }
        if (!values.etf) {
            errors.etf = 'Enter a ETF'
        }

        if (!values.epf){
            errors.epf = 'Enter A ETF'
        }

        if (!values.total){
            errors.total = 'Enter A Total'
        }

        return errors
    }
    componentDidMount() {
        if (this.state.id == -1){
            return
        }
        
        SalaryService.retriveSalary(this.state.id)
            .then (response => this.setState({
                month : response.data.month,
                year : response.data.year,
                eid : response.data.eid,
                job : response.data.job,
                basic : response.data.basic,
                ot : response.data.ot,
                bonus : response.data.bonus,
                etf : response.data.etf,
                epf : response.data.epf,
                total : response.data.total
            }))
    }


    onSubmit(values){
        if (this.props.match.params.id == -1){
            SalaryService.createSalary({
                id: this.state.id,
                month : values.month,
                year : values.year,
                eid : values.eid,
                job : values.job,
                basic : values.basic,
                ot : values.ot,
                bonus : values.bonus,
                etf : 1,
                epf : 1,
                total : 1})
            .then(() => this.props.history.push('/FinanceManagement/salary/view'))
        }else{
            SalaryService.updateSalary(this.props.match.params.id , {
                id: this.state.id,
                month : values.month,
                year : values.year,
                eid : values.eid,
                job : values.job,
                basic : values.basic,
                ot : values.ot,
                bonus : values.bonus,
                etf : 1,
                epf : 1,
                total : 1})
        .then(() => this.props.history.push('/FinanceManagement/salary/view'))
         }
    }

    render(){
        
        let { month, year, eid , job, basic ,ot, bonus, etf, epf, total} =this.state
        return(
        <div>
            <h1>Salary</h1>
            <div className = "container">
                <Formik
                    initialValues ={{month, year, eid , job, basic ,ot, bonus, etf, epf, total}}
                    onSubmit = {this.onSubmit}
                    //validateOnChange = {false}
                    //validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage name = "eid" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Employee ID</label>
                                    <Field className ="form-control" type ="text" name ="eid"/>
                                </fieldset>

                                <ErrorMessage name = "job" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Job</label>
                                    <Field className ="form-control" type ="text" name ="job"/>
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

                                <ErrorMessage name = "basic" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Basic</label>
                                    <Field className ="form-control" type ="text" name ="basic"/>
                                </fieldset>

                                

                                <ErrorMessage name = "ot" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Ot</label>
                                    <Field className ="form-control" type ="text" name ="ot"/>
                                </fieldset>

                                <ErrorMessage name = "bonus" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>Bonus</label>
                                    <Field className ="form-control" type ="text" name ="bonus"/>
                                </fieldset>
                                {/*
                                <ErrorMessage name = "etf" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>ETF</label>
                                    <Field className="form-control" type="text" name="etf" />
                                </fieldset>

                                <ErrorMessage name = "epf" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label>EPF</label>
                                    <Field className ="form-control" type ="text" name ="epf"/>
                                </fieldset>

                                <ErrorMessage name = "total" component="div" className = "alert alert-warning"></ErrorMessage>
                                <fieldset className = "form-group">
                                    <label> Total</label>
                                    <Field className ="form-control" type ="text" name ="total"/>
                                </fieldset>*/}


                                <button className ="btn btn-success" type ="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
        )
    }
}
export default Salaryform;