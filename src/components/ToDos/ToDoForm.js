import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Formik, Field, Form } from 'formik'
import {toDoSchema} from '../../utilities/validationSchema'


export default function ToDoForm(props) {
    
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get(`https://localhost:7026/api/Categories`).then(response => {
          console.log(response)
          setCategories(response.data)
        })
      }
   
    const handleSubmit = (values) => {
        console.log(values)
        if(!props.todos){
            const toDoToCreate = values

            axios.post(`https://localhost:7026/api/ToDoes`, toDoToCreate).then(() => {
                props.setShowCreate(false)
                props.getToDos()
            })
        }
        else 
        {            
            const toDoToEdit = {
                toDoId: props.todos.toDoId,
                name: values.name,
                done: values.done,
                categoryId: values.categoryId
            }
            axios.put(`https://localhost:7026/api/ToDoes/${props.todos.toDoId}`, toDoToEdit).then(() => {
                props.setShowEdit(false)
                props.getToDos()
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, []);

  return (
    <Formik
        initialValues={{
            name: props.todos ? props.todos.name : '',
            done: props.todos ? props.todos.done : false,
            categoryId: props.todos ? props.todos.categoryId : ''
        }}
        validationSchema={toDoSchema}
        onSubmit={(values) => handleSubmit(values)}
        >

        {({errors, touched}) => (
            <Form id='toDoFrom' className='offset-2' >
                <div className='form-group m-3 text-center col-10'>
                    <Field name='name' className='form-control' placeholder='Name' />
                    {errors.name && touched.name ? (
                        <div className='text-danger'>{errors.name}</div>
                    ) : null}
                </div>
                <div className='form-group m-3 col-10'>
                    <Field as='select' name='categoryId' className='form-control'>
                        <option value='' disabled>[--Please Choose--]</option>                        
                        {categories.map(cat => 
                            <option key={cat.categoryId} value={cat.categoryId} className='text-dark'>
                                {cat.catName}
                            </option>
                        )}
                    </Field>
                </div> 
                <div className='form-group m-3 col-10'><span className=''>Done?   </span>  
                    <label><Field name='done' type='checkbox' className='checkbox' /></label>
                    {errors.done && touched.done ? (
                        <div className='text-danger'>{errors.done}</div>
                    ) : null}
                </div>          
                <div className='form-group m-3 col-10'>
                    <button type='submit' className='btn btn-info m-3'>Submit ToDo to API</button>
                </div>          
            </Form>
        )}
    </Formik>
  )
}
