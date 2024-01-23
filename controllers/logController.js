const Log = require ('../models/Log')

const logIndex = async (req, res) => {
    let data ; 

    try {
        data = await Log.find()
        console.log('data', data)
    } catch (err) {
        console.log('data error', err)
    }
    res.render('Index', {logs:data})
}

const logNew = async (req, res) => {
    res.render('New')
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
    res.redirect('/logs')
}

const logSeed = async (req, res) => {
    await Log.deleteMany()
    res.redirect('/logs')
}

const logShow = async (req, res) => {
    const data = await Log.findById(req.params.id)
    res.render('Show', {logs:data})
}

const logEdit = async (req, res) => {
    const data = await Log.findById (req.params.id)
    res.render('Edit' , {logs:data})
} 


const logUpdate = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    const result = await Log.findByIdAndUpdate(req.params.id, req.body)
    res.redirect (`/logs/${req.params.id}`)
}

const logDelete = async (req, res) => {
    await Log.findByIdAndDelete(req.params.id)
    res.redirect('/logs')
}

module.exports = {
    logIndex,
    logNew,
    logCreate,
    logSeed,
    logShow,
    logEdit,
    logUpdate,
    logDelete
}