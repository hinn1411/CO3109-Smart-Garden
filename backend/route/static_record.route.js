// const express = require('express')
// const router = express.Router()
// const RecordController = require('../controllers/record.controller')


// router.get("/record", RecordController.getRecord)

// module.exports = router

const express = require('express')
const RecordController = require('../controllers/record.controller')

module.exports = app => {
    router = express.Router()
    router.get('/static', RecordController.getRecord)
    app.use('/api/record', router)
}

