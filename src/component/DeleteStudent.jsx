import React, { useState } from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
    const [data,deleteData]=useState(
        {
            "name":""
        }
    )
    const inputHandler=(event)=>{
        deleteData({...data,[event.target.name]:event.target.value})
    }    
    
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            
                        </div>
                        <div className="col col-12 col-sm6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-danger" onClick={readValue}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteStudent