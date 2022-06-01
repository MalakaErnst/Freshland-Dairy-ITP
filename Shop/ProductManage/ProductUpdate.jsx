/* eslint-disable */

import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductDataService from '../../API/ProductDataService.js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../ProductList/ProductCard.css'

const useStyles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
});

class ProductUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: null,
            price: null,
            description: null,
            url: null,
            qty: null,
            newproduct: false
        }

        this.start = 0;

        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        if (this.state.id == -1) {
            this.setState({ newproduct: true })
        } else {
            ProductDataService.RerieveProduct(this.state.id)
                .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url, qty: response.data.quantity }))
        }

    }

    validate(values) {
        let errors = {}

        if (!values.name) {
            errors.name = 'Name Fields must be filled'
        } else if (!values.price) {
            errors.price = 'Price Fields must be filled'
        } else if (!values.price.match(/^[-+]?[0-9]+\.[0-9]+$/)) {
            errors.price = 'please enter an valid price'
        } else if (!values.description) {
            errors.description = 'Description Fields must be filled'
        } else if (!values.url) {
            errors.url = 'Image URL Fields must be filled'
        } else if (!values.qty) {
            errors.qty = 'Quantity Fields must be filled'
        }
        else { }

        return errors
    }

    onSubmit(values) {

        let product = { id: this.state.id, name: values.name, price: values.price, description: values.description, url: values.url, quantity: values.qty }

        if (this.state.id !== -1) {
            ProductDataService.updateProduct(this.state.id, product)
                .then(() => {
                    this.props.history.push('/Online-Shop/ProductManagement')
                })
        }
        else {

            ProductDataService.addProduct(product)
                .then(() => this.props.history.push('/Online-Shop/ProductManagement'))


        }
    }

    render() {

        const { classes } = this.props;
        let { name, price, description, url, qty } = this.state


        return (
            <div>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <br />
                        {this.state.newproduct && <h1>Add Product</h1>}
                        <h1>{this.state.name}</h1>
                        <div className="container">
                            <br />
                            <Formik initialValues={{ name, price, description, url, qty }} onSubmit={this.onSubmit} validate={this.validate} enableReinitialize={true} validateOnChange={false} validateOnBlur={false}>
                                {
                                    (props) => (
                                        <Form>

                                            <fieldset className="form-group">
                                                <label className="label">Name</label>
                                                <Field className="textarea" type="text" name="name" />
                                            </fieldset>
                                            <br />
                                            <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                            <fieldset className="form-group">
                                                <label className="label">Price Rs.</label>
                                                <Field className="textarea" type="text" name="price" />
                                            </fieldset>
                                            <br />
                                            <ErrorMessage name="price" component="div" className="alert alert-warning" />
                                            <fieldset className="form-group">
                                                <label className="label">Description</label>
                                                <Field className="textarea" type="text" name="description" />
                                            </fieldset>
                                            <br />
                                            <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                            <fieldset className="form-group">
                                                <label className="label">Image URL</label>
                                                <Field className="textarea" type="text" name="url" />
                                            </fieldset>
                                            <br />
                                            <ErrorMessage name="url" component="div" className="alert alert-warning" />
                                            <fieldset className="form-group">
                                                <label className="label">Quantity</label>
                                                <Field className="textarea" type="number" name="qty" />
                                            </fieldset>
                                            <br />
                                            <ErrorMessage name="qty" component="div" className="alert alert-warning" />
                                            <button className="btn btn-success" type="submit">Save</button>
                                        </Form>
                                    )
                                }
                            </Formik>
                            <br />
                        </div>
                    </Paper >
                </main >
            </div >
        );
    }
}

export default withStyles(useStyles)(ProductUpdate)