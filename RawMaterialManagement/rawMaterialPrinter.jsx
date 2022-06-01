import React , {Component} from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import RawmetrialPrintJiner from './rawmaterialPrintJoinner';

class RawMaterialPreinter extends Component {
  constructor(props){
    super(props)
    }
  render() {
    return (
      <div>
        <RawmetrialPrintJiner ref={el => (this.componentRef = el)} />
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
export default RawMaterialPreinter;