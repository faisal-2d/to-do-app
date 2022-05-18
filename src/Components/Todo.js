import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";

const Todo = () => {
  const [activities, setActivities] = useState([]);
  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    axios.get("todo.json")
    .then((data) => setActivities(data.data));
  }, []);

//   const addTask = () =>{   
//     console.log("I am adding");
//   }

  return (
    <div>
      <h3>This is ToDo : {activities.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-3/4 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>ToDo List</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {activities?.map((activity, index) => (
              <ToDoItem key={index} index={index} activity={activity}></ToDoItem>
            ))}
          </tbody>
        </table>
      </div>

      <label htmlFor="my-modal-3" className="btn btn-primary btn-wide my-12">Add New Task</label>
      <AddTask addTask={setNewTask}></AddTask>



    </div>
  );
};

export default Todo;
