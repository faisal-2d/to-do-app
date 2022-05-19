import React from "react";
import {  
    useAuthState, useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const LogIn = () => {
    const [emailUser, emailLoading, emailError] = useAuthState(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    useSignInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <form onSubmit={handleFormSubmit}>
            <h3 className="text-bold mb-10">Add A New Task!</h3>
            <input
              type="email"
              placeholder="Task Name"
              name="email"
              className="input input-bordered w-full max-w-xs mb-5"
            />
            <input
              type="password"
              placeholder="Task Name"
              name="password"
              className="input input-bordered w-full max-w-xs mb-5"
            />
            <button className="btn btn-wide  btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
