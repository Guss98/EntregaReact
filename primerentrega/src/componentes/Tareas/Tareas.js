import React, {useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'



function Tarea({Tareas , TareaCompletada, removeTarea}) {

  return Tareas.map((Tarea, index) =>(
    <div className= 'Tarea' 
    key={index}>
        <div >
            {Tarea.text}
        </div>

        <div className='iconos'>
            <AiOutlineCloseCircle 
                onClick={()=> removeTarea(Tarea.id)}
                className='iconoBorrar'
            />

        </div>
       
    </div>
     
  ))
  
}

export {Tarea}