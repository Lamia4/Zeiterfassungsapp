import React from 'react';
import "./Contact.css";
import NavBar from "../NavBar"
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';
import DisplayContact from "./DisplayContact.js";
import InputContact from "./InputContact";


const init ={
  "firstName" : "",
  "lastName" : "",
  "email" : "",
  "phone" : "",
  "address" : "",
  "description" : ""
}

function Contact() {
    let [contactInfo, setContactInfo] = React.useState(init);
    let [displayInfo, setDisplayInfo] =React.useState(false);
  
    return (
      <>
      <NavBar/>
      <div className="main">
       {displayInfo ?  <DisplayContact contactInfo = {contactInfo}/> : <InputContact setContactInfo = {setContactInfo} setDisplayInfo={setDisplayInfo} /> }
      </div>
      </>
    )
  }
  

export default Contact