import React from 'react';
import { Table } from "reactstrap";


function Details(props) {

  


    return (
        <div className={props.showDetails} >
          <Table borderless >
         
         
      <thead>
        <tr>
       
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job</th>
          <th>E-Mail</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>{props.clickedPerson.name}</td>
          <td> {props.clickedPerson.surname}</td>
          <td>{props.clickedPerson.job}</td>
          <td>{props.clickedPerson.mail}</td>
          <td>{props.clickedPerson.city}</td>
        </tr>
       
       
      </tbody>
    </Table>
        
        </div>
    )
}

export default Details