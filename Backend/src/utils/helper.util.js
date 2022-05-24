const bcrypt = require('bcrypt');
const moment = require('moment');

async function hashPassword(password) {
    hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
    if(await bcrypt.compare(password, hashedPassword)){
        return true;
    }
    return false;
}


module.exports = {
    hashPassword,
    comparePassword
}