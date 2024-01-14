//require den service
const boardService = require('../services/boardService');

class boardController {
    //tạo mới board
    creat = async (req, res, next) => {
        try {

            const { title } = req.body;
            // Đường dẫn file đã upload
            const cover = req.file.path;
            //goi den tang service
            let dataBoard = { title, cover };
            const board = await boardService.creat(dataBoard);

            res.status(200).json({"msg": "Tạo mới Board thành công !", board });

        } catch (error) {
            throw error;
        }
    }

    //chỉnh sửa thông tin board
    update = async (req, res, next) => {
        try {
            const { title } = req.body;
            const { id } = req.params;
            let data = { title };
            const result = await boardService.update(id, data);
            let checkBoardId = await boardService.checkBoardId(id);

            if(!checkBoardId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{
                if (result) {
                    res.status(200).json({ 'msg': 'Cập nhật thông tin Board thành công !' });
                }
                else {
                    throw new Error('Cập nhật thông tin Board thất bại!')
                }
            }

            

        } catch (error) {
            throw error;
        }
    }

    //xóa board
    delete = async (req, res, next) => {
        try {
            const  {id} = req.params;
            let checkBoardId = await boardService.checkBoardId(id);
           
            if(!checkBoardId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{

                const result = await boardService.delete(id);
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

    //danh sách các board
    getAll = async (req, res, next) => {
        try {
            
            const listBoards = await boardService.getAll();
            res.status(200).json({ listBoards });

        } catch (error) {
            throw error;
        }
    }

    //check boadID 
 /*   checkBoardId = async (req, res, next) => {
        try {
            const boardId = req.params.id;

            const result = await boardService.checkBoardId(boardId);
            if(!result){
                res.status(404).json({'msg': 'ID không tồn tại !'});
            }
            
        } catch (error) {
            throw error;
        }
    }

     */


}

module.exports = new boardController();
