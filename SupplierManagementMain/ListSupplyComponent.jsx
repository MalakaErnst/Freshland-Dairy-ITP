// import moment from 'moment';
import React, { useState, useEffect } from 'react'
import SupplyDataService from '../API/SupplierManagement/SupplyDataService'
//import Authentication from './Authentication'
import { useHistory } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import moment from 'moment'
import HeaderComponent from './HeaderComponent'
import printJS from 'print-js'

const ListSupplyComponent = () => {
  const [Supplies, setSupplies] = useState([])
  const [message, setMessage] = useState(null)
  
  const [search, setSearch] = useState("");
  const history = useHistory()

  const refreshSupply = () => {
    let username = "Chamal"
    SupplyDataService.retrieveAllSupply(username).then((response) => {
      setSupplies(response.data)
    })
  }

  useEffect(() => {
    refreshSupply()
  }, [])

  console.log(Supplies)

  const deleteSupplyClicked = (sid) => {
    let errors={}
    let username = "Chamal"
    console.log(sid + ' ' + username)
    SupplyDataService.deleteSupply(username, sid).then(() => {
      errors=alert(`Successfully deleted supply ${sid}`)
      refreshSupply()
    })
  }


  const addSupplyClicked = () => {
    history.push(`/SupplierManagement/Supplyy/-1`)
  }

  // const updateSupplyClicked = (sid) => {
  //   console.log('update' + sid)
  //   history.push(`/SupplierManagement/Supplyy/${sid}`)
  // }

  return (
    <>
    <HeaderComponent/>
    <div>
      <br></br><h1 className="ui black header"><i className="big warehouse icon"></i> Supply List </h1>
     
      
            <div className="ui search"></div>
            <div className="ui icon input">
                     <input type="text" placeholder="Search by name" className="form-control" style={{
                         marginTop:20, marginBottom:20, width:"40%"}}
                         onChange={
                             (e)=>{
                                setSearch(e.target.value)}}/>
                                <i className="search icon"></i>
            </div>   

      


      <div className='container'>
      <div class="ui inverted divider"></div>
        <table className='ui selectable white eight column striped table'>
          <thead>
            <tr>
              
              <th>SID</th>
              <th>Supplier Name</th>
              <th>Quantity</th>
              <th>Cost (Rs.)</th>
              <th> Date </th>
              {/* <th>Update </th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {Supplies.filter((value)=>
                                {
                                    if(search===""){
                                        return value
                                    }else if(
                                        value.sname.toLowerCase().includes(search.toLowerCase())
                                        
                                    ){
                                        return value
                                    }
                                    return 0;
                                }).map((Supply) => (
              <tr key={Supply.sid}>
                <td>{Supply.sid}</td>
                <td>{Supply.sname}</td>
                
                <td>{Supply.qty}</td>
                <td>{Supply.amount}</td>
                <td>{moment(Supply.date).format('YYYY-MM-DD')}</td>
                {/* <td>
                  <button
                    className='ui blue icon button'
                    onClick={() => updateSupplyClicked(Supply.sid)}
                  >
                    <i className='edit icon'></i> Update
                  </button>
                </td> */}
                <td>
                  <button
                    className='ui red icon button'
                    onClick={() => deleteSupplyClicked(Supply.sid)}
                  >
                    <i className='trash alternate outline icon'></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="ui inverted divider"></div>
        {/* <div className='row'> */}
          <button className="ui huge green icon button" onClick={addSupplyClicked}>
          <i className='plus icon'></i> ADD 
          </button>
        {/* </div> */}
        <div style={{
                         marginTop:20, marginBottom:20,  marginRight:1100}}>
        <button  type="button" className="btn btn-info" onClick={ () =>printJS({
              printable: Supplies, header: 'Supply Report',
                properties: [  { field: 'sid', displayName: 'SID'},
                                { field: 'sname', displayName: 'Name'},
                                { field: 'qty', displayName: 'Quantity'},
                                { field: 'amount', displayName: 'Amount'},
                                { field: 'date', displayName: 'Date'},


                    ],
              type: 'json'
                })}>
                <b>
                Print Supply Report</b>
                </button></div>
      </div>
    </div>
    </>)
}

export default ListSupplyComponent