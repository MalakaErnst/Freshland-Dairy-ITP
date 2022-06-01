import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ShopOrderService from '../../API/ShopOrderService';
import Moment from 'moment';
import MoneyImage from '../../asserts/money.svg'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const loaddata = () => {
    ShopOrderService.RerieveAllOrders()
      .then(response => { setOrders(response.data) })
  }

  useEffect(()=>{

    loaddata()

    let price = 0;

    orders.forEach( order => {
      price += order.amount;
    })

    setTotal(price);

  },[orders]);


  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography component="p" variant="h4">
        Rs.{parseFloat(total).toFixed(2)}
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