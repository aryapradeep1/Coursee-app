import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NaviBar from './NaviBar'

const ViewCourses = () => {
       const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/courses")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
  <NaviBar/>
 <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                      

                        <div className="row g-4">

                            {data.map((value, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-12 col-md-6 col-lg-4"
                                    >
                                        <div className="card h-100 shadow">

                                            <div className="card-body d-flex flex-column">

                                                <h5 className="card-title text-primary">
                                                    {value.course_name}
                                                </h5>

                                                <p className="card-text">
                                                    <b>Created At:</b> {value.created_at}
                                                </p>

                                                <p className="card-text">
                                                    <b>Duration:</b> {value.duration}
                                                </p>

                                                <p className="card-text">
                                                    <b>Fee:</b> {value.fee}
                                                </p>

                                                <p className="card-text">
                                                    <b>ID:</b> {value.id}
                                                </p>

                                                <p className="card-text">
                                                    <b>Mode:</b> {value.mode}
                                                </p>

                                                <p className="card-text">
                                                    <b>Trainer:</b> {value.trainer}
                                                </p>

                                                <a href="#" className="btn btn-primary mt-auto">
                                                    View Details
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewCourses