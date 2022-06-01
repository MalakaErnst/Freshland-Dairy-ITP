import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import moment from 'moment';
import BillDataService from '../../API/Finance_management/BillServise.js'

class BillReportSearch extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            month : moment(new Date()).format('YYYY-MM'),
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    
    onSubmit(values){

        this.props.history.push(`/FinanceManagement/bills/report/${values.month}`)
        BillDataService.createBillAccount(values.month)

    }
    
        
    
    render(){
        let {month} =this.state
        return(
            <>
            <h1>Genarate Salary Report</h1>
            <div className="container">
            <Formik
                initialValues ={{month}}
                onSubmit = {this.onSubmit}
                enableReinitialize = {true}
            >
                {
                    (props)=> (
                        <Form>
                        
                        <fieldset className = "form-group">
                        
                            <label>Select Month</label>
                            <Field className="form-control" type="month" name="month" />

                        </fieldset>
                        
                        <button className ="btn btn-success" type ="submit">Search</button> 
                                
                        </Form>
                    )
                }
            </Formik>  
            </div><br></br>
            </>


        )
    }
}

export default BillReportSearch;