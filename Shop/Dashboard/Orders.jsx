/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ShopOrderDetailsService from '../../API/ShopOrderDetailsService'
import Moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ShopOrderService from '../../API/ShopOrderService';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    fontWeight: 600,
  }
}));

function Row(props) {
  const classes = useStyles();
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = useState([]);

  const loaddata = () => {
    ShopOrderDetailsService.RerieveAllOrdersDetails()
      .then(response => setDetails(response.data))
  }

  const searchProduct = (value, id) => {

    if (value.shopOrderDetailsPK.transactionID == id) {
      return value
    } else
      return null

  }

  const deleteProductClick = (id, details) => {
    ShopOrderService.deleteOrder(id)
      .then(() => (details.map(item => {
        console.log(item.shopOrderDetailsPK)
        // ShopOrderDetailsService.deleteOrderDetails(item.shopOrderDetailsPK)      
      })))
  }

  useEffect(loaddata, [])

  return (
    <React.Fragment>
      <TableRow key={row.transactionID}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.transactionID}</TableCell>
        <TableCell>{Moment(row.date).format('DD-MM-YYYY')}</TableCell>
        <TableCell>{row.customerName}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell>{row.number}</TableCell>
        <TableCell align="right">{parseFloat(row.amount).toFixed(2)}</TableCell>
        <TableCell align="center"><IconButton aria-label="delete" color='secondary' onClick={() => deleteProductClick(row.transactionID, details.filter((value) => searchProduct(value, row.transactionID)))}><DeleteIcon /></IconButton></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='subtitle1' gutterBottom component="div">
                More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeader}>Product Name</TableCell>
                    <TableCell className={classes.tableHeader}>Quantitiy</TableCell>
                    <TableCell className={classes.tableHeader} align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {details.filter((value) => searchProduct(value, row.transactionID)).map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.name.toLowerCase()}</TableCell>
                      <TableCell>{historyRow.quantity}</TableCell>
                      <TableCell align="right">{parseFloat(historyRow.total).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody><br />
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  const loaddata = () => {
    ShopOrderService.RerieveAllOrders()
      .then(response => setOrders(response.data)
      )
  }

  useEffect(loaddata, [orders])

  return (
    <React.Fragment>
      <br />
      <Title>All Orders</Title>
      <br />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader} />
            <TableCell className={classes.tableHeader}>Transaction Number</TableCell>
            <TableCell className={classes.tableHeader}>Date</TableCell>
            <TableCell className={classes.tableHeader}>Name</TableCell>
            <TableCell className={classes.tableHeader}>Ship To</TableCell>
            <TableCell className={classes.tableHeader}>Contact Number</TableCell>
            <TableCell className={classes.tableHeader} align="right">Sale Amount</TableCell>
            <TableCell className={classes.tableHeader} align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Orders