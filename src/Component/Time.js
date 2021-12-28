import React from "react";
import { Table } from "reactstrap";

function Time({
  clickedPerson,
  employees,
  setClickedPerson,
  showPayment,
  handleMoney,
  geld,
  setGeld,
  showDetails
}) {
  // employees.map((man,i) => {
  //   if(man.name===clickedPerson.name){
  //     setClickedPerson(man)
  //   }
  // })

  return (
    <div className={showDetails} >
      <Table borderless >
        <thead>
          <tr>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Duty</th>
            <th>Daily Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {clickedPerson.baslaSaat < 10
                ? `0${clickedPerson.baslaSaat}`
                : clickedPerson.baslaSaat}{" "}
              :{" "}
              {clickedPerson.baslaDakika < 10
                ? `0${clickedPerson.baslaDakika}`
                : clickedPerson.baslaDakika}
            </td>
            <td>
              {clickedPerson.bitisSaat < 10
                ? `0${clickedPerson.bitisSaat}`
                : clickedPerson.bitisSaat}{" "}
              :{" "}
              {clickedPerson.bitisDakika < 10
                ? `0${clickedPerson.bitisDakika}`
                : clickedPerson.bitisDakika}
            </td>
            <td>Verkaufer</td>
            <td>{geld}</td>
          </tr>
        </tbody>
      </Table>

    <div className="buttonlar">
    <button style={{width:"100%", height: "40px"}} className={showPayment} onClick={handleMoney}>
        Daily Salary
      </button>
    </div>
      
      <p
        className={showPayment}
        style={{ fontSize: "100px", textAlign: "center" }}
      >
        {" "}
        {geld}{" "}
      </p>
    </div>
  );
}

export default Time;
