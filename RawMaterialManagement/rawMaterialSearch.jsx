import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import moment from 'moment';

class RawmaterialReportSearch extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            month : moment(new Date()).format('YYYY-MM'),
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    onSubmit(values){

        this.props.history.push(`/rawmaterialManagement/report/${values.month}`)

    }
    
    render(){
        let {month} =this.state
        return(
            <>
            <h1>Genarate Monthly Report</h1>
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

export default RawmaterialReportSearch;