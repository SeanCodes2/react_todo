import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        return navigate('/')
    }

    return (
        <div className='login bg-dark'>
            <article className='banner bg-primary mb-5 p-5 col-8 offset-2 text-dark'>
                <h1 className='text-center text-white'>Welcome to ToDo Organizer!</h1>
            </article>
            <Container >
                <Card className='m-2 border-dark text-center'>
                   
                    <Card.Header className='bg-dark text-white'>
                        <h2>Login for full functionality</h2>
                    </Card.Header>
                    <Card.Body className='bg-dark'>
                        <button className='btn btn-success' onClick={() => handleAuth()}>
                            Login with Github
                        </button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
