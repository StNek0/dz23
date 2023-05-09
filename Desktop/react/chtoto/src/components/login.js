import { useState } from 'react'
import './login.css'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    //!Проверка
    if(userName === '')alert("You don`t enter username")
    else if(userPass < 3){
      alert("Password is invalid")
      setUserPass('')
    }
    else {
      
      console.log('Login info',{
        login: userName,
        password: userPass
      })
      //!Проверка на наличие аккаунта в локале
      const userNameM = localStorage.getItem(userName)
      if(userNameM === userPass) alert('успешно')
      else alert('неправильное имя пользователя или пароль')
      setUserName('')
      setUserPass('')
    }
  }

  return (
    <>
      <h2>Авторизация</h2>
      <form className="controlled" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(
              (event) => {
                console.log('username info',event.target.value);
                return setUserName(event.target.value)
              })}
          />
        </label>

        <label htmlFor="pass">
          <input
            type="password"
            placeholder="Enter password"
            value={userPass}
            onChange={(
              (event) => {
                console.log('password info',event.target.value);
                return setUserPass(event.target.value)
              })}
          />
        </label>

        <button type="submit">Enter account</button>
      </form >
    </>
  )

}

export default Login