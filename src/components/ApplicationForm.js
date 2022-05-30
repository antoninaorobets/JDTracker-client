// import React from 'react'
// import { ListGroup, Form, InputGroup,FormControl ,Button} from 'react-bootstrap'


// function ApplicationForm() {


//   const cretaeApplication = (event) =>{
//     event.preventDefault()
//     const link = event.target[0].value
//     event.target[0].value = ""
//     const application_data = { "link": link, "user_id": 1}

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(application_data)
//     };
//     fetch('http://localhost:9292/application', requestOptions)
//         .then(response => response.json())
//         .then(data =>  {
          
//           const utdatedList =[data, ...applications ]
//           setApplications(utdatedList)
//         });
//   }


//     return (
//         <div>ApplicationForm
//             <Form
//                 onSubmit={cretaeApplication}
//                 style={{ "width": "50%", "margin": "auto", padding: "40px" }} >
//                 <div style={{ padding: "40px", "border": "1px solid #579681", "border-radius": "4px" }}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Enter link to the job you have applied on Linkedin</Form.Label>
//                         <Form.Control
//                             name="link"
//                             type="text"
//                             placeholder="Enter link"
//                         />
//                     </Form.Group>
//                     <Button variant="outline-success" type="submit">
//                         Submit
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     )
// }

// export default ApplicationForm