const express = require ('express')
const app = express()


const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({extended:false}))

app.get('/logs/new', (req, res) => {
    res.render('New')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})