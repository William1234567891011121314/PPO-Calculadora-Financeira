import express from "express"
import path, {dirname} from "path"
import {fileURLToPath} from 'url'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use('/client', express.static(path.join(__dirname, 'client')))
app.get('/', (req, res) => {
    res.redirect('/client/main/index.html')
})
app.listen(port, () => {
    process.stdout.write(`Servidor iniciado na porta ${port}\n$ `)
})