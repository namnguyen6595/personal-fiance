import express from "express"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import { appRoutes } from './routes'

import { connectDb } from './controller/connection/mysql'
const app = express()

dotenv.config()
// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json())

app.use(appRoutes)
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT} `)
})