import React, {Component} from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import FinancePrintviewer from './financeprintviewer';


class FinancePrinter extends Component{
    constructor(props){
        super(props)
        }
  render() {
    return (
      <div>
        <FinancePrintviewer ref={el => (this.componentRef = el)} />
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
export default FinancePrinter;