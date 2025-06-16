import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <>
            <div id='login-background'>
                <div id='login'>
                    <div id='login-box'>
                        <label>Nome:</label>
                        <input type="text" id='name' />
                        <label>Senha</label>
                        <input type='text' id='password' />
                    </div>
                    <div id='login-buttons'>
                        <Link to='/' id='exit' className='transparent'><p>Sair</p></Link>
                        <Link to='/' id='login-button' className='solid'><p>Login</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login