import React, {useEffect, useState} from 'react'
import Application from './Application';
import { ListGroup, Form, InputGroup,FormControl ,Button, Card} from 'react-bootstrap'

function ApplicationsList({userId}) {
   const [applications, setApplications] = useState([])
   const [errorMessage, setErrorMessage] = useState("")
  console.log("component reloaded")

  const get_all_applications = ()=>{
    fetch("http://localhost:9292/applications?"+ new URLSearchParams({user_id: userId}))
        .then((r) => r.json())
        .then((data) => setApplications(data));
  }

  useEffect(() => {
    get_all_applications()
    }, []);

  const cretaeApplication = (event) =>{
    event.preventDefault()
    const link = event.target[0].value
    event.target[0].value = ""
    const application_data = { "link": link, "user_id": userId}

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application_data)
    };

    fetch('http://localhost:9292/application', requestOptions)
        .then(response => response.json())
        .then(data =>  {
          const utdatedList =[data, ...applications ]
          setApplications(utdatedList)
        })
        .catch(error => {
          console.log("error:", error)
          console.error(error.message)
          setErrorMessage("Please, check link is correct.")
        });
  }

    const deleteApplication = (id)=> {
      fetch(`http://localhost:9292/application/${id}`, {method: "DELETE"})
      .then((r) => r.json())
      .then((data) => {
        const utdatedList = applications.filter(application => application.id !== id )
        setApplications(utdatedList)
        // get_all_applications()
        })
        .error(error=>console.error(error));
    }

    const handleStatusChange = (id,status) =>{
      const utdatedList = applications.map(application => {
        if (application.id === id) {application.status = status }
        return application
      })
      setApplications(utdatedList)
    }

    const list = applications.map(application => 
      <Application 
      key={application.id} 
      userId={userId}
      application={application} 
      deleteApplication={deleteApplication}
      handleStatusChange = {handleStatusChange}
      />)

  return (
    <div>
    <h1 style={{"color" : "#b56000", "marginTop": "20px"}}>Applications</h1>

    <Form 
      onSubmit={cretaeApplication}
      style = {{"width": "50%", "margin": "auto", padding: "40px"}} >
      <div style = {{padding: "40px", "border": "1px solid #579681", "borderRadius": "4px"}}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter link to the job you have applied on Linkedin</Form.Label>
          <Form.Control 
          name="link" 
          type="text" 
          placeholder="Enter link"
           />
           <div style={{color: "red"}}>
              {errorMessage}
           </div>
        </Form.Group>
        
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </div>
    </Form>

    <ListGroup>
      {list}
    </ListGroup>
    
    </div>
  )
}

export default ApplicationsList