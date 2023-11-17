import React from 'react'
import Nav from './Nav'

function Profile() {
    const user = {
        firstName: "Peemapol",
        lastName: "sudsanguan",
        Number: "(6301648)",
        Age: "Age (21 y)",
        Educational: "Educational(Bachelor's degree)",
        BachelorofEngineering: "BachelorofEngineering(Computer Enginerring)",
        imgPic: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/135597405_1600880433430852_7495545940389054821_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFLR0n764i6nVX6EZ4i1vFVT74a4MBatB5PvhrgwFq0HidHiWtUC4sVqMFLHF6iqAsm8BVKVn91Sdc_umJ1s8zL&_nc_ohc=KhTN9a5-wZQAX9bFFVF&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDlE4XA1lDwGp3u-Ej990hQJj_rCjfVS9fedqefwJtHqw&oe=657D9E8F",
      }
  return (
    <>
    <Nav/>
    <div>
    <h5>Welcome to My Profile</h5>
      <h6>My name is {user.firstName} {user.lastName} {user.Number} </h6>
      <p>{user.Age}</p>
      <p>{user.Educational}</p>
      <p>{user.BachelorofEngineering}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vh', margin: '0' }}>
      <img src={user.imgPic} alt="Centered Image" />
    </div>
    </div>
    </>
  )
}

export default Profile
