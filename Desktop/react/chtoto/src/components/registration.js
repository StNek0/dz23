import { useState } from 'react'
import './login.css'
//*import users from './users'

const Registration = () => {
   const [userName, setUserName] = useState('')
   const [userPass, setUserPass] = useState('')
   const [confPass, setConfPass] = useState('')


   const handleSubmit = (event) => {
      event.preventDefault()
      //!Проверка
      if(userName === '')alert("You don`t enter username")
      else if(userPass !== confPass){
         alert("You repeat password uncorrect")
         setUserPass('')
         setConfPass('')
      }
      else if(userPass < 3){
         alert("Password is invalid")
         setUserPass('')
      }
      else {
         /* users.push({
            login: userName,
            password: userPass})
         console.log(users) */
         //!Отправка в локал, чтоб умерли все остальные неработающие способы
         localStorage.setItem(userName, userPass);
         console.log('Registration info',{
            login: userName,
            password: userPass
         })
         setUserName('')
         setUserPass('')
         setConfPass('')
      }
   }

   return (
      <>
      <h2>Регистрация</h2>
      <form className="controlled" onSubmit={handleSubmit}>
        <label htmlFor="username">
         <input
            type="text"
            placeholder="Create username"
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
            placeholder="Create password"
            value={userPass}
            onChange={(
              (event) => {
                  console.log('password info',event.target.value);
                  return setUserPass(event.target.value)
               })}
         />
        </label>
            
        <label htmlFor="verif_pass">
          <input
            type="password"
            placeholder="Confirm password"
            value={confPass}
            onChange={(
              (event) => {
                console.log('password confirmed info',event.target.value);
                return setConfPass(event.target.value)
              })}
          />
        </label>
            
        <button type="submit">Create account</button>
      </form >
      </>
   )

}

export default Registration