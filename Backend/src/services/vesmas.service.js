const db = require('../configs/db.config');
const helper = require('../utils/helper.util');

//login untuk admin dan user
async function login(vesmas) {
    const { username, password } = vesmas;
    console.log(vesmas);
    const query = `SELECT * FROM user_account WHERE username = '${username}';`
    const result = await db.query(query);
    if(result.rowCount == 0) {
        return {message: 'username not found'};
    }
    if(await helper.comparePassword(password,result.rows[0].password)){
        return {message: 'logedin'};
    }
    return {message: 'wrong password'};
}

//registrasi akun baru
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

//mencari service record berdasarkan id (username/VIN)
async function getByVIN_serviceRecord(vesmas) {
    const { username, vin } = vesmas;
    const query = `select user_vin.username, service_record.vin, service_record.service_date, spare_part.name, service_record.total_price from service_record inner join user_vin on service_record.vin = user_vin.vin inner join "sparePart_serviceRecord" on "sparePart_serviceRecord".id_serviceRecord = service_record.id inner join spare_part on "sparePart_serviceRecord".id_sparePart = spare_part.id where user_vin.username = '${username}' and user_vin.vin = ${vin};`;
    const result = await db.query(query);
    console.log(result.rows);
    if(result.rowCount == 0) {
        return {message: 'service record not found'};
    }
    return result.rows;
}

//menampilkan kendaraan user berdasarkan username dan VIN
async function getByVIN_vehicle(vesmas) {
    const { username, vin } = vesmas;
    const query = `select user_vin.username, vehicle.vin, vehicle.brand, vehicle.name, vehicle.type from vehicle inner join user_vin on user_vin.vin = vehicle.vin where user_vin.username = '${username}' and user_vin.vin = ${vin};`;
    const result = await db.query(query);
    console.log(result.rows);
    if(result.rowCount == 0) {
        return {message: 'vehicle not found'};
    }
    return result.rows;
}

//menambahkan informasi sparepart baru oleh admin
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

//mencari spare part berdasarkan id spare part oleh admin
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

//menambahkan informasi kendaraan baru oleh admin
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

//dari informasi kendaraan yang sudah ada, bisa kita edit informasi kendaraan tertentu
//oleh admin
async function edit_sparepart(vesmas) {
    const { id, name, price} = vesmas;
    const query = `UPDATE spare_part SET name = '${name}', price = ${price} WHERE id = ${id};`;
    const result = await db.query(query);
    let message = 'Error in editing sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart edited successfully';
    }
    console.log(message);
    return {message};
}

//menghapus salah satu spare part berdasarkan id nya oleh admin
async function delete_sparepart(vesmas) {
    const { id } = vesmas;
    const query = `DELETE FROM spare_part WHERE id = ${id};`;
    const result = await db.query(query);
    let message = 'Error in deleting sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart deleted successfully';
    }
    console.log(message);
    return {message};
}

module.exports = {
    login,
    register,
    getByVIN_serviceRecord,
    getByVIN_vehicle,
    add_sparepart,
    getById_sparepart,
    add_vehicle,
    edit_sparepart,
    delete_sparepart
}