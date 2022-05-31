import { getConnectionInv } from "../database/conexion";

export const getPrice = async(req,res) => {
    let pool = await getConnectionInv();
    let result = await pool.request().query('SELECT * FROM Precios');
    res.json('DATOS', result);
};

export const postPrice = async()=> {
    const {Id,Descripcion,Pr_costo,
        Pr_venta,
        Pr_mayoreo,
        Iva} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Id", sql.Int,Id)
    .input("Descripcion", sql.VarChar,Descripcion)
    .input("Pr_costo", sql.VarChar,Pr_costo)
    .input("Pr_venta", sql.VarChar,Pr_venta)
    .input("Pr_mayoreo", sql.VarChar,Pr_mayoreo)
    .input("Iva", sql.VarChar,Iva)
    .query('INSERT INTO Bodegas (Id,Descripcion,Pr_costo,Pr_venta,Pr_mayoreo,Iva) VALUES (@Id,@Descripcion,@Pr_costo,@Pr_venta,@Pr_mayoreo,@Iva)')
    res.json('Vacaciones Creados Correctamente');
};


export const getWineries = async () => {
    let pool = await getConnectionInv();
    let result = await pool.request().query('SELECT * FROM Bodegas');
    res.json('DATOS', result);
}

export const postWineries= async ()=> {
    const {Tipo_permiso,Fecha_sal,Fecha_ent} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Tipo_permiso", sql.Int,Tipo_permiso)
    .input("Fecha_sal", sql.VarChar,Fecha_sal)
    .input("Fecha_sal", sql.VarChar,Fecha_ent)
    .query('INSERT INTO Permisos (Tipo_permiso,Fecha_sal,Fecha_ent) VALUES (@Tipo_permiso,@Fecha_sal,@Fecha_ent)')
    res.json('Vacaciones Creados Correctamente');
}