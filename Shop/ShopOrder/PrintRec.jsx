import React, { Component } from 'react'
import Review from './Review'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
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

export class PrintRec extends Component {



    render() {
        const { classes } = this.props;
        return (
            <div>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Receipt
                        </Typography>
                        <br />
                        <div>
                            <Review />
                            <br />
                            <div>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is {this.props.id}.
                                </Typography>
                                
                            </div>
                        </div >
                    </Paper >
                </main >
            </div>
        )
    }
}

export default withStyles(useStyles)(PrintRec)
