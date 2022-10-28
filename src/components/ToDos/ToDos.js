import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import './ToDos.css'
import SingleToDo from './SingleToDo';
import FilterCat from './FilterCat';
import {useAuth} from '../../contexts/AuthContext'
import ToDoCreate from './ToDoCreate'

export default function ToDos(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(0);
  const [doneFilter, setDoneFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const {currentUser} = useAuth()

  
  const getToDos = () => {
    axios.get(`https://localhost:7026/api/ToDoes`).then(response => {
      console.log(response)
      setTodos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
    <section className='todo'>
       <article className='banner bg-primary p-5 col-8 offset-2'>
            <h1 className='text-center text-white'>ToDos Dashboard</h1>
        </article>       
        <br/><br/>
        {/* CREATE UI */}
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
          <div className='bg-dark p-2 mb-3 text-center'>
          <button className='btn btn-primary' onClick={() => setShowCreate(!showCreate)}>
              {!showCreate ? 'Create New Resource' : 'Close Form'}
          </button>
          <div className='createContainer'>
              {showCreate &&                  
                  <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />
              }
          </div>
      </div>
          }
          {/* END CREATE UI */}

        <FilterCat setFilter={setFilter} setDoneFilter={setDoneFilter} />
        <Container>
        <table className='table table-dark text-light my-3 border table-hover'>
                <thead className='table-secondary text-uppercase'>
                    <tr className='table-info'>
                        <th>Name</th>
                        <th>Complete</th>
                        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
                            <th>Actions</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* READ UI */}
                    {}
                    
                    
                    {filter === 0 ? todos.map((x) => <SingleToDo key={x.toDoId} todos={x} getToDos={getToDos} /> ) 
                    : todos.filter((x) => x.categoryId === filter).map((x) => <SingleToDo key={x.toDoId} todos={x} getToDos={getToDos} />)} 




                    {/* {filter === 0 ? todos.map((x) => <SingleToDo key={x.toDoId} todos={x} getToDos={getToDos} /> ) : todos.filter((x) => x.categoryId === filter).map((x) => <SingleToDo key={x.toDoId} todos={x} getToDos={getToDos} />)} */}
                </tbody>
            </table>
        </Container>
    </section>
  )
}
