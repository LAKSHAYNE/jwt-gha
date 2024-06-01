import React from 'react'

function Home() {
  return (
    <div>
        <button onClick={()=>localStorage.removeItem('token')}>logout</button>
    </div>
  )
}

export default Home