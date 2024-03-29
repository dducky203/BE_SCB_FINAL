//require den models
const Board = require('../models/Board');

class boardService {
    //tạo mới board
    creat = async (dataBoard) => {
        try {
            //xu li
            //goi den model
            const board = new Board(dataBoard);
            await board.save();

            return board;

        } catch (error) {
            throw error;
        }
    }


    //chỉnh sửa thông tin board
    update = async (id, data) => {
        try {

            //const result = await Board.updateOne({ _id: id }, { title: data.title, cover: data.cover });
            await Board.findByIdAndUpdate(
                { _id: id },
                { title: data.title });
            return true;
        } catch (error) {
            throw error;
        }
    }

    //xóa board
    delete = async (id) => {
        try {
            const result = await Board.findByIdAndDelete(id);
            console.log(result);
            return result;


        } catch (error) {
            throw error;
        }
    }

    //danh sách các board
    getAll = async () => {
        try {
            const listBoards = await Board.find();
            return listBoards;
        } catch (error) {
            throw error;
        }
    }

    //check boadID 
    checkBoardId = async (boardId) => {
        try {
            const result = await Board.findById(boardId);
            return result;

        } catch (error) {
            throw error;
        }
    }
}



module.exports = new boardService();
