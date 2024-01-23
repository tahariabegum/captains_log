const express = require ('express')
const Log = require ('./models/Log')

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

const logIndex = async (req, res) => {
    let data ; 

    try {
        data = await Log.find()
    } catch (err) {
        console.log('data error', err)
    }
    res.render('Index', {logs:data})
}

const logCreate = async (req, res) => {
    console.log (req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const result = await Log.create(req.body)
    } catch (err) {
        console.log('data error', err )
    }
    Log.push(req.body)
    res.redirect('/logs')
}

app.get('/logs/new', (req, res) => {
    res.render('New')
})

const logShow = async (req, res) => {
    const data = await Log.findById(req.params.id)
    res.render('Show', {logs:data})
}


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
    mongoConfig()
})

module.exports = {logIndex, logCreate } 