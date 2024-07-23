import { useState, useEffect } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("tokenId")
        if (token) {
            navigate('/', { replace: true })
        }
    }, [navigate])

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data.message === "Success") {
                    console.log()
                    localStorage.setItem('userId', result.data.user._id)
                    localStorage.setItem('tokenId', result.data.user.token)
                    navigate('/', { replace: true })
                } else {
                    setError(result.data.message)
                }
            })
            .catch(err => {
                console.error(err);
                setError("An error occurred. Please try again.")
            });
    };

    return (
        <div className='container'>
            <div className='card'>
                <h2>Login</h2>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='margin'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='margin'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>If you don't have an Account? Create One</p>
                <Link to="/signup" className='login' type="button">Signup</Link>
            </div>
        </div>
    )
}

export default Login