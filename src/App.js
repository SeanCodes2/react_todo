import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ToDos from './components/ToDos/ToDos'
import Categories from './components/Categories/Categories'
import Login from './components/Auth/Login'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import AuthProvider from './contexts/AuthContext'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './components/Home/Home'

function App() {
    return (
        <div className='App bg-dark'>
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<ProtectedRoutes><ToDos /></ProtectedRoutes>} />
                        <Route path='/ToDos' element={<ProtectedRoutes><ToDos /></ProtectedRoutes>} />
                        <Route path='/Categories' element={<ProtectedRoutes><Categories /></ProtectedRoutes>} />
                        <Route path='/Login' element={<Login />} />
                       
                        <Route path='/Home' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    )
}

export default App
