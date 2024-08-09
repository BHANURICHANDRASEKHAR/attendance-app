
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './Components/Routes/Router'
import toast,{ Toaster } from 'react-hot-toast';
function App() {
  
  return (
    <>
    <Router/>
    <Toaster position="top-center" />
    </>
  )
}

export default App
