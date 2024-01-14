const List = require("../models/List");


class listService {
    //tạo mới list
    creatList = async (dataList) => {
        try {
            const list = new List(dataList);
            await list.save();

            return list;

        } catch (error) {
            throw error;
        }
    }

    //chỉnh sửa thông tin list
    updateList = async (id, data) => {
        try {

            const result = await List.findByIdAndUpdate(
                { _id: id },
                {
                    listTitle: data.listTitle,
                    location: data.location
                });

            return true;

        } catch (error) {
            throw error;
        }
    }

    //xóa list
    deletetList = async (id) => {
        try {
            const result = await List.findByIdAndDelete(id);
            console.log(result);

            return true;

        } catch (error) {
            throw error;
        }
    }

    //danh sách các list trong board
    getListInBoard = async (boardId) => {
        try {
            const getListInBoard = await List.find({ boardId: boardId }).populate('boardId','-daterCeated -__v');
            return getListInBoard;

        } catch (error) {
            throw error;
        }
    }

    checkListId = async (listId) => {
        try {
            const checkListId = await List.findById(listId);
            return checkListId;

        } catch (error) {
            throw error;
        }
    }


};

module.exports = new listService();