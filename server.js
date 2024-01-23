const express = require ('express')

require ('dotenv').config()
const mongoConfig = require ('./config')

const app = express()

const PORT = 3000

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({extended:false}))

app.get('/' , (req,res) => {
    res.send('test')
})

app.get('/logs/new', (req, res) => {
    res.render('New')
})

app.post('/logs', (req, res) => {
    res.send(req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
    mongoConfig()
})