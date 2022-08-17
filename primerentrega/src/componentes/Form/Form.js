import React from 'react'
import { useState, useEffect, useRef } from 'react'




export const Form = (props) => {
  
  const [input, setImput] = useState('');

  const inputRef = useRef(null);

  useEffect(()=> {
    inputRef.current.focus();
  });

  const manejoEstado = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() *100),
      text: input,
    })
    setImput('')
  }

  const manejarCambios = e => {
    setImput(e.target.value)
  }

  return (
    <form className='form' onSubmit={manejoEstado}>
      <input type="text" 
        placeholder='Agregar Tarea' 
        value={input} 
        name='text' 
        className='inputForm' 
        onChange={manejarCambios}
        ref={inputRef}
        />
      
      <button className='botonInput'>Agregar</button>

    
    </form>
    
  )
}


