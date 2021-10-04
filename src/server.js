const express = require('express')
const host = 'localhost'
const PORT = process.env.PORT ?? 5000

// load modules
const categoryModule = require('./modules/category')
const postModule = require('./modules/posts')


// middlewares
const postgres = require('./lib/postgres.js')

const app = express()

app.use( (req,res,next) => {
    res.set({'Access-Control-Allow-Origin' : '*'})
    next()
})

app.use(postgres)
app.use('/v1/category', categoryModule)
app.use('/v1/post', postModule)


app.listen(PORT, () => console.log(`server http://${host}:${PORT}`))