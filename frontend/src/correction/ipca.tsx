import './ipca.css'

function IPCA() {
    return (
        <>
            <div id='root'>
                <div id='content'>
                    <div id='header'>
                        <p id='title'>Correção Monetária - IPCA</p>
                    </div>
                    <div id='root-content'>
                        <div id='inputs'>
                            <div>
                                <label>Valor Inicial:</label>
                                <input type='number' id='initial-value' placeholder='0,00' />
                                <label>Data Inicial:</label>
                                <input type='date' id='initial-date' />
                                <label>Data Final:</label>
                                <input type='date' id='final-date' />
                            </div>
                            <div>
                                <label>Valor final:</label>
                                <p>R$ 0,00</p>
                                <label>Inflação no período:</label>
                                <p>0%</p>
                            </div>
                        </div>
                        <div id='operations'>
                            <a id='calculate' className='transparent'><p>Sair</p></a>
                            <a id='reset' className='solid'><p>Calcular</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IPCA