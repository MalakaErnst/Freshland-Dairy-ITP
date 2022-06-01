import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import ShopOrderService from '../../API/ShopOrderService';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShopOrderDetailsService from '../../API/ShopOrderDetailsService'
import { loadCurruntItem } from '../../redux/shoping/shopping-action';
import { bindActionCreators } from 'redux'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
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
  stepper: {
    padding: theme.spacing(4, 8, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Review your order'];

function Checkout({ address, cart, loadCurruntItem }) {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    let Amount = 0;
    cart.forEach(item => { Amount += item.qty * item.price })
    var showDate = new Date();

    let order = { customerID: 1000, customerName: address.firstName, address: address.address, email: address.email, number: address.number, amount: Amount, date: showDate }

    ShopOrderService.addOrder(order)
      .then(response => {
        cart.forEach( product => {
          let orderDetails = { transactionID: response.data.transactionID, productID: product.id, name: product.name, quantity: product.qty, total: product.qty * product.price }
          ShopOrderDetailsService.addOrderDetails(orderDetails)
        })
        loadCurruntItem(response.data.transactionID)
        history.push(`/Online-Shop/ShopOrder/Receipt/${response.data.transactionID}`)
      })
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 ? <AddressForm active1={setActiveStep} /> :
                  <div>
                    <Review />
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Place order
                      </Button>
                    </div>
                  </div>}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

const mapStateProps = (state) => {
  return {
    cart: state.shop.cart,
    address: state.shop.address
  }
}

const mapDispatchProps = (dispatch) => {
  return bindActionCreators({ loadCurruntItem }, dispatch)
}

export default connect(mapStateProps, mapDispatchProps)(Checkout);