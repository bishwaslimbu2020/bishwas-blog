import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-500'>
        <div>
            Logo
        </div>
        <div>
            <Link to='/?cat=js'>Javascript</Link>
            <Link to='/?cat=css'>CSS</Link>
            <Link to='/?cat=html'>HTML</Link>
            <Link to='/write'>Write</Link>
        </div>
    </div>
  )
}

export default Navbar