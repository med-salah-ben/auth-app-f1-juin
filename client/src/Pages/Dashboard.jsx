import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user  = useSelector(state=>state.userReducer.user)
  return (
    <div>
        <h1 className="text-center">Welcome to Dashboard</h1>
        <h2>User Details</h2>
        <h3> Name :  {!user ? "" : user.name}  </h3>
        <h3> Last Name : {!user ? "" : user.lastName}  </h3>
        <h3> Email :  {!user ? "" : user.email}  </h3>
    </div>
  )
}

export default Dashboard