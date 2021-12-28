import React from "react";
import { ListGroup, ListGroupItem, Button, InputGroup, Input, InputGroupAddon } from "reactstrap";

function Employees({ handleEmployee, employees, handleNewPerson }) {





  return (
    <div className="employeeList border border-dark rounded  "  >
            <InputGroup>
         <Input  placeholder="Name.." /* onChange={inputValue}*/ /> 
        <InputGroupAddon addonType="append">
          <Button onClick={handleNewPerson} color="success">New Person</Button>
        </InputGroupAddon>
      </InputGroup>
      {employees.map((employee, i) => {
        return (
          <div>
        
            <ListGroup>
              <ListGroupItem
                onClick={handleEmployee}
                key={i}
               
              >
                {employee.name}
              </ListGroupItem>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;
