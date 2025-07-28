import { Link } from 'react-router-dom'
import './nav.css'
import { useState } from 'react'
import { useEffect } from 'react'

async function CheckNav() {
    const req = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/getSession')
    const data = await req.json()
    return data.name
}

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
    useEffect(() => {
        const nav: HTMLElement = document.querySelector('nav') as HTMLElement;
        if (nav) {
            const height: number = nav.offsetHeight;
            document.documentElement.style.setProperty('--nav-height', `${height}px`);
        }
    }, []);
    return (
        <>
            <nav className="nav">
                <div className='logo'>
                    <Link to='/'>
                        <h1 className='title'>Modus Invest</h1>
                    </Link>                
                    <div className='opbuttons'>
                        {!sessionStorage.name ? (
                            <>
                                <Link to='/signup' className='transparent'><p>Sign Up</p></Link>
                                <Link to='/login' className='solid'><p>Login</p></Link>
                            </>
                        ) : (
                            <>
                                <p>{CheckNav()}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="nav-links">
                    <div id='nav-1' className='nav-link' onMouseEnter={() => handleClosed('isClosedNav1')} onMouseLeave={() => handleClosed('isClosedNav1')}>
                        <p>Financiamentos</p>
                        <div className={`son-nav${isClosed.isClosedNav1 ? ' closed' : ''}`} id='son-nav-1'>
                            <p>SACRE</p>
                            <p>SAC</p>
                            <p>PRICE</p>
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
                            <p><Link to='/IPCA'>IPCA</Link></p>
                        </div>  
                    </div>
                </div>
            </nav>
        </>
    )
}
    
export {Nav}