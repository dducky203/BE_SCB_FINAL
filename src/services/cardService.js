const Card = require("../models/Card");

class cardService {
    //tạo mới card vào list
    creatCardInList = async (dataCard) => {
        try {
            const card = new Card(dataCard);
            await card.save();

            return card;
        } catch (error) {
            throw error;
        }
    }

    //chỉnh sửa thông tin card trong list bất kỳ
    updateCardInList = async (id, dataCard) => {
        try {
            const result = await Card.findByIdAndUpdate(
                { _id: id },
                {
                    cardTitle: dataCard.cardTitle,
                    describe: dataCard.describe,
                    dueDate: dataCard.dueDate
                });
            return true;
        } catch (error) {
            throw error;
        }
    }

    //xóa 1 card trong list
    deleteCardInList = async (cardId) => {
        try {
            const result = await Card.findByIdAndDelete(cardId);
            console.log(result);
            return result;

        } catch (error) {
            throw error;
        }
    }

    //danh sách các card trong 1 list
    getCardInList = async (listId) => {
        try {
            const getCardInList = await Card.find({ listId: listId }).populate('listId', ' -listCreationDate -__v -boardId')
                .populate('member', '-password -__v')
                .select('-__v');
            return getCardInList;

        } catch (error) {
            throw error;
        }
    }

    //xem chi tiết 1 card trong list
    detailCardInList = async (cardId) => {
        try {
            const detailCardInList = await Card.findById(cardId)
            .populate('listId', ' -listCreationDate -__v -boardId')
            .populate('member','-password -__v');
            console.log(detailCardInList);
            return detailCardInList;

        } catch (error) {
            throw error;
        }
    }

    checkCardId = async (cardId) => {
        try {
            const checkCardId = await Card.findById(cardId);
            return checkCardId;

        } catch (error) {
            throw error;
        }
    }



};

module.exports = new cardService();