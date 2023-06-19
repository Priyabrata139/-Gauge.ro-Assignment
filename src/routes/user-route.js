const express = require('express');
const { UserController } = require('../controllers');


const router = express.Router();



// GET: api/users
router.get('/',UserController.getAllUsers);
//GET: api/users/:id
router.get('/:id',UserController.getUser);
module.exports=router;

