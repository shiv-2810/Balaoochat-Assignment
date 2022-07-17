import React from 'react'
import './Header.css'
import {Avatar} from "@material-ui/core"
function Header() {
  return (
    <div className='header'>
        <Avatar className="header__image" src="https://images.unsplash.com/photo-1623230590824-f39e31a0a608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
        <span className='header__name'>Shivam</span>
    </div>
  )
}

export default Header