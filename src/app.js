import mongoose from 'mongoose'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { loadDatabase } from './settings/database.js'
import { loadRouting } from './settings/routing.js'
import { loadServer } from './settings/server.js'
import { allowCors } from './settings/cors.js'

dotenv.config()
const port = process.env.APP_PORT
const url = process.env.APP_URL
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(allowCors)

loadDatabase(mongoose)
loadRouting(app, express)
loadServer(app, port, url)
