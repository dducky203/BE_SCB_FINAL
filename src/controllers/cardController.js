const cardService = require('../services/cardService');
const listService = require('../services/listService');


class cardController {

    //tạo mới card vào list
    creatCardInList = async (req, res, next) => {
        try {
            const { cardTitle, describe, member, dueDate, listId } = req.body;
            //const cardCover = req.file.path;
            //  const attachment = req.file.path;
            //const cardCoverPath = cardCover.map(file => file.fullPath);
            //     const cardCoverPath = path.join(__dirname, 'uploads', cardCover[0].filename);
            //    // const attachmentPath = path.join(__dirname, 'uploads', attachment.filename);
            //   
            const { attachment, cardCover } = req.files;

            const cardCoverPath = cardCover[0].fullPath;
            const attachmentPaths = attachment.map(file => file.fullPath);

            let dataCard = { cardTitle, describe, member, dueDate, cardCover: cardCoverPath, attachment: attachmentPaths, listId };

            const card = await cardService.creatCardInList(dataCard);

            res.status(200).json({ 'msg': `Tạo thành công Card mới cho List có id: ${listId}  `, card });

        } catch (error) {
            throw error;
        }
    }

    //chỉnh sửa thông tin card trong list bất kỳ
    updateCardInList = async (req, res, next) => {
        try {
            const cardId = req.params.id;

            const checkCardId = await cardService.checkCardId(cardId);

            if (!checkCardId) {
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            } else {

                const { cardTitle, describe, dueDate } = req.body;
                let dataCard = { cardTitle, describe, dueDate };
                const result = await cardService.updateCardInList(cardId, dataCard);
                if (result) {
                    res.status(200).json({ 'msg': 'Cập nhật thông tin Card thành công !' });
                } else {
                    throw new Error('Cập nhật thông tin Card thất bại !');
                }
            }

        } catch (error) {
            throw error;
        }
    }

    //xóa 1 card trong list
    deleteCardInList = async (req, res, next) => {
        try {
            const cardId = req.params.id;
            const checkCardId = await cardService.checkCardId(cardId);

            if (!checkCardId) {
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            } else {

                const result = await cardService.deleteCardInList(cardId);
                if (result) {
                    res.status(200).json({ 'msg': 'Đã xóa thành công !' });
                }
                else {
                    throw new Error('Xóa thất bại !')
                }
            }

        } catch (error) {
            throw error;
        }
    }

    //danh sách các card trong 1 list
    getCardInList = async (req, res, next) => {
        try {
            const listId = req.params.id;
            const checkListId = await listService.checkListId(listId);

            if (!checkListId) {
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            } else {
                const getCardInList = await cardService.getCardInList(listId);
                res.status(200).json({ getCardInList });
            }

        } catch (error) {
            throw error;
        }
    }

    //xem chi tiết 1 card trong list
    detailCardInList = async (req, res, next) => {
        try {
            const cardId = req.params.id;
            const checkCardId = await cardService.checkCardId(cardId);

            if (!checkCardId) {
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            } else {
                const detailCardInList = await cardService.detailCardInList(cardId);
                res.status(200).json({ detailCardInList });
            }

        } catch (error) {
            throw error;
        }
    }


};

module.exports = new cardController();