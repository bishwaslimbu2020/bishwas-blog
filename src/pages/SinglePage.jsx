import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const SinglePage = () => {
  return (
    <div className='flex justify-around'>
        <div>
            <h1>Heading</h1>
            <div className='border-2'>
                <div>Date Posted</div>
                <div>
                    <Link to={`write/edit=1`}>Edit</Link>
                    <Link to={`write/delete=1`}>Delete</Link>
                </div>
            </div>
            <p>Paragraph</p>
        </div>
        <div>
            <Sidebar/>
        </div>
    </div>    
  )
}

export default SinglePage