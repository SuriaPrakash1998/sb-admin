import React,{useState} from 'react'
import './Details.css'
import { Outlet,useNavigate } from 'react-router-dom';

function Details() {
  sessionStorage.setItem('username','')
  let Navigate = useNavigate()
  let [currentPage,setCurrentPage] = useState(1)
  console.log(currentPage);

  return <>
  <div className='container-fluid'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Details</h1>
    </div>
      <div >
        <ul className = 'section-navigator'>
          <li className =  {currentPage === 1? 'activePage':''} onClick={()=>{setCurrentPage(1); Navigate('/details/account')}}>Accounts</li>
          <li className =  {currentPage === 2? 'activePage':''} onClick={()=>{setCurrentPage(2); Navigate('/details/payments')}}>Payments</li>
          <li className =  {currentPage === 3? 'activePage':''} onClick={()=>{setCurrentPage(3); Navigate('/details/bill')}}>Bill Details</li>
          <li className =  {currentPage === 4? 'activePage':''} onClick={()=>{setCurrentPage(4); Navigate('/details/profiles')}}>Profile</li>
          <li className =  {currentPage === 5? 'activePage':''} onClick={()=>{setCurrentPage(5); Navigate('/details/password')}}>Change Password</li>
        </ul>
      </div>
      <div className='section'>
      {/* The Outlet component is used within the parent component to render the nested content based on the matched route. */}
      <Outlet/>
      </div>
  </div>
  </>
}

export default Details