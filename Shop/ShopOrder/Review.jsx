import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 600
  },
  table: {
    minWidth: 500,
  },
  itemText: {
    fontWeight: 700,    
  },
  tableHeader: {
    fontWeight: 700,
    fontSize: 16
  }
}));

function Review({ cart, address }) {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    let price1 = 0;

    cart.forEach( item => {
      price1 += item.qty * item.price
    })

    setTotalPrice(price1)

  },[cart,totalPrice,setTotalPrice])

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <br/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='left' className={classes.tableHeader}>Product</TableCell>
              <TableCell align='center' className={classes.tableHeader}>Quantity</TableCell>
              <TableCell align='right' className={classes.tableHeader}>Price&nbsp;(Rs.)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.name}>
                <TableCell align='left'>{(row.name).toLowerCase()}</TableCell>
                <TableCell align='center'>{row.qty}</TableCell>
                <TableCell align='right'>{ parseFloat(row.price * row.qty).toFixed(2) }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" className={classes.listItem} />
          <Typography variant="subtitle1" className={classes.total}>
            Rs.{ parseFloat(totalPrice).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.firstName}</Typography>
          <Typography gutterBottom>{address.address}</Typography>
          <Typography gutterBottom>{address.email}</Typography>
          <Typography gutterBottom>{address.number}</Typography>
        </Grid>
      </Grid>
    </div>

  );
}

const mapStateProps = (state) => {
  return {
    cart: state.shop.cart,
    address: state.shop.address
  }
}

export default connect(mapStateProps)(Review);