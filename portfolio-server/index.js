const express = require('express')
const cors = require('cors') // Cross origin

// MIDDLEWARES
const app = express()
app.use(express.json()) // built-in json conversion
app.use(cors())
app.use(express.static('build')) // loads static files (build dir)


// ROUTE HANDLER
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000 // use env ports if available
app.listen(PORT)
console.log(`Server running on port ${PORT}`)