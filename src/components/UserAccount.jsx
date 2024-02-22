import React, { useContext } from 'react'
import userContext from '../Context/UserContext'

const UserAccount = () => {
    const user = useContext(userContext)
  return (
    <div>
      <h2>Hello {user}</h2>
    </div>
  )
}

export default UserAccount
