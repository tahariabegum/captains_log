require ('dotenv').config()

const express = require ('express')
const Log = require ('./models/Log')
const methodOverride = require ('method-override')

const mongoConfig = require ('./config')

const app = express()

const PORT = 3000

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

const logRoutes = require('./routes/logRoutes')

app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))
app.use('/logs',logRoutes)


app.get('/' , (req,res) => {
    res.send('<h1><a href="/logs">Go to  Captain logs</a></h1>')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
    mongoConfig()
})
