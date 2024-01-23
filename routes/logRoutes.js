const logController = require ('../controllers/logController')

const express = require ('express')

const router = express.Router()

router.get('/', logController.logIndex)

router.get('/new' , logController.logNew)

router.get ('/seed' , logController.logSeed)

router.post('/', logController.logCreate )

router.get('/:id' , logController.logShow)

router.get('/:id/edit', logController.logEdit)

router.put('/:id' , logController.logUpdate)

router.delete('/:id' , logController.logDelete)

module.exports = router