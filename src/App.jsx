import { useState } from 'react'
import './App.css'

function App() {
const[user, setUser] = useState('')
const [password, setPassword] = useState('')

function handleUser(evento){
setUser(event.target.value)
console.log(user)
}

function handlePassword(evento){
  setPassword(evento.target.value)
}

function handleSubmit(){
  alert(`Usuário: ${user} / Senha: ${password}`)
}
console.log(user)
  return (
    <>
<header>
  <h1>Login</h1>
</header>

<main>
  <form action="" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="usuario">Usuário</label>
      <input type="text" 
      id="usuario" 
      placeholder='Digite seu usuario'
      onChange={handleUser}
      />
    </div>
    <div>
      <label htmlFor="senha">Senha</label>
      <input type="password" 
      id='senha' 
      placeholder='Digite sua senha' 
      onChange={handlePassword}
      />
    </div>
    
    <button>Entrar</button>
  </form>
</main>
    </>
  )
}

export default App
