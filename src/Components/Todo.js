import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";

const Todo = () => {
  const [activities, setActivities] = useState([]); 
  

  useEffect(() => {
    axios.get("todo.json")
    .then((data) => setActivities(data.data));
  }, []);


const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
     
    const task = [{name, description}];
    const updateTask = [...activities, ...task];  
    setActivities(updateTask);      
   
}


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


      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-8">
      <form onSubmit={handleFormSubmit}>
          <h3 className="text-bold mb-10">Add A New Task!</h3>
    <input type="text" placeholder="Task Name" name='name' className="input input-bordered w-full max-w-xs mb-5" />
    <textarea className="textarea w-full max-w-xs textarea-bordered mb-5" name='description' placeholder="Description"></textarea>
    <button className="btn btn-wide  btn-success">Submit</button> 
    </form>


      </div>

      



    </div>
  );
};

export default Todo;
