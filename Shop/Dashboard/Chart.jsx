import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Moment from 'moment';
import { connect } from 'react-redux';

function Chart({ orders }) {

  const [data, setData] = useState({
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
    new: 0
  });

  const searchYear = (value) => {
    if (Moment(value.date).format('YY').includes(Moment(new Date()).format('YY')))
      return value
  }

  const searchMonth = (value, month) => {
    if (Moment(value.date).format('MM') == month )
      return value
  }

  const addValues = (index, value) => {
    switch (index) {
      case 1:
        setData(data.jan = value)
        break
      case 2:
        setData(data.feb = value)
        break
      case 3:
        setData(data.mar = value)
        break
      case 4:
        setData(data.apr = value)
        break
      case 5:
        setData(data.may = value)
        break
      case 6:
        setData(data.jun = value)
        break
      case 7:
        setData(data.jul = value)
        break
      case 8:
        setData(data.aug = value)
        break
      case 9:
        setData(data.sep = value)
        break
      case 10:
        setData(data.oct = value)
        break
      case 11:
        setData(data.nov = value)
        break
      case 12:
        setData(data.dec = value)
        break
      case 13:
        setData({ ...data, dec: value })
        break
      default:
        break
    }
  }

  const chart = () => {
    let item1 = 0;
    for (let i = 1; i < 14; i++) {
      orders.filter((value) => searchYear(value)).filter((value) => searchMonth(value, i)).forEach(item => {
        item1 += item.amount;
      })
      addValues(i, item1)
      item1 = 0;
    }
  }

  const ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales for ' + (Moment(new Date()).format('YYYY')) + ' (Monthly)',
        data: [data.jan, data.feb, data.mar, data.apr, data.may, data.jun, data.jul, data.aug, data.sep, data.oct, data.nov, data.new],
        borderColor: "#3399FF",
        backgroundColor: "#3399FF",
        fill: true
      }
    ],
    tension: 10
  }

  const options = {
    scales: {
      yAxes: {
        min: 0,
        ticks: {
          stepSize: 500
        }
      }
    }
  }

  useEffect(
    chart
  , [orders]);
  
  return (
    <React.Fragment>
      <Line data={ChartData} options={options} />
    </React.Fragment>

  );
}

const mapStateProps = (state) => {
  return {
    orders: state.shop.orders
  }
}

export default connect(mapStateProps)(Chart)