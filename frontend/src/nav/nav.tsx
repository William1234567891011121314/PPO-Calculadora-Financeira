import './nav.css'
import { useState } from 'react'


function Nav() {
    const [isClosed, setIsClosed] = useState<{
        isClosedNav1: boolean;
        isClosedNav2: boolean;
        isClosedNav3: boolean;
    }>({
        isClosedNav1: true,
        isClosedNav2: true,
        isClosedNav3: true,
    });
    const handleClosed = (key: keyof typeof isClosed) => {
        setIsClosed((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <div className='title'>
                        <h1>Modus Invest</h1>
                    </div>
                    <div className='opbuttons'>
                        <button className='sign-up'><p>Sign Up</p></button>
                        <button className='login'><p>Login</p></button>
                    </div>
                </div>
                <div className="nav-links">
                    <div id='nav-1' className='nav-link' onMouseEnter={() => handleClosed('isClosedNav1')} onMouseLeave={() => handleClosed('isClosedNav1')}>
                        <p>Financiamentos</p>
                        <div className={`son-nav${isClosed.isClosedNav1 ? ' closed' : ''}`} id='son-nav-1'>
                            <p>IPCA</p>
                            <p>IGPM</p>
                            <p>INPC</p>
                        </div>
                    </div>
                    <div id='nav-2' className='nav-link' onMouseEnter={() => handleClosed('isClosedNav2')} onMouseLeave={() => handleClosed('isClosedNav2')}>
                        <p>investimentos</p>
                        <div className={`son-nav${isClosed.isClosedNav2 ? ' closed' : ''}`} id='son-nav-2'>
                            <p>Renda Fixa</p>
                        </div>
                    </div>
                    <div id='nav-3' className='nav-link' onMouseEnter={() => handleClosed('isClosedNav3')} onMouseLeave={() => handleClosed('isClosedNav3')}>   
                        <p>Correção Monetária</p>
                        <div className={`son-nav${isClosed.isClosedNav3 ? ' closed' : ''}`} id='son-nav-3'>
                            <p>INPC</p>
                        </div>  
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Nav}