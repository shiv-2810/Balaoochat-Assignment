import React from 'react'
import './AddUser.css'
import userAdd from './assets/User_add.svg'
function AddUser() {
  return (
    <div className='addUser'>
        <img onClick={()=>alert('You have clicked Add-user button')} src={userAdd} alt='Useradd' />
    </div>
  )
}

export default AddUser