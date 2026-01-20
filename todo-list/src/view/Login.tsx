

import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'


export interface List {
  id: string,
  name: string
}

function Login() {
 const navigate = useNavigate()
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')


  const onHandleClick = () => {
    if(user && password === 'admin') {

        navigate("/todolist")
        clearLogin()
    } else {
     setError('asd')
    }
  }

  const clearLogin = () => {
    setPassword('')
    setUser('')
  }


  return (
    <>
          <section className='section-main-login'>
            <section className='section-form-login'>
           <input onChange={(e) =>setUser(e.target.value) } value={user} className='input-login' type='text' placeholder='Digite seu login' /> 
           <input  onChange={(e) =>setPassword(e.target.value) } value={password} className='input-login' type='text' placeholder='Digite sua senha' />
          {error  &&  <span>Senha e/ou usuario errado</span>}
            <button onClick={onHandleClick} className='input-button' type='submit'>Login</button>
            </section>
          </section>


    </>
  )
}

export default Login