import React, { useState } from 'react'
import NaviBar from './NaviBar'
import axios from 'axios'


const AddCourse = () => {

      const[input,changeInput]=React.useState(
        {
              course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
        }
    )


const inputHandler = (event) =>{
        changeInput({...input,[event.target.name]:event.target.value})
}


    const readValue = () =>{
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(

            (response)=>{

                    console.log(response.data)
                    alert("course addes successfully")


            }


        ).catch(


                (error)=>{
            
    console.log(error.response);
    console.log(error.response.data);
    console.log(error.response.status);
    alert("Failed to add course");

                   
                }

        )
    }

  return (
    <div>
<NaviBar/>
             <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="card shadow p-4">
          <h2 className="text-center text-success mb-4">InsertCourse</h2>
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Name:</label>
                            <input type="text" className="form-control"  name='course_name' value={input.course_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label"> Duration:</label>
                            <input type="text" className="form-control" name='duration' value={input.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Fee:</label>
                            <input type="text" className="form-control"  name='fee' value={input.fee} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Mode:</label>
                            <select name="" id="" className="form-control"  name='mode' value={input.mode} onChange={inputHandler}>
                                <option className="option" value="Online">Online</option>
                                <option className="option" value="Offline">Offline</option>
                                <option className="option"value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Trainer:</label>
                            <input type="text" className="form-control"  name='trainer' value={input.trainer} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Insert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default AddCourse