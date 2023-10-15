import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const post=[
    {
      id:1,
      name:'apple',
      desc: 'Apple is red'
    },{
      id:2,
      name:'banana',
      desc: 'banana is yellow'
    },{
      id:3,
      name:'orange',
      desc:'orange is orange'
    }
  ]

  return (
    <div>
      {post.map((val)=>(
        <div key={val.id}>
          <Link to={`singlePage/${val.id}`}>
            <p>{val.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home