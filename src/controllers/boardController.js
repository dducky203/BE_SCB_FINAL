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
            let dataBoard = { title, cover, };
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
            if (result) {
                res.status(200).json({ 'msg': 'Updated' });
            }
            else {
                throw new Error('Update fail !')
            }

        } catch (error) {
            throw error;
        }
    }

    //xóa board
    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await boardService.delete(id);
            if (result) {
                res.status(200).json({ 'msg': 'Deleted' });
            }
            else {
                throw new Error('Delete fail !')
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

}

module.exports = new boardController();
