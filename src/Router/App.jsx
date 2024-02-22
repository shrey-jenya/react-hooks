import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './Components/Header'
import ProductID from './pages/ProductID'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/product/:id' element={<ProductID/>} />
            </Routes>
        </div>
    )
}

export default App
