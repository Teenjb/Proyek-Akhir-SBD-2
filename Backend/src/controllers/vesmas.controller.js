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

async function get_sparepart(req, res) {
    try {
        res.json(await vesmas.get_sparepart());
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
        res.json(await vesmas.delete_sparepart(req.query));
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

async function get_vehicle(req,res) {
    try {
        res.json(await vesmas.get_vehicle(req.query));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function add_serviceRecord(req,res) {
    try {
        res.json(await vesmas.add_serviceRecord(req.body));
    } catch (err) {
        res.json({error: err.detail});
    }
}

async function add_sparePart_serviceRecord(req,res) {
    try {
        res.json(await vesmas.add_sparePart_serviceRecord(req.body));
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
    get_sparepart,
    add_vehicle,
    edit_sparepart,
    delete_sparepart,
    add_userVIN,
    get_vehicle,
    add_serviceRecord,
    add_sparePart_serviceRecord
}