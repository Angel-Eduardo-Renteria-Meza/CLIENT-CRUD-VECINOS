import React, { useEffect } from "react"
import { Link } from "react-router-dom"


export default function Task(){
    const id = ""
    useEffect(()=>{

    },[])
    return(
        
        <div className="d-flex bg-primary justify-content-center align-items-center" >
            <div className="bg-white w-80">
            <Link to={"/create"}>Agregar</Link>
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                <Link className="btn btn-primary" to={`/update/${id}`}>Actualizar</Link>
                                <button className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}