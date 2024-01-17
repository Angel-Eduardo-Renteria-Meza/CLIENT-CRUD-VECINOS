import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"





export default function CreateTask(){

    const navigate = useNavigate()
    const [tarea, setTarea] = useState([])
    const [fecha, setFecha] = useState([])
    
    

    const crear = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/vecinos/create", {tarea, fecha})
        .then(
            navigate("/")
        )
        .catch(err => console.log(err))
    }
    return(
       
        <div className=" d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={crear}>
                
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tarea</label>
                        <input type="text" class="form-control" onChange={(e) => setTarea(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fecha</label>
                        <input type="date" class="form-control" onChange={(e) => setFecha(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
            )
}