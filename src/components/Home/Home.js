import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import image from '../../images/ToDo.png'

export default function Home() {
  return (
    <Container >
        <Row className=' text-center m-2'>
            <Col >
                <section className='home'>
                    <h1 className='mt-5 text-white'>Welcome To My ToDo Organizer</h1>
                </section>
                <img src={image} alt='todo pic' className='image mb-5' />
            </Col>
        </Row>
    </Container>
  )
}
