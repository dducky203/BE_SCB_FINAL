const Account = require("../models/Account");

class accountService {

    checkUsername = async (username)=>{
        try {
            const checkUsername = await Account.findOne({username});
            return checkUsername;
        } catch (error) {
            throw error;
        }
    }

    creatAccount = async (dataAccount) => {
        try {
            const account = new Account(dataAccount);
            await account.save();

            return account;
        } catch (error) {
            throw error;
        }
    }

    loginAccount = async(username, password)=>{
        try {
            const accountLogin = await Account.findOne({username: username, password: password});
            return accountLogin;
            
        } catch (error) {
            throw error;
            
        }
    };
};

module.exports = new accountService();