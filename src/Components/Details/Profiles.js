import React from 'react'

function Profile() {
  let name = sessionStorage.getItem('username')

  
  return <>
    <div className="d-sm-flex align-items-center justify-content-center mb-4">
      <h1 className="h3 mb-0 text-gray-800">Profile Section</h1>
    </div>
    <div>
      <h1 className="h3 mb-0 text-gray-800">{name}</h1>
    </div>
  </>
}

export default Profile