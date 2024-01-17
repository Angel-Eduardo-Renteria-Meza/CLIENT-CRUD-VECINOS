import React from "react"



export default function UpdateTask(){
    function Update () {

        }
    return(

        
        <>
        <div>
            <div>
                <form onSubmit={Update()}>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tarea</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">fecha</label>
                        <input type="date" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}