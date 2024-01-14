const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');
const upload = require('../../middlewares/upload');
const validateCardData = require('../../middlewares/validateCardData');
const verifyToken = require('../../middlewares/verifyToken');

// upload.single('cardCover'), upload.array('attachment', 5)

router.post('/',
    upload.fields([
        { name: 'cardCover', maxCount: 1 },
        { name: 'attachment', maxCount: 5 }
    ]), cardController.creatCardInList);

router.put('/:id', verifyToken, cardController.updateCardInList);
router.delete('/:id', verifyToken, cardController.deleteCardInList);
router.get('/:id', cardController.getCardInList);
router.get('/detail/:id', cardController.detailCardInList);




module.exports = router;