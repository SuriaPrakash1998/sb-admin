import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import { useState } from "react";


function App() {
  let [users,setUsers] = useState([
    {
      name : "Suria",
      email : "suria@gmail.com",
      mobile : '1234567890',
      city : "chennai",
      batch : "B46WET"
    },
    {
      name : "Prakash",
      email : "prakash@gmail.com",
      mobile : '1234565432',
      city : "palani",
      batch : "B46WET"
    },
    {
      name : "Ravi",
      email : "Ravi@gmail.com",
      mobile : '9898987878',
      city : "Trichy",
      batch : "B46WET"
    }
  ])
  return  <>
  <BrowserRouter>
              <div id="wrapper">
                <Sidebar />
                <div className="container-fluid">
                <Routes>  
                
                <Route path = "/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
                <Route path = "/add-users" element={<AddUser users={users} setUsers={setUsers} />}/>
                <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
                
                
                </Routes>      
                   

                  </div>    
              </div>
  </BrowserRouter>
            </> 


}

export default App;
  