import React from 'react';

const AddTask = ({newTask}) => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        console.log(name, description); 
        const task = {name, description};
        newTask=task;     
       console.log(newTask);
    }
    return (
        <div>         

<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold mb-8">Add A New Task!</h3>    
    <form onSubmit={handleFormSubmit}>
    <input type="text" placeholder="Task Name" name='name' className="input input-bordered w-full max-w-xs mb-5" />
    <textarea className="textarea w-full max-w-xs textarea-bordered mb-5" name='description' placeholder="Description"></textarea>
    <button className="btn btn-wide  btn-success">Submit</button> </form>   
  </div>
</div>
        </div>
    );
};

export default AddTask;