const
    userModel = require('../models/userModel'),
    tokenize = require('../helpers/token');


// use fb id to find/create user and return encrypted user id 
async function authorizeUser (user) {
    try {

        let userId = await userModel.verifyAccount(user.fbId);
        if (!userId) {
            userId = await userModel.createAccount(user);
        }

        let token = tokenize.createToken(userId);
        return token;

    } catch (e) {
        throw e;
    }
}
    
module.exports = {
    authorizeUser
}

