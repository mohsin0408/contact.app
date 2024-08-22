import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({setIsLoggedIn}) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login")
  };

  return (
    <div>
      <button className="ui button blue right" onClick={handleLogout} >logout</button>
    </div>
  )
}

export default Logout


