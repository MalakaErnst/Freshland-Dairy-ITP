import React, { useState, useEffect} from 'react'
import RawMaterialDataService from '../API/RawMaterialDataService';
import { useHistory } from 'react-router'

const RawmaterialView =() =>{
    const [rawmaterial, setrawmaterial] = useState([])
    const [message, setMessage] = useState(null)
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=>{
        refreshrawmaterial()
    },[])

    
    const deleterawmaterialClicked = (id) =>{
        RawMaterialDataService.deleterawmaterial(id)
        .then(response => {
                setMessage(`Delete Of rawmaterial ${id} successful`)
                refreshrawmaterial()
            }
        );
    }
    const updaterawmaterialClicked =(id) =>{
        history.push(`/rawmaterialManagement/${id}`);
    }

    
    const refreshrawmaterial=() =>{

        RawMaterialDataService.retriveAllrawmaterial()
            .then(response => {setrawmaterial(response.data)}
            )
    }
    
    
    return(
        <><br></br>
        <div className = "Viewrawmaterial">
                <h1>List OF Raw Material </h1>
                    {message && <div className ="alert alert-succcess">{message}</div>}

                <br></br>
                 <div>
                     <input type="text" placeholder="search" className="form-control" style={{
                        marginLeft:"10%",marginTop:20, marginBottom:20, width:"40%"}}
                        onChange={
                            (e)=>{
                                setSearch(e.target.value)
                            }
                         }/>
                 </div>

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
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rawmaterial.filter((val) =>
                            {
                                if (search === ""){
                                    return val
                                }
                                else if (
                                    val.rawMName.toLowerCase().includes(search.toLowerCase())||
                                    val.rawMType.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return val
                                }
                                return 0;
                            }).map(
                                (rawmaterial)=>
                                <tr key ={rawmaterial.id}>
                                    <td>{rawmaterial.rawMID}</td>
                                    <td>{rawmaterial.rawMType}</td>
                                    <td>{rawmaterial.rawMName}</td>
                                    <td>{rawmaterial.date}</td>
                                    <td>{rawmaterial.arrQty}</td>
                                    <td>{rawmaterial.reQty}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => deleterawmaterialClicked(rawmaterial.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => updaterawmaterialClicked(rawmaterial.id)}>Update</button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>

        </div><br></br>
        </>
    );
}
export default RawmaterialView;