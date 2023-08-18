import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function Dashboard({users,setUsers}) {   
  let navigate = useNavigate();
  let data = [
    {
      title : "Earnings Monthly",
      value : "$40,000",
      color : "primary",
      icon : "fa-calendar",
      isProgress : false,
    },
    {
      title : "Earnings Monthly",
      value : "$160,000",
      color : "success",
      icon : "fa-dollar-sign",
      isProgress : false,
    },
    {
      title : "Task",
      value : "50%",
      color : "info",
      icon : "fa-clipboard-list",
      isProgress : true,
    },
    {
      title : "Pending Request",
      value : "18",
      color : "warning",
      icon : "fa-comments",
      isProgress : false,
    },
  ]
  let handleDelete = (i)=>{
    let newUsers = [...users]
    newUsers.splice(i,1)
    setUsers(newUsers)
  }
  return<>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                          <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <div className="row">

                    {
                      data.map((e,i)=>{
                        return <Card key={i}
                        title={e.title}
                        value={e.value}
                        color={e.color}
                        icon={e.icon}
                        isProgress={e.isProgress}
                        />
                      })
                    }
                        
                        
                    </div>

                    <div className="container-fluid">
                    <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>City</th>
                              <th>Batch</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              users.map((e,i)=>{
                                return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.city}</td>
                                <td>{e.batch}</td>
                                <td>
                                 <Button variant='primary' onClick={()=>{navigate(`/edit-user/${i}`)}}>
                                {/* <Link className="nav-link" to = {`/edit-users/${i}`}> */}
                                 Edit
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button onClick={()=>{navigate(`/profile/${i}`)}}><i className="fa-solid fa-user" style={{fontSize : "24px"}}></i></Button>
                                </td>
                                
                                
                                </tr>
                              })
                            }
                            
                          </tbody>
                    </Table>

                    </div>

  
  
  </>
}

export default Dashboard