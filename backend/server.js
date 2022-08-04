const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})