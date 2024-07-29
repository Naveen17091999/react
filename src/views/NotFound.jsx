import React from 'react'
import '../css/notfound.scss'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const NotFound = () => {
  return (
    <div id='NotFound'>
        <h2>Oops! Page Not Found (404)</h2>
        <p>It looks like the page you're looking for doesn't exist.</p>
        <Link to="/signin">Back to Sign in <FaLongArrowAltRight /></Link>
    </div>
  )
}

export default NotFound