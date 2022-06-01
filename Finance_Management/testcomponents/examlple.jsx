//import React, {Component} from 'react'
//import { Link } from 'react-router-dom'
import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
//import BillSearch from '../billpayments/billsearch';
//import ComponentToPrint from './componencttoptint';
import ViewBils from '../billpayments/viewbills';;


class Example extends React.PureComponent {
  render() {
    return (
      <div>
        
        <ViewBils ref={el => (this.componentRef = el)} />
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button className ="btn btn-success" onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        {/*<ComponentToPrint ref={el => (this.componentRef = el)} />*/}
        {/*<FmBillView ref={el => (this.componentRef = el)} />*/}
        <br></br></div>
    );
  }
}
export default Example;