import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Categories.css'
import { Container } from 'react-bootstrap'
import SingleCategory from './SingleCategory'
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [showCreate, setShowCreate] = useState(false)
    const {currentUser} = useAuth()

    const getCategories = () => {
        axios.get(`https://localhost:7026/api/Categories`).then((response) => {
            console.log(response)
            setCategories(response.data)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <section className='category'>
            <article className='bg-primary p-5 col-8 offset-2 banner'>

                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>  

                <h1 className='text-center text-white'>

                <div className='spinner-grow text-dark'></div>

                    *Categories Dashboard*

                    <div className='spinner-grow text-dark'></div>

                    </h1>

                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>
                    <div className='spinner-grow'></div>  

            </article>
            <br/><br/>
            {/* CREATE UI */}
            {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && (
                <div className='bg-dark p-2 mb-3 text-center'>
                    {showCreate ? 
                        <>
                            <button onClick={() => setShowCreate(false)} className='btn btn-warning'>
                                Cancel
                            </button>
                            <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
                        </>
                   : (
                        <button className='btn btn-primary' onClick={() => setShowCreate(true)}>
                            Create Category
                        </button>
                    )}
                </div>
            )}
            <Container>
                <table className='table table-dark text-light my-3 border table-hover'>
                    <thead className='table-secondary text-uppercase'>
                        <tr className='table-info'>
                            <th>Name</th>
                            <th>Description</th>
                            {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
                            <th>Actions</th>
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {/* READ UI */}
                        {categories.map((x) => (
                            <SingleCategory key={x.categoryId} category={x} getCategories={getCategories} />
                        ))}
                    </tbody>
                </table>
            </Container>
        </section>
    )
}
