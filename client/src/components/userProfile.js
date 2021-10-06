import React from 'react'
// import './landing.css'
/*
function UserProfile() {
  return (
    //Get id from route
    //"/user/" + currentUser.id
    //user.data._id
    //Way to access id via react? user._id
    <div className='userProfile'>
        This is user profile
    </div>
  )
}
*/
function UserProfile() {
  fetch('/user/signup')
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div className='userProfile'>
    This is user profile
    </div>
  )
}

export default UserProfile