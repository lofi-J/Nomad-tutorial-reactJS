import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Detail from './routes/detail';

function App() {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/movie/:id' element={ <Detail /> } />
        </Routes>
    )
}

export default App;