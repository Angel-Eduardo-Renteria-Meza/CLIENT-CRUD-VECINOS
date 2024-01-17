import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Task(){
    
    const [tareas, setTareas] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3000/vecinos/")
        .then((result) => {
                setTareas(result.data)
                
        })
        .catch(err=> console.log(err))
    },[])

    const handleEliminar = (id) => {
        console.log(id);
        axios.delete("http://localhost:3000/vecinos/del/"+id)
        .then((res) => {console.log(res);
             window.location.reload()
        }
        ).catch(err => console.log(err))
    }
    return(
        
        <div className="vh-100 d-flex bg-black justify-content-center align-items-center" >
            <div className="bg-white w-50 p-4 rounded">
            <Link to={"/create"} className="btn btn-success">Agregar</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tarea</th>
                            <th>Dia de elaboración</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tareas.map((tareas) =>{

                                return(
                                    <tr>
                                        <td>{tareas.tarea}</td>
                                        <td>{tareas.fecha}</td>
                                        <td className="d-flex justify-content-evenly">
                                        <Link className="btn btn-primary" to={`/update/${tareas._id}`}>Actualizar</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleEliminar(tareas._id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}