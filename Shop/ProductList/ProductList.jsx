/* eslint-disable */

import { useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDataService from '../../API/ProductDataService'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { setProducts } from '../../redux/shoping/shopping-action'
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),

        '&:hover': {
            // backgroundColor: alpha(theme.palette.common.white, 0.25),
            background: 'white',
        },
        marginLeft: 0,
        marginTop: '20px',
        marginBottom: '10px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(45),
            width: '45%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(2, 2, 2, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

function ProductList({ products, setProducts }) {

    const classes = useStyles();
    const [searchResults, setSearchResult] = useState([]);

    const loaddata = () => {
        ProductDataService.RerieveAllProducts()
            .then(response => setProducts(response.data));
    }

    useEffect(loaddata, [])

    const searchProduct = (value) => {

        if (searchResults == "") {
            return value
        } else if (value.name.toLowerCase().includes(searchResults.toLowerCase())) {
            return value
        }

    }

    return (
        <div className="container" >
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search items…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => setSearchResult(e.target.value)}
                />
            </div>
            <br />
            <Grid container spacing={3}>
                {products.filter((value) => searchProduct(value)).map((Product) => (
                    <Grid item key={Product.id} xs={12} md={6} lg={3}>
                        <ProductCard product={Product} />
                    </Grid>
                ))}
            </Grid>
            <br/>
        </div>
    );

}

const mapStateProps = (state) => {
    return {
        products: state.shop.products
    }
}

const mapDispatchProps = (dispach) => {
    return {
        setProducts: (data) => dispach(setProducts(data))
    };
}



export default connect(mapStateProps, mapDispatchProps)(ProductList)