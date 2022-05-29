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
        if(result.rows[0].admin == true) {
            return {message: 'logedin admin'};
        }else{
            return {message: 'logedin'};
        }
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
    const { vin } = vesmas;
    console.log(vin);
    const query = `select service_record.vin, service_record.service_date, spare_part.name, spare_part.price from service_record inner join "sparePart_serviceRecord" on "sparePart_serviceRecord".id_serviceRecord = service_record.id inner join spare_part on "sparePart_serviceRecord".id_sparePart = spare_part.id where service_record.vin = ${vin};`;
    const result = await db.query(query);
    let promise = new Promise((resolve, reject) => {
        for(row of result.rows) {
            var date = new Date(row['service_date']).toLocaleDateString();
            row['service_date'] = date;
            console.log(date);
        }
        resolve('done');
        // setTimeout(() => {
        //     resolve('done');
        // }, 2000);
    });
    promise.then(() => {
        console.log('done');
    });
    return result.rows;
}

//menampilkan kendaraan user berdasarkan username
async function getByVIN_vehicle(vesmas) {
    const { username } = vesmas;
    const query = `select user_vin.username, vehicle.vin, vehicle.brand, vehicle.name, vehicle.type from vehicle inner join user_vin on user_vin.vin = vehicle.vin where user_vin.username = '${username}'`;
    const result = await db.query(query);
    console.log(result.rows);
    // if(result.rowCount == 0) {
    //     return {message: 'vehicle not found'};
    // }
    return result.rows;
}

//menambahkan informasi sparepart baru oleh admin
async function add_sparepart(vesmas) {
    const { name, price} = vesmas;
    const query = `INSERT INTO spare_part (name, price) VALUES ('${name}', ${price});`;
    const result = await db.query(query);
    let message = 'Error in creating sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart created successfully';
    }
    console.log(message);
    return {message};
}

//mencari spare part berdasarkan id spare part oleh admin
async function get_sparepart() {
    const query = `SELECT * FROM spare_part;`;
    const result = await db.query(query);
    console.log(result.rows);
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
    console.log(id);
    const query = `DELETE FROM spare_part WHERE id = ${id};`;
    const result = await db.query(query);
    let message = 'Error in deleting sparepart';
    if (result.rowCount > 0) {
        message = 'sparepart deleted successfully';
    }
    console.log(message);
    return {message};
}

async function add_userVIN (vesmas) {
    const { vin, username} = vesmas;
    const query = `INSERT INTO user_vin (vin, username) VALUES (${vin}, '${username}');`;
    const result = await db.query(query);
    let message = 'Error in creating user VIN';
    if (result.rowCount > 0) {
        message = 'user VIN created successfully';
    }
    console.log(message);
    return {message};
}

async function get_vehicle (vesmas) {
    const { vin } = vesmas;
    //console.log(vesmas);
    const query = `SELECT vehicle.brand, vehicle.name, vehicle.type, vehicle.vin FROM vehicle WHERE vehicle.vin = ${vin};`;
    const result = await db.query(query);
    if(result.rowCount == 0){
        message = 'Vehicle not found, creating vehicle';
    }
    return result.rows;
}

//add service record
async function add_serviceRecord (vesmas) {
    const { vin } = vesmas;
    console.log(vesmas);
    const query = `INSERT INTO service_record (vin) VALUES (${vin}) RETURNING id;`;
    const result = await db.query(query);
    console.log(result);
    return{id: result.rows[0].id};
}

//add sparepart_serviceRecord
async function add_sparePart_serviceRecord (vesmas) {
    const { id_sparepart, id_servicerecord } = vesmas;
    console.log(vesmas);
    const query = `INSERT INTO "sparePart_serviceRecord" (id_sparepart, id_servicerecord) VALUES (${id_sparepart}, ${id_servicerecord});`;
    const result = await db.query(query);
    console.log(result);
    let message = 'Spare part and service record created';
    if(result.rowCount == 0){
        message = 'Unable to create Spare part and service record';
    }
    return {message};
}

module.exports = {
    login,
    register,
    getByVIN_serviceRecord,
    getByVIN_vehicle,
    add_sparepart,
    get_sparepart,
    add_vehicle,
    edit_sparepart,
    delete_sparepart,
    add_userVIN,
    get_vehicle,
    add_serviceRecord,
    add_sparePart_serviceRecord
}