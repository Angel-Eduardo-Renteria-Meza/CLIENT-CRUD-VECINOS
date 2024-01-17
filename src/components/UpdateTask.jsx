import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


export default function UpdateTask(){
    
    const navigation = useNavigate()
    const taskId = useParams()
    const [datos, setDatos] = useState([])
    const [tarea, setTarea] = useState([])
    const [fecha, setFecha] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3000/vecinos/"+taskId.id)
        .then((result) => {
                setDatos(result.data)
        })
        .catch(err=> console.log(err))
    },[])
    const Update = (e) => { 
        e.preventDefault();
        axios.put("http://localhost:3000/vecinos/update/"+taskId.id,{tarea, fecha})
        .then(
            navigation("/")
        )
        .catch(err => console.log(err))
    }

    return(

        
        <>
        <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={Update}>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tarea</label>
                        <input type="text" placeholder={datos.tarea} class="form-control" onChange={(e) => setTarea(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">fecha</label>
                        <input type="date"  class="form-control" onChange={(e) => setFecha(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}