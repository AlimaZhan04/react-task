import React from "react";

const Section = (props) => {
  console.log(props);
  return (
    <div>
      <table border={2}>
        <tr>
          <th>name</th>
          <th>LastName</th>
          <th>age</th>
          <th>Id</th>
        </tr>

        {props.users.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
