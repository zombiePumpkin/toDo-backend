const express = require('express')
// const mongoose = require('mongoose')
const dotenv = require('dotenv')

const { loadDatabase } = require('./settings/database')
const { loadRouting } = require('./settings/routing')
const { loadServer } = require('./settings/server')

dotenv.config()
const port = process.env.APP_PORT
const url = process.env.APP_URL
const app = express()

loadDatabase()
loadRouting(app, express)
loadServer(app, port, url)
