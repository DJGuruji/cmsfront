
import './App.css'
import AdminRouter from './routers/AdminRouter';
import AuthRouter from './routers/AuthRouter'
import HomeRouter from './routers/HomeRouter'


function App() {
  const isLogged = true;
  const isAdmin = true;

  return (
    <>
    {isLogged ? ( isAdmin ?<AdminRouter/>: <HomeRouter/>):<AuthRouter/>}
     </>
  )
}

export default App
