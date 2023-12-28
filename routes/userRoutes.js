const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.route('/')
        .get(userController.usersGet)
        .post(userController.createUser)
        .put(userController.updateuser)
        .delete(userController.deleteUser)
module.exports=router