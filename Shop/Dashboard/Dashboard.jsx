import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { setOrders } from '../../redux/shoping/shopping-action'
import ShopOrderService from '../../API/ShopOrderService';
import { connect } from 'react-redux';
import TotalOrders from './TotalOrders';
import { Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: "510px",
  },
  fixedHeightCard: {
    height: "auto",
  },
}));

function Dashboard({ setOrders }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightCard = clsx(classes.paper, classes.fixedHeightCard);

  const loaddata = () => {
    ShopOrderService.RerieveAllOrders()
      .then(response => 
        setOrders(response.data)
      )
  }

  useEffect(loaddata, [])

  return (
    <div className={classes.root}>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Zoom>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
              <Paper className={fixedHeightCard}>
                <Deposits />
              </Paper>
            </Zoom><br />
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
              <Paper className={fixedHeightCard}>
                <TotalOrders />
              </Paper>
            </Zoom>
          </Grid>
          {/* Recent Orders */}
          <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Zoom>
        </Grid>
      </Container>

    </div>
  );
}

const mapDispatchProps = (dispach) => {
  return {
    setOrders: (data) => dispach(setOrders(data))
  };
}

export default connect(null, mapDispatchProps)(Dashboard)