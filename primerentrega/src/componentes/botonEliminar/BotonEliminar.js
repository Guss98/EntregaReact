import React from 'react'


function BotonEliminar({Tareas, borrarTodo})  {
  return (
    <button onClick={()=>borrarTodo(Tareas)} className='btnBorrarTodo'>
        Borrar tareas
    </button>
  )
}

export {BotonEliminar}


