import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setAddress } from '../../redux/shoping/shopping-action';

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
    padding: theme.spacing(3, 0, 5),
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

const validationSchema = yup.object({
  firstName: yup.string().required("Name is required"),
  address: yup.string().required("Delivary address is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  number: yup.string().required("Contact number is required").matches(/^[0-9]+$/,"Invalid Number").min(10).max(10)
})

function AddressForm({ setAddress, active1, address }) {

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: address.firstName,
      address: address.address,
      email: address.email,
      number: address.number,
    },
    onSubmit: (values) => {
      setAddress(values)
      active1(1)
    },
    validationSchema: validationSchema
  })

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Shipping Details
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="number"
              name="number"
              label="Contact Number"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              fullWidth
            />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    address: state.shop.address
  }
}

const mapDispatchProps = (dispatch) => {
  return bindActionCreators({ setAddress }, dispatch)
}

export default connect(mapStateProps, mapDispatchProps)(AddressForm)