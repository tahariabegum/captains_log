const Logs = require ('../models/Log')

// const logIndex = async (req, res) => 


// app.get('/logs/new', (req, res) => {
//     res.render('New')
// })

// const logCreate = async (req, res) => {
//     console.log (req.body)
//     if (req.body.shipIsBroken === 'on') {
//         req.body.shipIsBroken = true
//     } else {
//         req.body.shipIsBroken = false
//     }
//     try {
//         const result = await Logs.create(req.body)
//     } catch (err) {
//         console.log('data error', err )
//     }
//     Log.push(req.body)
//     res.redirect('/logs')
// }