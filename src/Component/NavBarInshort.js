import React from 'react'
import './NavBarInshort.css'
import DrawerInshort from './DrawerInshort'
const NavBarInshort = ({ setcategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
                <DrawerInshort setcategory={setcategory}></DrawerInshort>
        </div>
        <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='inshort' height='80%' style={{cursor:'pointer'}}></img>    
    
    </div>
  )
}

export default NavBarInshort