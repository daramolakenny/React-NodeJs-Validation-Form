import React from 'react'
import { useState } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/login', {email, password})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-success'>
      <div className='p-3 bg-light w-25'>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={e => setEmail((e.target.value))} placeholder='Enter your email' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Enter your password' className='form-control' />
            </div>
            <button className='btn btn-success'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
