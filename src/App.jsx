import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Task from './components/Task'
import UpdateTask from './components/UpdateTask'
import CreateTask from './components/CreateTask'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Task/>}></Route>
          <Route path='/create' element={<CreateTask/>}></Route>
          <Route path='/update' element={<UpdateTask/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
