import express from 'express'
import dotenv from 'dotenv'

import { loadDatabase } from './settings/database.js'
import { loadRouting } from './settings/routing.js'
import { loadServer } from './settings/server.js'

dotenv.config()
const port = process.env.APP_PORT
const url = process.env.APP_URL
const app = express()

loadDatabase()
loadRouting(app, express)
loadServer(app, port, url)
