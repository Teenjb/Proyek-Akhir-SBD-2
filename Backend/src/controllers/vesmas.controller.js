const vesmas = require('../services/vesmas.service');

async function login(req, res) {
    try {
        const result = await vesmas.login(req.query);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
}

async function register(req, res) {
    try {
        console.log(req.body);
        res.json(await vesmas.register(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function getByVIN_serviceRecord(req, res) {
    try {
        console.log(req.query);
        res.json(await vesmas.getByVIN_serviceRecord(req.query));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function getByVIN_vehicle(req, res) {
    try {
        console.log(req.query);
        res.json(await vesmas.getByVIN_vehicle(req.query));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function add_sparepart(req, res) {
    try {
        res.json(await vesmas.add_sparepart(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function getById_sparepart(req, res) {
    try {
        res.json(await vesmas.getById_sparepart(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function add_vehicle(req, res) {
    try {
        res.json(await vesmas.add_vehicle(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function edit_sparepart(req,res) {
    try {
        res.json(await vesmas.edit_sparepart(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function delete_sparepart(req,res) {
    try {
        res.json(await vesmas.delete_sparepart(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function add_userVIN(req, res) {
    try {
        res.json(await vesmas.add_userVIN(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}



module.exports = {
    login,
    register,
    add_sparepart,
    getByVIN_serviceRecord,
    getByVIN_vehicle,
    getById_sparepart,
    add_vehicle,
    edit_sparepart,
    delete_sparepart,
    add_userVIN
}