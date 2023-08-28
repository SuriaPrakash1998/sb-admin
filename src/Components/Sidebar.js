import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to = "/Dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>
            
            <li className="nav-item active">
                <Link className="nav-link" to = "/add-users">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Add User</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to = "/details">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Details</span>
                </Link>
            </li>
            

        </ul>
  </>
}

export default Sidebar