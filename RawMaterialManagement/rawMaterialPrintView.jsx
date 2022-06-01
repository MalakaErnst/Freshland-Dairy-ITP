import React, {Component} from 'react'
import RawMaterialDataService from '../API/RawMaterialDataService';


class RawmeterialReportView extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            rawmaterial : [],
            month : this.props.match.params.month
        }
        
    }
    
    componentDidMount (){
        RawMaterialDataService.Search(this.state.month)
            .then(
                response => {
                    this.setState({rawmaterial : response.data})
                }
            )
        
    }
    
    
    render(){
        return(
            <>
            <br></br>
            <div className = "RawmeterialReportView">
                <h1>List OF {this.state.month} </h1>
                

                <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Raw Material ID</th>
                            <th>Raw Material Type</th>
                            <th>Raw Material name</th>
                            <th>Date</th>
                            <th>Arriving QTY</th>
                            <th>Relesing QTY</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.rawmaterial.map(
                                rawmaterial=>
                                <tr key ={rawmaterial.id}>
                                    <td>{rawmaterial.rawMID}</td>
                                    <td>{rawmaterial.rawMType}</td>
                                    <td>{rawmaterial.rawMName}</td>
                                    <td>{rawmaterial.date}</td>
                                    <td>{rawmaterial.arrQty}</td>
                                    <td>{rawmaterial.reQty}</td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>

        </div><br></br>
        </>
        )
    }
}

export default RawmeterialReportView;