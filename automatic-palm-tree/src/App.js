import React, { useState, useEffect } from "react";
function App (){
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    if (employees === null || employees.length === 0){
      fetch(`https://randomuser.me/api/?results=20&nat=us&inc=name,email,phone,id,dob,picture`)
      .then(res => res.json())
      .then(json => setEmployees(json.results )); 
    }
   
      
  });
  
  return (
    
    <table 
    id="table"
    data-toggle="table"
    class="table table-hover table-striped">
     <thead class="thead-dark">
    <tr>
    <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
        {employees.map(el => (
          <tr>
           <td>{el.name.first}</td>
            <td>{el.name.last}</td>
            <td>{el.email}</td>
             <td>{el.phone}</td>
              <td>{el.dob.age}</td>
          </tr>
        ))}
      
    </table>
  );
}

export default App;

