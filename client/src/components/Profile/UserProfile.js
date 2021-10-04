import React from 'react'
import './userProfile.css'

function UserProfile() {
  return (
    <div className='userProfile'>
      {/* Main User Area */}
      <div className="profmain">
      <img src="https://via.placeholder.com/200"></img>
        <div>
          <h1>Username</h1>
          <div className="profinfo">
            <h4>Degree</h4>
            <h4>Gender</h4>
            <h4>Other Stuff</h4>
          </div>
        </div>
      </div>
      {/* Bio Area */}
      <div className="bio">
        <div className="biocard">
          <p>Bio Area</p>
        </div>
      </div>
      {/* Skills? Area */}
      <div className="cards">
        <div className="card">
          <img src="https://via.placeholder.com/100"></img>
          <p>description</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/100"></img>
          <p>description</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/100"></img>
          <p>description</p>
        </div>
      </div>

    </div>
  )
}

export default UserProfile