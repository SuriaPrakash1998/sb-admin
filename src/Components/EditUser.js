import React, {useState,useEffect}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';



function EditUser({ users, setUsers }) {

  let params = useParams()

 
  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [mobile,setMobile] = useState()
  let [city,setCity] = useState()
  let [batch,setBatch] = useState()
  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...users]
    newArray.splice(params.id,1,{
      name,
      email,
      mobile,
      city,
      batch
    })
    setUsers(newArray)
    navigate('/dashboard')
  }

  useEffect(()=>{
    if(params.id<users.length)
    {
        setName(users[params.id].name)
        setEmail(users[params.id].email)
        setMobile(users[params.id].mobile)
        setCity(users[params.id].city)
        setBatch(users[params.id].batch)
    }
    else
    {
      alert("Invalid User ID")
      navigate("/dashboard")
    }
  })
  

  return <>
  <div className='container-fluid'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
    </div>
    <Form>
          <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick = {()=>handleSave()} >
            Submit
          </Button>
    </Form>
  </div>

  </>
}


export default EditUser