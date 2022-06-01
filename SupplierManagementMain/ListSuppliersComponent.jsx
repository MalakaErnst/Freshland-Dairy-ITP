// import moment from 'moment';
import React, { Component } from 'react'
import SuppliersDataService from '../../api/todo/SuppliersDataService';
import Authentication from './Authentication';

class ListSupplierComponent extends Component{
    constructor(props){
        super(props);
         this.state={
            Suppliers : [],
            message : null

        
         }
         this.deleteSuppliersClicked=this.deleteSuppliersClicked.bind(this)
         this.updateSuppliersClicked=this.updateSuppliersClicked.bind(this)
         this.addSuppliersClicked=this.addSuppliersClicked.bind(this)
         this.refreshSuppliers=this.refreshSuppliers.bind(this)

    }

    componentWillUnmount(){
        console.log('componentWilUnmount')
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true

    }


    componentDidMount(){
        console.log('componentDidMount')
        this.refreshSuppliers()
        console.log(this.state)
    }
       
     
    refreshSuppliers(){

        let username = "Chamal"
        SuppliersDataService.retrieveAllSuppliers(username)
        .then(
            response => {
            
                this.setState({Suppliers : response.data})
            }
        )
    }


    deleteSuppliersClicked(id){
        let username = "Chamal"
        console.log(id +" "+ username)
        SuppliersDataService.deleteSuppliers(username, id)
        .then(
            response =>{
                this.setState({message : `Successfully deleted supplier ${id} `})
                this.refreshSuppliers();
            }
        )
    }


    addSuppliersClicked(){
        
        this.props.history.push(`/SupplierManagement/Suppliers/-1`)
    }


    updateSuppliersClicked(id){
        console.log('update'+ id)
        this.props.history.push(`/SupplierManagement/Suppliers/${id}`)
    }


    render(){
        return (
        <div> 
            <h1> Suppliers List </h1>

            {/* <div className="ui search">
                <div className="ui icon input">
                    <input type="text" palceholder ="Search Entry" className="prompt" value={this.props.term} onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div> */}


            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>PhoneNo</th>
                                <th>Address</th>
                                <th>Bank AccNo</th>
                                <th>Update </th>
                                <th>Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Suppliers.map(
                                    Supplier =>
                                        <tr key={Supplier.id}>
                                            <td>{Supplier.name}</td>
                                            <td>{Supplier.item}</td>
                                            <td>{Supplier.price}</td>
                                            <td>{Supplier.phoneNo}</td>
                                            <td>{Supplier.address}</td>
                                            <td>{Supplier.accNo}</td>
                                            <td><button className="btn btn-success" onClick={()=> this.updateSuppliersClicked(Supplier.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={()=> this.deleteSuppliersClicked(Supplier.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addSuppliersClicked}>ADD</button>
                    </div>
                </div>
        </div>
        )
    }
}



export default ListSupplierComponent
