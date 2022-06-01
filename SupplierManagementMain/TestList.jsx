// import moment from 'moment';
import React, { useState, useEffect } from 'react'
import SuppliersDataService from '../API/SupplierManagement/SuppliersDataService'
import Authentication from './Authentication'
import { useHistory } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import printJS from 'print-js'
import HeaderComponent from './HeaderComponent'

const TestList = () => {
  const [Suppliers, setSuppliers] = useState([])
  const [message, setMessage] = useState(null)
  
  const [search, setSearch] = useState("");
 
  const history = useHistory()

  const refreshSuppliers = () => {
    let username = "Chamal"
    SuppliersDataService.retrieveAllSuppliers(username).then((response) => {
      setSuppliers(response.data)
    })
  }

  useEffect(() => {
    refreshSuppliers()
  }, [])

  console.log(Suppliers)

  const deleteSuppliersClicked = (id) => {
    let errors={}
    let username = "Chamal"
    console.log(id + ' ' + username)
    SuppliersDataService.deleteSuppliers(username, id).then(() => {
      errors=alert(`Successfully deleted supplier ${id}`)
      refreshSuppliers()
    })
  }


  const addSuppliersClicked = () => {
    history.push(`/SupplierManagement/Suppliers/-1`)
  }

  const updateSuppliersClicked = (id) => {
    console.log('update' + id)
    history.push(`/SupplierManagement/Suppliers/${id}`)
  }

  return (
    <>
    <HeaderComponent/>
    <div>
      <br></br><h1 className="ui black  header"><i className="big users icon"></i> Supplier List </h1>
     
      
            <div className="ui search"></div>
            
                     <input type="text" placeholder="Search by Name, Item  " className="form-control" style={{
                         marginTop:40, marginBottom:40, marginLeft:500,  width:"40%"}}
                         onChange={
                             (e)=>{
                                setSearch(e.target.value)}}/>
                                
             

      


      <div className='container'>
      <div class="ui inverted divider"></div>
        <table className='ui selectable white eight column striped table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Item</th>
              <th>Price/kg</th>
              <th>PhoneNo</th>
              <th>Address</th>
              <th>Deposit AccNo</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {Suppliers.filter((value)=>
                                {
                                    if(search===""){
                                        return value
                                    }else if(
                                        value.name.toLowerCase().includes(search.toLowerCase())||
                                        value.item.toLowerCase().includes(search.toLowerCase())
                                    ){
                                        return value
                                    }
                                    return 0;
                                }).map((Supplier) => (
              <tr key={Supplier.id}>
                <td>{Supplier.name}</td>
                <td>{Supplier.item}</td>
                <td>{Supplier.price}</td>
                <td>{Supplier.phoneNo}</td>
                <td>{Supplier.address}</td>
                <td>{Supplier.accNo}</td>
                <td>
                  <button
                    className='ui blue icon button'
                    onClick={() => updateSuppliersClicked(Supplier.id)}
                  >
                    <i className='edit icon'></i> Update
                  </button>
                </td>
                <td>
                  <button
                    className='ui red icon button'
                    onClick={() => deleteSuppliersClicked(Supplier.id)}
                  >
                    <i className='trash alternate outline icon'></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="ui inverted divider"></div>

        <button className='ui huge green icon button' onClick={addSuppliersClicked}>
            <i className='plus icon'></i> ADD 
          </button>
        <div style={{
                         marginTop:20, marginBottom:20,  marginRight:1100}}>

              <button type="button" className="btn btn-info" onClick={ () =>printJS({
              printable: Suppliers, header: 'Supplier Report',
                properties: [  { field: 'name', displayName: 'name'},
                                { field: 'phoneNo', displayName: 'phone'},
                                { field: 'item', displayName: 'item'},
                                { field: 'accNo', displayName: 'accNo'},
                                { field: 'address', displayName: 'address'},


                    ],
              type: 'json'
                })}><b>
                Print Supplier Report</b>
                </button>
              </div>
            <br></br>
       
        {/* <div className='row'> */}
            
        {/* </div> */}
      </div>
    </div>
  </>)
}

export default TestList