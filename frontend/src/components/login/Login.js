import { useState } from 'react'
import './Login.css'
function Login() {
    const [ userName, setUsername ] = useState('')
    const [ password1, setPassword1 ] = useState('')
    const [ password2, setPassword2 ] = useState('')
    async function registerUser(e){
        e.preventDefault()
        if(password1 === password2){
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userName,
                    password: password2
                })
            })
        }else{
            console.log("passwords don't match")
        }
        
        
    }
    async function logIn(e){
        const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userName,
                    password: password2
                })
            })
    }
    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
        console.log(userName)
    }
    const handlePassword1Change = (e) => {
        setPassword1(e.target.value)
        console.log(password1)
    }
    const handlePassword2Change = (e) => {
        setPassword2(e.target.value)
        console.log(password2)
    }
    return (
        
        <div className="login-container">
            <form id="register" onSubmit={registerUser}>
                <label htmlFor="">Register</label>
                <input type="text" placeholder="username" onChange={handleUserNameChange} value={userName} />
                <input type="text" placeholder="password" onChange={handlePassword1Change}  value={password1}/>
                <input type="text" placeholder="re-type password" onChange={handlePassword2Change} value={password2}/>
                <input type="submit" className="login-btn" value="register"/>
            </form>
            <form id="login"  onSubmit={logIn}>
                <label htmlFor="">Log In</label>
                <input type="text" placeholder="username" onChange={handleUserNameChange} value={userName}/>
                <input type="text" placeholder="password" onChange={handlePassword2Change} value={password2}/>
                <input type="submit" className="login-btn" value="log in"/>
            </form>
        </div>
    )
}

export default Login
