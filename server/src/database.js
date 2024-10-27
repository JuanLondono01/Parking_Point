const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DBPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos', err);
        return;
    }
    console.log('Conexion a la base de datos exitosa');
});


module.exports = db;