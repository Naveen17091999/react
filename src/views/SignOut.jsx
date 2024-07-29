import React from 'react'
import "../css/register.scss"
import useAuth from '../api/useAuth'
const Logout = () => {
  const {logout} = useAuth()
  return (
    <div className="register">
      <h4>You've successfully logged out. We hope you enjoyed your time on QuizMaster.</h4>
      <button onClick={logout}>Sign In</button>
    </div>
  )
}

export default Logout