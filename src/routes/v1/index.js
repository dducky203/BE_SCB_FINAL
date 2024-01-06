const express = require('express');
const router = express.Router();
const accountRoutes = require('./accountRoutes');
const boardRouter = require('./boardRouter');



router.get('/status',(req, res)=>{
    res.send('Used Router');

});

router.use('/boards', boardRouter);
router.use('/account', accountRoutes)

module.exports = router;