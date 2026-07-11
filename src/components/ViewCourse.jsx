import React, { useState } from 'react'
import NaviBar from './NaviBar'

const ViewCourse = () => {

    const [data, chanagedata] = useState([

{"course_name":"MEAN Stack","created_at":"2026-07-11T09:18:41.017000","duration":"17 Days","fee":19000.0,"id":"6a520a71f19fbee7ff0b656b","mode":"Online","trainer":"Manoj"},
{"course_name":"Ruby Full stack  Bootcamp","created_at":"2026-07-11T09:12:15.994000","duration":"7 Days","fee":15000.0,"id":"6a5208ef3c008b2a8bdf5000","mode":"Online","trainer":"Manoj"}


    ])

  return (
    <div>
<NaviBar/>
  <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">

                            {data.map((value, inderx) => {

                                return (

                                    <div
                                        key={inderx}
                                        className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
                                    >

                                        <div className="card h-100 shadow">

                                            <div className="card-body d-flex flex-column">

                                                <h5 className="card-title text-primary">
                                                    {value.course_name}
                                                </h5>

                                                <p className="card-text">
                                                    <b>credicted at :</b> {value.created_at}
                                                </p>

                                                <p className="card-text">
                                                    <b>duration :</b> {value.duration}
                                                </p>

                                                <p className="card-text">
                                                    <b>fee :</b> {value.fee}
                                                </p>

                                                <p className="card-text">
                                                    <b>id :</b> {value.id}
                                                </p>

                                                <p className="card-text">
                                                    <b>mode :</b> {value.mode}
                                                </p>

                                                <p className="card-text">
                                                    <b>trainer :</b> {value.trainer}
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

export default ViewCourse