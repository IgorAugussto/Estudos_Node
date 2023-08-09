const router = require('express').Router()
const UserController = require('../controllers/UserContoller')

router.post('/register', UserController.register)

module.exports = router