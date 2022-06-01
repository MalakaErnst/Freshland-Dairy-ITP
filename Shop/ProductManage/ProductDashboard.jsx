/* eslint-disable */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductDataService from '../../API/ProductDataService';
import { Fab, Slide } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Typography from '@material-ui/core/Typography';
import { Zoom } from '@material-ui/core';

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
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    tableHeader: {
        fontWeight: 600,
    },
}));

export default function ProductDashboard() {

    const classes = useStyles();
    const history = useHistory();
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResult] = useState([]);

    const loaddata = () => {
        ProductDataService.RerieveAllProducts()
            .then(response => { setProducts(response.data) });
    }

    useEffect(loaddata, [])

    const searchProduct = (value) => {

        if (searchResults == "") {
            return value
        } else if (value.name.toLowerCase().includes(searchResults.toLowerCase())) {
            return value
        }

    }

    const deleteProductClick = (id) => {
        ProductDataService.deleteProduct(id)
            .then(loaddata)

    }

    const updateProductClick = (id) => {
        history.push(`/Online-Shop/productUpdate/${id}`)
    }

    return (
        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
            <div className="container" >
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search product..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => setSearchResult(e.target.value)}
                    />
                </div>
                <br />
                <Paper className={classes.paper}>
                    <br />
                    <Typography component="h2" variant="h4" color="primary" gutterBottom>
                        Product List
                    </Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader}>Product Name</TableCell>
                                <TableCell className={classes.tableHeader}>Description</TableCell>
                                <TableCell className={classes.tableHeader}>Image URL</TableCell>
                                <TableCell className={classes.tableHeader}>Available Quantity</TableCell>
                                <TableCell className={classes.tableHeader}>Price</TableCell>
                                <TableCell className={classes.tableHeader}>Update</TableCell>
                                <TableCell className={classes.tableHeader}>Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.filter((value) => searchProduct(value)).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.url}</TableCell>
                                    <TableCell align="center">{row.quantity}</TableCell>
                                    <TableCell align="right">{parseFloat(row.price).toFixed(2)}</TableCell>
                                    <TableCell><IconButton color="primary" onClick={() => updateProductClick(row.id)}><EditRoundedIcon /></IconButton></TableCell>
                                    <TableCell><IconButton aria-label="delete" color='secondary' onClick={() => deleteProductClick(row.id)}><DeleteIcon /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Link to={`/Online-Shop/productUpdate/-1`} style={{ textDecoration: 'none' }}>
                        <Fab color='secondary' aria-label="add" className={classes.absolute} title='Add Products' variant="extended">
                            <AddIcon />
                            Add New Product
                        </Fab>
                    </Link>
                </Slide>
                <br />
            </div>
        </Zoom>
    );

}