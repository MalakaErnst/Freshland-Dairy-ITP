import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PrintRec from './PrintRec';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import { removeAllFromCart } from '../../redux/shoping/shopping-action';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
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
        background: "#4f9eff",
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

function Receipt({ removeAllFromCart }) {
    const classes = useStyles();
    const componentRef = useRef();
    const history = useHistory();
    const params = useParams()

    const ShopMore = () => {
        removeAllFromCart()
        history.push("/Online-Shop/ProductList")
    }

    return (
        <div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <PrintRec ref={componentRef} id={params.id}/>
                    <ReactToPrint
                        trigger={() => <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>}
                        content={() => componentRef.current}
                    />
                    <Button
                        variant="contained"
                        color='secondary'
                        size="large"
                        className={classes.button}
                        startIcon={<StorefrontRoundedIcon />}
                        onClick={ShopMore}
                    >
                        Shop More
                    </Button>
                </Paper >
            </main >

        </div >
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        removeAllFromCart: () => dispatch(removeAllFromCart())
    }
}

export default connect(null, mapDispatchProps)(Receipt)