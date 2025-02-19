export async function apiTest(app: any, axios: any){
    app.post('/server/interestcalc', async (req: any, res: any) => {
        console.log("recebido")
        const interestRate: number = req.body.interestRate
        const time: number = req.body.time
        let inflationReq: any = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json')
        let inflationLength: number = await inflationReq.data.length
        let inflation = Number(inflationReq.data[inflationLength-1].valor)
        const capital: number = Number(req.body.capital)
        let totalAmount: number = capital + (capital * ((1+(interestRate / 100))**time)) / ((1+inflation)**time)
        res.status(200).json({totalAmount: totalAmount})
    })
}