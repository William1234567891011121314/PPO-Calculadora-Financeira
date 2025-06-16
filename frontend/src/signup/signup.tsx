import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('weak');
    const [hidden, setHidden] = useState<{
        isHidden1: boolean;
        isHidden2: boolean;
        isHidden3: boolean;
    }>({
        isHidden1: true,
        isHidden2: true,
        isHidden3: true,
    });
    const handleHidden = (key: keyof typeof hidden) => {
        setHidden((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    function handleHiddenAll() {
        setHidden({
            isHidden1: true,
            isHidden2: true,
            isHidden3: true,
        });
    }
    function changePasswordStrength(password: string) {
        handleHiddenAll();
        setPassword(password);
        let points = 0;
        if (password.length >= 8) points++;
        if (/[0-9]/.test(password)) points++;
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) points++;
        if (/[^a-zA-Z0-9]/.test(password)) points++;

        if (points === 0) setStrength('weak');
        if (points >= 1) {
            setStrength('medium');
            handleHidden('isHidden1');
        }
        if (points >= 2) {
            setStrength('strong');
            handleHidden('isHidden2');
        }
        if (points === 3) {
            setStrength('very-strong');
            handleHidden('isHidden3');
        }
    }

    return (
        <>
            <div id='login-background'>
                <div id='login'>
                    <div id='login-box'>
                        <label>Nome:</label>
                        <input type="text" id='name' />
                        <label>Senha</label>
                        <input
                            type='text'
                            id='password'
                            value={password}
                            onChange={e => changePasswordStrength(e.target.value)}
                        />
                        <label id='password-strength' className={strength}>
                            {strength === 'weak' && 'Fraca'}
                            {strength === 'medium' && 'Média'}
                            {strength === 'strong' && 'Forte'}
                            {strength === 'very-strong' && 'Muito Forte'}
                        </label>
                        <div id='strength'>
                            <div id='weak'></div>
                            <div id='medium' className={hidden.isHidden1 ? 'hidden' : 'show'}></div>
                            <div id='strong' className={hidden.isHidden2 ? 'hidden' : 'show'}></div>
                            <div id='very-strong' className={hidden.isHidden3 ? 'hidden' : 'show'}></div>
                        </div>
                        <label>Confirmação de Senha</label>
                        <input type='text' id='passwordConfirmation' />
                    </div>
                    <div id='login-buttons'>
                        <Link to='/' id='exit' className='transparent'><p>Sair</p></Link>
                        <Link to='/' id='login-button' className='solid'><p>Signup</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup