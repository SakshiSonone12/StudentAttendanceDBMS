import React, {useState} from 'react'
import'./style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

    
    const Login = () => {
        const [values, setValues] = useState({
            email: '',
            password: '',
        })
        const navigate = useNavigate()
        axios.defaults.withCredentials = true;
        const [error, setError] = useState('')
    
        const handleSubmit = (event) => {
            event.preventDefault();
           // Frontend Axios POST path:
            axios.post('http://localhost:3001/auth/facultylogin', values)
    
            .then(res => console.log(res))
               
            .catch(err => console.log(err));
        }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-danger'>
            
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' 
                   onChange={e => setValues({...values, email: e.target.value})}  className='form-control rounded-0' autoComplete='off'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                  onChange={e => setValues({...values, password: e.target.value})}  className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success w-100 mb-2 rounded-0'> Log in</button>
            <div className='mb-1'>
            <input type="checkbox" name="tick" id="tick" className='me-2'/>
                <label htmlFor="password"><p> Remember Me</p></label>
                
            </div>
            
        </form>
    </div>
</div>
  )
}

export default Login;