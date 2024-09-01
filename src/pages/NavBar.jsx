import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='w-auto mx-auto mt-8 flex justify-center'>
        <ul className='flex gap-10'>
            <li className='bg-slate-200 p-2 border-2 border-black shadow-md shadow-black'>
            <Link to='/brands'>Brands</Link>
            </li>
            <li className='bg-slate-200 p-2 border-2 border-black shadow-md shadow-black'>
            <Link to='/communities'>Communities</Link>
            </li>
            <li className='bg-slate-200 p-2 border-2 border-black shadow-md shadow-black'>
            <Link to='/influencers'>Influencers</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
