import React, { useState, useEffect } from "react";

import "./ShowPersonnel.css";

import Buttons from "../Component/Buttons";
import Details from "../Component/Details";
import Employees from "../Component/Employees";
import Time from "../Component/Time";
import NavBar from "../NavBar";

function ShowPersonal() {
  const [employees,setEmployees] = useState ([
    {
      name: "Galip",
      surname: "Savut",
      job: "Test Developer",
      foto: "https://avatars.githubusercontent.com/u/61105054?v=4",
      mail: "galip@hotmail.com",
      city: "Frankfurt",
      baslaSaat: 0,
      baslaDakika: 0,
      bitisSaat: 0,
      bitisDakika: 0,
    },
    {
      name: "Ahmad",
      surname: "Hasan",
      job: "Frontend Developer",
      foto: "https://avatars.githubusercontent.com/u/61105054?v=4",
      mail: "ahmad@gmail.com",
      city: "Berlin",
      baslaSaat: 0,
      baslaDakika: 0,
      bitisSaat: 0,
      bitisDakika: 0,
    },
    {
      name: "Cüneyt",
      surname: "Celebi",
      job: "Full Stack Developer",
      foto: "https://avatars.githubusercontent.com/u/61105054?v=4",
      mail: "cüneyt@windowslive.com",
      city: "Hamburg",
      baslaSaat: 0,
      baslaDakika: 0,
      bitisSaat: 0,
      bitisDakika: 0,
    },
    {
      name: "Lamia",
      surname: "Gülsah",
      job: "Backend Developer",
      foto: "https://avatars.githubusercontent.com/u/61105054?v=4",
      mail: "lamia@hotmail.com",
      city: "Berlin",
      baslaSaat: 0,
      baslaDakika: 0,
      bitisSaat: 0,
      bitisDakika: 0,
    },
    {
      name: "Zeynep",
      surname: "Gültekin",
      job: "Full Stack Developer",
      foto: "https://avatars.githubusercontent.com/u/61105054?v=4",
      mail: "zeynep.pehlivan@gmail.com",
      city: "Dresden",
      baslaSaat: 0,
      baslaDakika: 0,
      bitisSaat: 0,
      bitisDakika: 0,
    },
  ]);

  const [showDetails, setShowDetails] = React.useState("nein");
  const [showPayment, setShowPayment] = React.useState("nein");
  const [geld, setGeld] = React.useState("");

  const [clickedPerson, setClickedPerson] = React.useState({});

  function handleEmployee(e) {
    setShowDetails("ja");
    employees.forEach((employee) => {
      if (employee.name === e.target.innerText) {
        const newEmployee = {...employee}
        setClickedPerson(newEmployee);
      }
    });
  }


  function baslatFunc() {

    const copyEmployeesBasla = [...employees]

    var d = new Date();

    copyEmployeesBasla.map((kisi, i) => {
      if (kisi.name === clickedPerson.name) {
        kisi.baslaSaat = d.getHours();
        kisi.baslaDakika=d.getMinutes()
        
        const newKisi = {...kisi}
        setClickedPerson(newKisi)

      }
    });

    setEmployees(copyEmployeesBasla)
    console.log(employees);
  }


  function bitirFunc(){


    var b = new Date();

    
    employees.map((person, i) => {
      if (person.name === clickedPerson.name) {
        person.bitisSaat = b.getHours();
        person.bitisDakika=b.getMinutes()
        const newPerson = {...person}
        setClickedPerson(newPerson);
      }
    });
    setShowPayment("ja")
    
  }


  function handleMoney(){
    const totalMinute = ((clickedPerson.bitisSaat - clickedPerson.baslaSaat)*60) + (clickedPerson.bitisDakika - clickedPerson.baslaDakika);
    const totalPayment = totalMinute * (10/60)
    
    setGeld(`${totalPayment}€`)
    
  }



  function handleNewPerson(){
    
  }






  return (
    <div>
        <NavBar/>
      <Employees handleEmployee={handleEmployee} employees={employees} />
      <div >
        <Details  showDetails={showDetails} clickedPerson={clickedPerson} employees={employees} />
        <Buttons
          baslatFunc={baslatFunc}
          bitirFunc={bitirFunc}
          clickedPerson={clickedPerson}
          setClickedPerson={setClickedPerson}
          employees={employees}
          handleMoney={handleMoney}
          showDetails={showDetails}
        />
        <Time
          clickedPerson={clickedPerson}
          setClickedPerson
          employees={employees}
          showPayment={showPayment}
          geld={geld}
          handleMoney={handleMoney}
          showDetails={showDetails}
          
        />
      </div>
    </div>
  );
}

export default ShowPersonal;