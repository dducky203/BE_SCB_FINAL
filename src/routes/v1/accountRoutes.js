const express = require('express');
const accountController = require('../../controllers/accountController');
const validateAccountData = require('../../middlewares/validateAccountData');
const router = express.Router();

router.post('/register', validateAccountData,accountController.creatAcount);
router.post('/login', validateAccountData, accountController.loginAccount);




module.exports = router;