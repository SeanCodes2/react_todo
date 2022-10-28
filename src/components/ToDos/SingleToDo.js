import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import ToDoEdit from './ToDoEdit'
import  axios  from 'axios'

export default function SingleToDo(props) {
    const { currentUser } = useAuth()
    const [showEdit, setShowEdit] = useState(false)

    const deleteTodo = (id) => {
        if (window.confirm(`Are you sure you want to delete ${props.todos.name}?`)) {
            axios.delete(`https://localhost:7026/api/ToDoes/${id}`).then(() => {
                props.getToDos()
            })
        }
    }

    return (
        <tr>
            <td>{props.todos.name}</td>
            <td>{props.todos.done === true ? <p>Yes</p> : <p>No</p>}</td>
            {/* EDIT UI */}
            {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && (
                <td>
                    <button className='m-1 rounded' id='editLink' onClick={() => setShowEdit(true)}>
                        <FaEdit />
                    </button>
                    {/* DELETE UI */}
                    <button className='m-1 rounded' id='deleteLink' onClick={() => deleteTodo(props.todos.toDoId)}>
                        <FaTrashAlt />
                    </button>

                    {showEdit && <ToDoEdit todos={props.todos} showEdit={showEdit} setShowEdit={setShowEdit} getToDos={props.getToDos} />}
                </td>
            )}
            {/* END EDIT UI */}
        </tr>
    )
}
