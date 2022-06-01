import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ShopOrderService from '../../API/ShopOrderService';
import Moment from 'moment';
import MoneyImage from '../../asserts/order.svg'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalOrders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  const loaddata = () => {
    ShopOrderService.RerieveAllOrders()
      .then(response => { setOrders(response.data) })
  }

  useEffect(()=>{
    loaddata()
  },[orders]);


  return (
    <React.Fragment>
      <Title>Total Orders</Title>
      <Typography component="p" variant="h4">
      {orders.length}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {Moment(new Date()).format("MMM DD YYYY")}
      </Typography><br/>
      <div style={{ display:'flex', justifyContent:'center'}}>
      <img  alt="success"src={MoneyImage} width="120px" />
      </div>
    </React.Fragment>
  );
}