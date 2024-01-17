import React, { useState } from "react"




export default function CreateTask(){

    
    const [tarea, setTarea] = useState([])
    const [fecha, setFecha] = useState([])
    
    console.log(tarea, fecha);
    function Crear () {}
    return(
       
        <div>
            <div>
                <form onSubmit={Crear()}>
                
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tarea</label>
                        <input type="text" class="form-control" onChange={(e) => {setTarea(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fecha</label>
                        <input type="date" class="form-control" onChange={(e) => {setFecha(e.target.value)}} id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
            )
}