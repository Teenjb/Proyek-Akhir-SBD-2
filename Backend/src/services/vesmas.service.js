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

async function getById_serviceRecord(vesmas) {
    const { id } = vesmas;
    const query = `SELECT service_record.service_date, spare_part.name, service_record.total_price FROM service_record JOIN user_vin ON service_record.vin = user_vin.vin JOIN sparePart_serviceRecord" ON service_record.id = "sparePart_serviceRecord".id_servicerecord JOIN spare_part ON "sparePart_serviceRecord".id_sparepart = spare_part.id
    WHERE user_vin.vin == ${vin};`;
    const result = await db.query(query);
    console.log(result.rows);
    if(result.rowCount == 0) {
        return {message: 'sparepart not found'};
    }
    return result.rows;
}

async function add_sparepart(vesmas) {
    const { id, name, price} = vesmas;
    const query = `INSERT INTO spare_part (id, name, price) VALUES ('${id}', '${name}', ${price});`;
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

async function add_vehicle(vesmas) {
    const { vin, brand, name, type} = vesmas;
    const query = `INSERT INTO vehicle (vin, brand, name, type) VALUES (${vin}, '${brand}', '${name}', '${type}');`;
    console.log(query);
    const result = await db.query(query);
    console.log(result);
    let message = 'Error in creating vehicle';
    if (result.rowCount > 0) {
        message = 'vehicle created successfully';
    }
    console.log(message);
    return {message};
}

async function edit_sparepart(vesmas) {
    const { id, name, price} = vesmas;
    const query = `UPDATE spare_part SET name = '${name}', price = ${price} WHERE id = '${id}';`;
    const result = await db.query(query);
    let message = 'Error in editing sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart edited successfully';
    }
    console.log(message);
    return {message};
}

module.exports = {
    login,
    register,
    add_sparepart,
    getById_sparepart,
    add_vehicle,
    edit_sparepart
}