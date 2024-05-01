
import './App.css'
import AdminRouter from './components/routers/AdminRouter';
import AuthRouter from './components/routers/AuthRouter'
import HomeRouter from './components/routers/HomeRouter'


function App() {
  const isLogged = false;
  const isAdmin = false;

  return (
    <>
    {isLogged ? ( isAdmin ?<AdminRouter/>: <HomeRouter/>):<AuthRouter/>}
     </>
  )
}

export default App
