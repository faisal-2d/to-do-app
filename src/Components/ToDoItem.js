import React, { useState } from "react";

const ToDoItem = ({activity, deleteTask}) => {
    const [done, setDone] = useState(false)

   
  return (
    <tr>
      <th>{activity.id}</th>
      <td className={done ? "line-through" : ""}>{activity.name}</td>
      <td>{activity.description}</td>
      <td><button onClick={() => setDone(!done)} className="btn btn-success">Done</button></td>
      <td><button onClick={() => deleteTask(activity.id)} className="btn btn-error">Delete</button></td>
    </tr>
  );
};

export default ToDoItem;
