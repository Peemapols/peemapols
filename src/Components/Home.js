import React from 'react'
import Nav from './Nav'

function Home() {
    const user = {
        imgPic: "https://images.unsplash.com/photo-1498736297812-3a08021f206f?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  return (
    <>
    <Nav/>
    <div>
      <h3>Home</h3>
      <h4>This is home page</h4>
      <img src={user.imgPic} width="full" height="full" alt=""/>
    </div>
    </>
  )
}

export default Home
