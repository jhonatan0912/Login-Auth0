import React from 'react'
import LoginButton from "./components/LoginButton";
import LogOut from './components/LogOut';
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { isAuthenticated, isLoading } = useAuth0()
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>App</div>
      {
        isAuthenticated ? <LogOut /> : <LoginButton />
      }
      <Profile />
    </div>
  )
}

export default App
