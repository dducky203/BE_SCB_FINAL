const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/boardController');
const upload = require('../../middlewares/upload');
const verifyToken = require('../../middlewares/verifyToken');


router.post('/', verifyToken, upload, boardController.creat);
router.put('/:id', verifyToken, boardController.update);
router.delete('/:id', verifyToken, boardController.delete);
router.get('/', boardController.getAll);


module.exports = router;