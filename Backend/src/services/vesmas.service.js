const db = require('../configs/db.config');
const helper = require('../utils/helper.util');

async function login(vesmas) {
    const { username, password } = vesmas;
    const query = `SELECT * FROM user_account WHERE username = '${username}';`
    const result = await db.query(query);
    //console.log(result);
    if(result.rowCount == 0) {
        return {message: 'username not found'};
    }
    if(await helper.comparePassword(password,result.rows[0].password)){
        return result.rows;
    }
    return {message: 'wrong password'};
}

async function register(vesmas) {
    const { username, password, admin } = vesmas;
    const query = `INSERT INTO user_account (username, password, admin) VALUES ('${username}', '${await helper.hashPassword(password)}', ${admin});`;
    //console.log(query);
    const result = await db.query(query);
    //console.log(result);
    let message = 'Error in creating account';
    if (result.rowCount > 0) {
        message = 'account created successfully';
    }
    console.log(message);
    return {message};
}

async function add_sparepart(vesmas) {
    const {name, price} = vesmas;
    const query = `INSERT INTO spare_part (name, price) VALUES ('${name}', ${price});`;
    const result = await db.query(query);
    let message = 'Error in creating sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart created successfully';
    }
    console.log(message);
    return {message};
}

async function getById_sparepart(vesmas) {
    const { id } = vesmas;
    const query = `SELECT * FROM spare_part WHERE id = '${id}';`;
    const result = await db.query(query);
    console.log(result.rows);
    if(result.rowCount == 0) {
        return {message: 'sparepart not found'};
    }
    return result.rows;
}

module.exports = {
    login,
    register,
    add_sparepart,
    getById_sparepart
}