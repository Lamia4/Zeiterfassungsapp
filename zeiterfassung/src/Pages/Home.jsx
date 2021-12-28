import React, { useContext } from 'react';
import "./Home.css";
import { FormGroup, Form, Button, Input, Col } from "reactstrap";
import { useState, useHistory } from "react";
import { LoggInContext } from "../Context/LoggInContext";

function Home() {

        

        const [ password, controlPassword ] = useState(false);

        // const handleLogin = () => {
        //     //hier wird bei richtigen Anmeldedaten die Info an context gesendet
        //     useContext({name: {"Galip"}, loggedin: true})
        // }

        // (Context-Komponente
        //     //hier wird der user verwaltet
        //     // bekommt info von Login/Home Komponent, durch handleLogin() Funktion
        //     //schickt info an die benötigten komponenten


        // )

        const { setUsername, setShowProfile, setPassword } = useContext(LoggInContext); 

    return (
        <div className="Container">
            <Form className="Login FormFields">
                <div className = "LogInput">

                    <FormGroup row>

                        <Col sm={10}>
                            <Input className="inputField" size="lg" type="name" name="name" id="name" placeholder="Name" onChange={ (e) => { setUsername(e.target.value)}}/>
                        </Col>

                    </FormGroup>
                
                    <FormGroup row>
       
                        <Col sm={10}>
                            <Input className="inputField" size="lg" type="password" name="pw" id="pw" placeholder="Password" onChange = { (e) => setPassword(e.target.value) } />
                        </Col>

                    </FormGroup>
                    
                    <Button  className="homeButton" sm={10} color="success" size="lg" block onClick = { () => { setShowProfile(true) }}>Log in</Button>

                </div>
    
            </Form>
        </div>
    )
}

export default Home
