import React from 'react'
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import "./Contact.css"



function DisplayContact({contactInfo}) {
    console.log(contactInfo);
    

    const handleSubmit = () => {
        alert("Ihre Daten wurden erfolgreich übertragen");
        <Redirect to='/'s /> 
    }



    return (
       
         <Row form className="checkDiv" >
          <h1>Your Information</h1>
            
            <br />

            <div className="info">First Name: <span>{contactInfo.firstName}</span></div>
            
    
            <div className="info">Last Name: <span>{contactInfo.lastName}</span></div>
            
            <div className="info">Email: <span>{contactInfo.email}</span></div>
            
            <div className="info">Phone: <span>{contactInfo.phone}</span></div>
           
            <div className="info">Address: <span>{contactInfo.address}</span></div>
            
            <div className="info-Beschreibung">Beschreibung:<div className="text">
                                 {contactInfo.description}</div> </div>
                                 <br />
            <Button type="submit" className="btn btnAhmet" value="Submit" color="info" onClick={handleSubmit}>Send</Button>
            

        </Row> 
            
        
    )
}

export default DisplayContact