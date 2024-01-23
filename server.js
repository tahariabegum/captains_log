const express = require ('express')
const mongoConfig = require ('./config')

const app = express()

const PORT = 3000

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({extended:false}))

app.get('/logs/new', (req, res) => {
    res.render('New')
})

app.post('/logs', (req, res) => {
    res.send("received")
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
    mongoconfig()
})