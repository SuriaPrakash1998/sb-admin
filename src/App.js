import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import Profile from "./Components/Profile";
import { Navigate } from "react-router-dom";
import Details from "./Components/Details/Details.js";
import Account from "./Components/Details/Account";
import Bill from "./Components/Details/Bill";
import Password from "./Components/Details/Password";
import Payments from "./Components/Details/Payments";
import Profiles from "./Components/Details/Profiles";
import UserContextComponent from "./Components/context/UserContextComponent";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div className="container-fluid">
            
              <Routes>
                <Route
                  path="/dashboard"
                  element={<UserContextComponent><Dashboard   /></UserContextComponent>}
                />
                <Route
                  path="/add-users"
                  element={<UserContextComponent><AddUser   /></UserContextComponent>}
                />
                <Route
                  path="/edit-user/:id"
                  element={<UserContextComponent><EditUser   /></UserContextComponent>}
                />
                <Route
                  path="/profile/:id"
                  element={<Profile   />}
                />
                <Route path="/details" element={<Details />}>
                  <Route path="account" element={<Account />} />
                  <Route path="bill" element={<Bill />} />
                  <Route path="payments" element={<Payments />} />
                  <Route path="password" element={<Password />} />
                  <Route path="profiles" element={<Profiles />} />
                </Route>
                {/* routing to dashboard as home page , route path '*' means any other non component pages are accessed then it is automatically re directed to dashboard page" */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
