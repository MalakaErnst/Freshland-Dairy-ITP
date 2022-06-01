import React, {Component} from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import ComponentToPrint from '../testcomponents/componencttoptint';



class AccountPrinter extends Component{
    constructor(props){
        super(props)
        }
  render() {
    return (
      <div>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button className ="btn btn-success" onClick={handlePrint}>Print this out!</button>
              
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        </div>
    );
  }
}
export default AccountPrinter;