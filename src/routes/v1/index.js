const express = require('express');
const router = express.Router();
const accountRoutes = require('./accountRoutes');
const boardRouter = require('./boardRouter');
const listRouter = require('./listRoutes');
const cardRouter = require('./cardRoutes');


router.get('/status',(req, res)=>{
    res.send('Used Router');

});

router.use('/account', accountRoutes);
router.use('/boards', boardRouter);
router.use('/lists', listRouter);
router.use('/cards', cardRouter);


module.exports = router;