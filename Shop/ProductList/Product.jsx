import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ProductDataService from '../../API/ProductDataService';
import RatingComponent from '../Rating/RatingComponent';
import { Zoom } from '@material-ui/core';

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: null,
            description: '',
            url: ''
        }
    }

    componentDidMount() {
        ProductDataService.RerieveProduct(this.state.id)
            .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url }))
    }

    componentDidUpdate() {
        ProductDataService.RerieveProduct(this.state.id)
            .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url }))
    }

    render() {
        return (
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{enter:700}}>
            <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', borderRadius: '15px' }} key={this.state.id} className="box">
                <Card.Img variant="top" src={this.state.url} />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Card.Text>
                        Rs.{parseFloat(this.state.price).toFixed(2)}
                    </Card.Text>
                    <RatingComponent Product={this.state.name}/>
                </Card.Body>
            </Card>
            </Zoom>
        );
    }

}

export default withRouter(Product)