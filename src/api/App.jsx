import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Home from './pages/Home'
import Details from './pages/Details'
const App = () => {
   
    return (
        <>
            <h1>API</h1>
            <Cards/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details' element={<Details/>}/>
            </Routes>
        </>
    )
}
export default App
