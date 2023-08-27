import React from 'react'
import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState()

    const {createTask} = useContext(TaskContext)

    const haldelSubmit = (e) => {
        e.preventDefault();
        createTask({
            title: title,
            description: description
        })
        setTitle('')
        setDescription('')
    }


    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={haldelSubmit} className="bg-slate-800 p-10 mb-4 W-FULL">
                <h1 className="text-white text-2xl font-bold mb-3">Añadir tareas</h1>
                <input placeholder='escribe tu tarea' onChange={(e) => setTitle(e.target.value)} value={title} className="bg-slate-300 p-3 w-fullmb-2" />

                <textarea placeholder='escribe tu descripcion' onChange={(e) => setDescription(e.target.value)} value={description} className="bg-slate-300 p-3 w-fullmb-2 my-1"></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white w-full">Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm
