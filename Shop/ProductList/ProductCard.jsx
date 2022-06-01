import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/shoping/shopping-action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Zoom } from '@material-ui/core';

function ProductCard({ product, addToCart }) {

    return (
        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
            <Card key={product.id} elevation={10}>
                <CardHeader
                    avatar={product.quantity <= 10 ? <Tooltip title="SOLD OUT"><Avatar variant="circular" style={{ backgroundColor: 'Red' }}>S</Avatar></Tooltip> :
                    <Tooltip title="AVAILABLE"><Avatar variant="circular" style={{ backgroundColor: 'orange' }}>A</Avatar></Tooltip>}
                    title={product.name}
                    action={<IconButton aria-label="share"><ShareIcon /></IconButton>}
                />
                <Link to={`/Online-Shop/product/${product.id}`}>
                    <CardMedia title={product.name}>
                        <img alt='' src={product.url} width="250dp" height="250dp" />
                    </CardMedia>
                </Link>
                <CardContent>
                    <Typography variant='h6' color='textSecondary' gutterBottom>
                        Rs.{parseFloat(product.price).toFixed(2)}
                    </Typography>
                    <Button
                        variant='contained'
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => addToCart(product.id)}
                        color='primary'
                        disabled={product.quantity <= 10}
                    >
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
        </Zoom>
    );
}

const mapDispatchProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchProps)(ProductCard)