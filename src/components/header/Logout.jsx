import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Logout = () => {

    const navigate = useNavigate()

    const handleLogout = (e)=>{
        e.preventDefault()
            localStorage.removeItem("token")
            navigate("/")
            toast.success("LogOut Successfully")

    }

  return (
   
         <button className="btn border border-none my-3" onClick={handleLogout}>LogOut</button>
    
  )
}

export default Logout