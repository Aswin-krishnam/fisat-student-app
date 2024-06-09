import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [student,setStudent]=useState([])

    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                setStudent(response.data)
            }
        ).catch().finally()
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
            <Navbar />

            <center>
                <h3>View All Albums</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Collage</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile </th>
                                    <th scope="col">Email </th>
                                    <th scope="col">Address </th>

                                </tr>
                            </thead>

                            {student.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>

                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>

                                        </tr>
                                    </tbody>
                                }
                            )}

                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewAll