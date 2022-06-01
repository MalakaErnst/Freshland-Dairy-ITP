import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, Zoom, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShopImage from './asserts/online-store-image.svg';
import EmployeeImage from './asserts/Employee-Management-Meaning-Importance-Tips-Tools---More.png';
import FinancialImage from './asserts/financial-management.png';
import StockImage from './asserts/stock-management-system.jpg';
import InventoryImage from './asserts/inventory.png';
import SalesImage from './asserts/sales.png';
import SupplierImage from './asserts/supplier.jpg';
import TransportImage from './asserts/transportation-management.png';
import Authentication from './API/Authentication.js'

export default function Home() {

    let username = Authentication.getUserLoggedin()

    return (
        <React.StrictMode>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Freshland Dairy
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <div className="container">
                <Grid container spacing={6} >
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Store Management" />
                                <Link to={`/Online-Shop`}>
                                    <CardMedia >
                                        <img alt='' src = {ShopImage} width="200dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Employee Management" />
                                <Link to={`/welcome`}>
                                    <CardMedia >
                                    <img alt='' src = {EmployeeImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Transport Management" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src={TransportImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Stock Management" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src={StockImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Supply Management" />
                                <Link to={`/SupplierManagement/welcome/:name`}>
                                    <CardMedia >
                                        <img alt='' src={SupplierImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Inventory Management" />
                                <Link to={`/rawmaterialManagement`}>
                                    <CardMedia >
                                        <img alt='' src={InventoryImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Sales Management" />
                                <Link to={`/Sales-management`}>
                                    <CardMedia >
                                        <img alt='' src={SalesImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Financial Management" />
                                <Link to={`/FinanceManagement`}>
                                    <CardMedia >
                                        <img alt='' src={FinancialImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </div>
            <br />
            <Footer />
        </React.StrictMode>
    )
}
