import { useState } from 'react'
import './Login.css'
function Login() {
    const [ userName, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
   
    async function logIn(e){
        e.preventDefault()
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })

        const data = await response.json()

        if(data.user){
            alert('Login successful')
        }
        else{
            alert('Please check your username and password')
        }
    }
    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
        console.log(userName)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    return (
        
        <div className="login-container">
            
            <form id="login"  onSubmit={logIn}>
                <label htmlFor="">Log In</label>
                <input type="text" placeholder="username" onChange={handleUserNameChange} value={userName}/>
                <input type="text" placeholder="password" onChange={handlePasswordChange} value={password}/>
                <input type="submit" className="login-btn" value="log in"/>
            </form>
        </div>
    )
}

export default Login
