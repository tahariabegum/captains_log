const mongoose = require ('mongoose')
const schema = mongoose.schema 
const logSchema = newSchema ({
    title: {type: String },
    entry: {type: String },
    shipIsBroken: { type: Boolean, timestamps: true }
})

const Logs = mongoose.model('logs' , logSchema)

module.exports = Logs 