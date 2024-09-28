import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import classes from './login.module.css'
import img from '../../assets/womaneating2.jpg'
import { login } from '../../redux/authSlice'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("") // 더 구체적인 오류 메시지를 위한 상태
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setErrorMessage("Email and password are required!")
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }

    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) { // 로그인 실패 시
        const message = await res.text() // 서버에서 보낸 메시지 읽기
        setErrorMessage(message || "Failed to log in. Please check your credentials.")
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
        return
      }

      const data = await res.json()
      dispatch(login(data)) // {userInfo, token}
      navigate("/")
      
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.")
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg} alt="Login background" />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input 
              type="email" 
              placeholder='Type email' 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              required
            />
            <input 
              type="password" 
              placeholder='Type password' 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              required
            />
            <button className={classes.submitBtn} type="submit">Login</button>
            
          </form>
          {
            error && <div className={classes.errorMessage}>
              {errorMessage}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
