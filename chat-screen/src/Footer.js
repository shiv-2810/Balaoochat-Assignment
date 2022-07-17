import React from 'react'
import './Footer.css'
import HomeLogo from './assets/Home.svg'
import FilterLogo from './assets/Filter.svg'
import SearchLogo from './assets/Search.svg'
function Footer() {
  return (
    <div className='footer'>
        <img onClick={()=>alert('You have clicked Home-screen button')} src={HomeLogo} alt="images"></img>
        <img onClick={()=>alert('You have clicked Filter button')} src={FilterLogo} alt="images"></img>
        <img onClick={()=>alert('You have clicked Search button')} src={SearchLogo} alt="images"></img>
    </div>
  )
}

export default Footer