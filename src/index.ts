import express from "express"
import path, {dirname} from "path"
import {fileURLToPath} from 'url'
import { map } from './map'
import axios from 'axios'

const app = express()
const port = 3000

app.use('/client', express.static(path.join(__dirname, 'client')))
app.use(express.json())
app.get('/', (req, res) => {
    res.redirect('/client/main/index.html')
})
map(app, axios)
app.listen(port, () => {
    process.stdout.write(`Servidor iniciado na porta ${port}\n$ `)
})