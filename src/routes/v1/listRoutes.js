const express = require('express');
const router = express.Router();
const listController = require('../../controllers/listController');
const verifyToken = require('../../middlewares/verifyToken');
const validateListData = require('../../middlewares/validateListData');


router.post('/:id', validateListData, listController.creatList);
router.put('/:id', verifyToken, listController.updateList);
router.delete('/:id', verifyToken, listController.deletetList);
router.get('/:id', listController.getListInBoard);



module.exports = router;