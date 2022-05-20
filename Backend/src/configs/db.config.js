const {Client} = require('pg');
const db = new Client({
    user: 'proyeksbd',
    host: 'proyeksbd.postgres.database.azure.com',
    database: 'proyeksbd',
    password: 'Kelompok2',
    port: 5432,
    sslmode: 'require',
    ssl: true
});
db.connect((err) => {
    if (err) {
        console.log(err);
        }
        else {
            console.log('Connected to the database');
        }
});

module.exports = db;