import {Route, Routes} from 'react-router-dom';
import Index from './pages';
import Create from './pages/Create';
import View from './pages/View';


function App() { 
  return (
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='create' element={<Create/>} />
        <Route path='view/:bookId' element={<View/>} />
      </Routes>
  )
}

export default App
