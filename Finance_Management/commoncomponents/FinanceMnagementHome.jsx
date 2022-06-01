import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, Zoom, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';

//import Financepic from "../../asserts/finance_mng_homepic.jpg"
import bill from "../../asserts/fmbill.jpg"
import account from "../../asserts/fmAccount.jpg"
import salary from "../../asserts/fmsalary.jpg"

export default function FinanceManagementHome() {
    return (
        <React.StrictMode>
            
            <br /><br /><br />
            <div className="container">
                <Grid container spacing={6} >
                    
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Bill Management" />
                                <Link to={`/FinanceManagement/bills`}>
                                    <CardMedia >
                                        <img alt='' src={bill} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Salary Management" />
                                <Link to={`/FinanceManagement/salary`}>
                                    <CardMedia >
                                        <img alt='' src={salary} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Account Management" />
                                <Link to={`/FinanceManagement/accounts`}>
                                    <CardMedia >
                                        <img alt='' src={account} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </div>
            <br />
        </React.StrictMode>
    )
}