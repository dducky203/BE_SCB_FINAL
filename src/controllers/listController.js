const boardService = require("../services/boardService");
const listService = require("../services/listService");

class listController {
    //tạo mới list
    creatList = async (req, res, next) => {
        try {
            const { listTitle, location } = req.body;
            const boardId = req.params.id;
            const checkBoardId = await boardService.checkBoardId(boardId);
            
            if(!checkBoardId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{
                 const dataList = { listTitle, location , boardId};
      
                const list = await listService.creatList(dataList);
                res.status(200).json({ 'msg': `Tạo thành công List mới cho Board có id: ${boardId}  `, list });
            }
           

        } catch (error) {
            throw error;
        }
    }

    //chỉnh sửa thông tin list
    updateList = async(req, res, next) => {
        try {
            const listId = req.params.id;
            const checkListId = await listService.checkListId(listId);

            if(!checkListId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{

                const { listTitle, location } = req.body;
                let dataList =  { listTitle, location };
                const result = await listService.updateList(listId, dataList);
                if(result){
                    res.status(200).json({'msg': 'Cập nhật thông tin List thành công !'});
                }else{
                    throw new Error('Cập nhật thông tin List thất bại !');
                }
            }

        } catch (error) {
            throw error;
        }
    }

    //xóa list
    deletetList = async(req, res, next) => {
        try {
            const listId = req.params.id;
            const checkListId = await listService.checkListId(listId);

            if(!checkListId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{

                const result = await listService.deletetList(listId);
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

    //danh sách các list
    getListInBoard = async(req, res, next) => {
        try {
            const boardId = req.params.id;
            const checkBoardId = await boardService.checkBoardId(boardId);
            
            if(!checkBoardId){
                res.status(400).json({ 'msg': 'ID không tồn tại !' });
            }else{
                const getListInBoard = await listService.getListInBoard(boardId);
                res.status(200).json({getListInBoard});
            }

            

        } catch (error) {
            throw error;
        }
    }
};


module.exports = new listController();