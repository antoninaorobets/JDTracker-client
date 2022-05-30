import React,{useState} from 'react'
import { format } from 'date-fns'
import { Card, ListGroup, Container, Row, Col , Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Application({ application, deleteApplication, handleStatusChange, userId }) {

    const handleDelete = () => {
        deleteApplication(application.id)
    }
    const statuses = ["applied", "in process", "decliened"]

    const applied = new Date(application.created_at)
   
    const date =  format(applied, 'MMM do')
    
    const updateStatus = (event) => {
        const updatedStatus = { "status": event.target.value, user_id: userId }
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedStatus)
        };
        fetch(`http://localhost:9292/application/${application.id}`, requestOptions)
            .then(response => response.json())
            .then(application => handleStatusChange(application.id, application.status))
            // .catch(err => {setError(err)});
    }

    const options = statuses.map(status => {
        if (application.status === status) {
            return <option key={status} selected value={status} > {status} </option>
        }
        else {
            return <option key={status} value={status}>{status}</option>
        }
    })

    return (
         <div style={{"width": "90%", "margin": "auto"}}>
            <Card style = {{"margin": "5px"}}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col> <img src={application.job.logo}></img></Col>
                        <Col xs={6} style = {{"margin": "auto"}}>
                            <h5>{application.job.title}</h5>
                           Company: <a href={application.job.company_link}>{application.job.company}</a>,  {application.job.location}
                        </Col>
                        <Col  style = {{"margin": "auto"}}>
                        <small className="text-muted">Applied: {date}</small>
                            <Form.Select aria-label="Application status" onChange={updateStatus}>
                                {options}
                            </Form.Select>
                        </Col>
                        <Col  style = {{"margin": "auto"}}> <Button  variant="outline-warning" onClick={handleDelete}> Delete</Button> </Col>
                    </Row>
                </Container>
            </Card>
         </div>
    )
}

export default Application