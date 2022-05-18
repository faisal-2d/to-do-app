import React from "react";

const ToDoItem = ({index, activity}) => {
  return (
    <tr>
      <th>{index+1}</th>
      <td>{activity.name}</td>
      <td>{activity.description}</td>
      <td><button className="btn btn-success">Done</button></td>
      <td><button className="btn btn-error">Delete</button></td>
    </tr>
  );
};

export default ToDoItem;
