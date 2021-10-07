import React from 'react'
import './userProfile.css'

function UserProfile() {
  function httpGet(theUrl) {
     let xmlHttpReq = new XMLHttpRequest();
     xmlHttpReq.open("GET", theUrl, false); 
     xmlHttpReq.send(null);
     return JSON.parse(xmlHttpReq.responseText);
  }
  const data = httpGet('http://localhost:8080/user/');
  const latestUser = data[data.length - 1]
  console.log(latestUser)
  return (
    <div className='userProfile'>
      {/* Main User Area */}
      <div className="profmain">
      <img src="https://via.placeholder.com/200"></img>
        <div>
          {/* <h1>{latestUser["username"]}</h1> */}
          <div className="profinfo">
          <h4>{latestUser["username"]}</h4>
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