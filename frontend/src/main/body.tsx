import './body.css'
import '../footer/footer.tsx'
import Footer from '../footer/footer.tsx';

function Body() {
    return (
        <>        
            <div id='main'>
                <div id='content'>
                    <div id="image-box">
                        <h1 id='frontText'>Administre suas finanças com a <span id="timesNewRoman">Modus</span></h1>
                        <div id="gradient"></div>
                    </div>
                    <div id="about" className="textBox">
                        <h2>Quem somos</h2>
                        <div className='break'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem id eos itaque assumenda! Ex a atque aut. Eveniet excepturi, deserunt quo officiis totam aliquid nostrum voluptatibus fugit accusamus pariatur.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Body