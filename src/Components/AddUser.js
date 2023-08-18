import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function AddUser({users,setUsers}) {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [city,setCity] = useState("")
  let [batch,setBatch] = useState("")
  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...users]
    newArray.push({
      name,
      email,
      mobile,
      city,
      batch
    })
    setUsers(newArray)
    navigate('/dashboard')
  }

  return <>
  <div className='container-fluid'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Add User</h1>
    </div>
    <Form>
          <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick = {()=>handleSave()} >
            Submit
          </Button>
    </Form>
  </div>

  </>
}

export default AddUser