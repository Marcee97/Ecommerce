import express, { json } from 'express'
import cors from 'cors'
import pool from '../db.js'
const app = express()


app.listen(3000)
console.log('http://localhost:3000')

app.use(cors())
app.use(express.json())


app.get('/', async(req, res) => {
    const [result] = await pool.query('SELECT * FROM imagenes')
console.log([result])
    res.status(200).json(result)
})