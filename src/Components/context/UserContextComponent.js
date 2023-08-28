import React from 'react'
import { useState } from 'react';
export const UserContext = React.createContext();

function UserContextComponent({children}) {
  let [users, setUsers] = useState([
    {
      name: "Suria",
      email: "suria@gmail.com",
      mobile: "1234567890",
      city: "chennai",
      batch: "B46WET",
    },
    {
      name: "Prakash",
      email: "prakash@gmail.com",
      mobile: "1234565432",
      city: "palani",
      batch: "B46WET",
    },
    {
      name: "Ravi",
      email: "Ravi@gmail.com",
      mobile: "9898987878",
      city: "Trichy",
      batch: "B46WET",
    }
  ]);
  
  return <>
  <UserContext.Provider value={{ users, setUsers }}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserContextComponent