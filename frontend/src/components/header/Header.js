import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div class="header-container">
            <header >
                <div className="logo">TODOS</div>
                <ul>
                    
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/register"><li>Sign up</li></Link>
                </ul>
            </header>
            <h1>Todo List</h1>
        </div>
    )
}

export default Header
