const accountService = require("../services/accountService");
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');

class accountController {
    creatAcount = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const dataAccount = { username, password };
            //kiểm tra account đã tồn tại hay chưa
            const checkAccount = await accountService.checkUsername(username);

            if (!checkAccount) {
                const account = await accountService.creatAccount(dataAccount);
                res.status(200).json({ "msg": "Tạo tài khoản thành công !", account });
            } else {
                res.status(400).json({ "msg": "Tài khoản đã tồn tại !" });
            }

        } catch (error) {
            throw error;
        }
    }

    loginAccount = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const checkUsername = await accountService.checkUsername(username);
            const accountLogin = await accountService.loginAccount(username, password);

            if (checkUsername) {

                if (accountLogin) {
                    const token = jwt.sign({ username, password }, process.env.SECERT_KEY_JWT);
                    res.status(200).json({"msg": "Đăng nhập thành công !", token: token});
                   // res.status(200).json({ "msg": "Đăng nhập thành công !" });
                    console.log(accountLogin);
                } else {
                    res.status(500).json({ "msg": "Đăng nhập thất bại - Tài khoản hoặc mật khẩu không chính xác ! " });
                }
            } else {
                res.status(200).json({ "msg": "Tài khoản không tồn tại !" });
            }

        } catch (error) {
            throw error;
        }

    };
};


module.exports = new accountController();