const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/boardController');
const upload = require('../../middlewares/upload');
const verifyToken = require('../../middlewares/verifyToken');
const validateBoardData = require('../../middlewares/validateBoardData');


router.post('/', upload.single('cover'), validateBoardData, boardController.creat);
router.put('/:id', verifyToken, validateBoardData, boardController.update);
router.delete('/:id', verifyToken, boardController.delete);
router.get('/', boardController.getAll);


module.exports = router;