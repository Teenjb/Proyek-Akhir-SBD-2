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

//konversi tanggal ke format YYYY-MM-DD
async function convertDate(date){
    dateConverted = await moment(date).format("YYYY-MM-DD")
    return dateConverted;
}

module.exports = {
    hashPassword,
    comparePassword,
    convertDate
}