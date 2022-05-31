import sql from 'mssql'; 

// coneccion de la base de datos 

// RECURSOS HUMANOS CONEXION
const dbSettings = {
    user:"fazt",
    password: "faztpassword",
    server:"localhost",
    database:"RRHH",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export const getConnection = async() => {
    try {
        let pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error('error', error.message);
    }
};


// INVENTARIO CONEXION

const dbSettingsInv = {
    user:"fazt",
    password: "faztpassword",
    server:"localhost",
    database:"Inventario",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export const getConnectionInv = async() => {
    try {
        let pool = await sql.connect(dbSettingsInv)
        console.log(await pool.request().query('SELECT * FROM Precios'))
        return pool;
    } catch (error) {
        console.error('error', error.message);
    }
};


export {sql};