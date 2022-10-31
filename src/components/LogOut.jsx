import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function LogOut() {

  const { logout } = useAuth0()

  return (
    <button onClick={() => logout()}>
      Log out
    </button>
  )
}

export default LogOut