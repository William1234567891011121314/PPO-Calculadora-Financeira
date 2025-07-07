import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

function Login() {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    return (
        <>
            <div id='login-background'>
                <div id='login'>
                    <div id='login-box'>
                        <label>Nome:</label>
                        <input type="text" id='name' onChange={e => setName(e.target.value)} />
                        <label>Senha</label>
                        <input type='text' id='password' onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div id='login-buttons'>
                        <Link to='/' id='exit' className='transparent'><p>Sair</p></Link>
                        <button onClick={async () => {alert(await connLog(password, name))}} id='login-button' className='solid'><p>Login</p></button>
                    </div>
                </div> 
            </div>
        </>
    )
}

async function connLog(password: string, name:string) {
    const req = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, password: password})
    })
    const data = await req.json()
    return data.msg
}

export default Login