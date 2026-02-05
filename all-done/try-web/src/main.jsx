import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import TaskProvider from './context/TaskContext.jsx'
// import { Datacontext } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TaskProvider>
    <App />
  </TaskProvider>
  </BrowserRouter>
)
