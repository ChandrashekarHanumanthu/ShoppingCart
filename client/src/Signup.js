import {useState}from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{name,email,password})
        .then(result => {console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='container'>
      <div className='card'>
        <h2>Register</h2>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='margin'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='margin'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='margin'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          </form>
          <p>Already Have an Account?</p>
          <Link to="/login" className='login' type="button">Login</Link>
      </div>
    </div>
  )
}

export default Signup