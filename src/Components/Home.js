import React from 'react';
import Todo from './Todo';

const Home = () => {
    return (
        <div>
            <h1 className='my-12 text-2xl'>Welcome to ToDo List</h1>
            <Todo></Todo>
        </div>
    );
};

export default Home;