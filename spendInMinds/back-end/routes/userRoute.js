// const express = require('express');
// const { loginController, registerController } = require('../controllers/userController');

// const router = express.Router();

// router.post('/login', loginController)

// router.post('/register', registerController) 

// module.exports = router;

const express = require('express');

//controller functions
const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router();

//login
router.post('/login', loginUser)

//signup
router.post('/signup', signupUser)


module.exports = router;