import React, {useState} from 'react'
import { BotonEliminar } from '../botonEliminar/BotonEliminar'
import { Form } from '../Form/Form'
import { Tarea } from '../Tareas/Tareas'



export const Lista = () => {

    const [Tareas, setTareas] = useState([])

    const agregarTarea = Tarea => {
        if (!Tarea.text  || /^\s*$/.test(Tarea.text)){
            return;
          }

        const nuevaTarea = [Tarea, ...Tareas];
        setTareas(nuevaTarea);
    }

    const removeTarea = id => {
      const removeArr = [...Tareas].filter(Tarea => Tarea.id !== id)

      setTareas(removeArr)
    }


    const borrarTodo = ()=> {
    
        setTareas([])
      
      
    }

  return (
    <div>
        <h1>Tareas para hoy</h1>
        <Form onSubmit={agregarTarea}></Form>
        <Tarea Tareas={Tareas} removeTarea={removeTarea}></Tarea>
        <BotonEliminar Tareas={Tareas} borrarTodo={borrarTodo}></BotonEliminar>

    </div>
  )
}
