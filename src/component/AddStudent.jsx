import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "fname":"",
            "lname":"",
            "collage":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )

    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
    }


  return (
    <div>
            <Navbar/>
            <center>
                <h1>Add Student</h1>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">First name</label>
                                <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Collage</label>
                                <input type="text" className="form-control" name='collage' value={data.collage} onChange={inputHandler} />


                            </div>
      
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>

                            </div>
                           
                      
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  )
}

export default AddStudent