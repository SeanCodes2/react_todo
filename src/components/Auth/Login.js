import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        return navigate('/')
    }

    return (
        <div className='login bg-dark'>
            <article className='bg-secondary mb-5 p-5 text-dark'>
                <h1 className='text-center text-white'>Welcome to ToDo Organizer!</h1>
            </article>
            <Container >
                <Card className='m-2 border-dark text-center'>
                    <Card.Header className='bg-dark text-white'>
                        <h2>Login for full functionality</h2>
                    </Card.Header>
                    <Card.Body className='bg-secondary'>
                        <button className='btn btn-success' onClick={() => handleAuth()}>
                            Login with Github
                        </button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
