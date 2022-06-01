/* eslint-disable */
import moment from 'moment';
import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import RawMaterialDataService from '../API/RawMaterialDataService';

class RawMaterialForm extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,

            rawMID : 'RID',
            rawMType : 'RTpe',
            rawMName :'RMName',
            date : moment(new Date()).format('YYYY-MM-DD'),
            arrQty : 'QTY',
            reQty : 'QTY'
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate(values){
        let errors = {}
        

        return errors
    }
    componentDidMount() {
        if (this.state.id == -1){
            return
        }
        
        RawMaterialDataService.retriverawmaterial(this.state.id)
            .then (response => this.setState({
                rawMID : response.data.rawMID,
                rawMType : response.data.rawMType,
                rawMName : response.data.rawMName,
                arrQty : response.data.arrQty,
                date : moment(response.data. date).format('YYYY-MM-DD'),
                reQty : response.data.reQty

            }))
    }


    onSubmit(values){
        if (this.props.match.params.id == -1){
            RawMaterialDataService.createrawmaterial({
                rawMID : values.rawMID,
                rawMName : values.rawMName,
                rawMType : values.rawMType,
                arrQty: values.arrQty,
                reQty: values.reQty,
                date : values.date})
            .then(() => this.props.history.push('/rawmaterialManagement/view'))
        }else{
            RawMaterialDataService.updaterawmaterial(this.props.match.params.id , {
                rawMID : values.rawMID,
                rawMName : values.rawMName,
                rawMType : values.rawMType,
                arrQty: values.arrQty,
                reQty: values.reQty,
                date : values.date})
        .then(() => this.props.history.push('/rawmaterialManagement/view'))
         }
    }


    render(){

        let {rawMID,rawMName,rawMType, date, arrQty, reQty} =this.state
        return(
        <div><br></br>
            <h1>Raw Material</h1>
            <div className = "container">
                <Formik
                    initialValues ={{rawMID,rawMName,rawMType, date, arrQty, reQty}}
                    onSubmit = {this.onSubmit}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage name = "rawMID" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>rawMID</label>
                                        <Field className ="form-control" type ="text" name ="rawMID"/>
                                    </fieldset>
                                <ErrorMessage name = "rawMName" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>rawMName</label>
                                        <Field className ="form-control" type ="text" name ="rawMName"/>
                                    </fieldset>
                                <ErrorMessage name = "rawMType" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>rawMType</label>
                                        <Field className ="form-control" type ="text" name ="rawMType"/>
                                    </fieldset>
                                <ErrorMessage name = "date" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                            <label>date</label>
                                            <Field className="form-control" type="date" name="date" />
                                    </fieldset>
                                <ErrorMessage name = "arrQty" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>arrQty</label>
                                        <Field className ="form-control" type ="text" name ="arrQty"/>
                                    </fieldset>
                                <ErrorMessage name = "reQty" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>reQty</label>
                                        <Field className ="form-control" type ="text" name ="reQty"/>
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
export default RawMaterialForm;