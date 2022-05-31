import {getConnection,sql} from "../database/conexion";

export const getDepartament = async (req,res) => {
    let pool = await getConnection();
    let departament = pool.request().query('SELECT * FROM Departamento')
    res.json(await departament)
}

export const createNewDepartament = async(req,res)=> {
    const {id,Nombre,Apellido, Genero, Nacimiento, Telefono, correo_ele, Estado_civ} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Id", sql.VarChar,id)
    .input("Nombre", sql.VarChar,Nombre)
    .input("Apellido", sql.VarChar,Apellido)
    .input("Genero",sql.VarChar,Genero)
    .input("Nacimiento",sql.VarChar,Nacimiento)
    .input("Telefono",sql.Int,Telefono)
    .input("correo_ele",sql.VarChar,correo_ele)
    .input("Estado_civ",sql.VarChar, Estado_civ)
    .query('INSERT INTO Departamento (Id,Nombre,Apellido,Genero,Nacimiento,Telefono,correo_ele,Estado_civ) VALUES (@Id,@Nombre,@Apellido,@Genero,@Nacimiento,@Telefono,@correo_ele,@Estado_civ)')
    res.json('Departamentos Creados Correctamente');
}

export const updateDepartament = async() =>{

};

export const getSchedules =async () => {
    let pool = await getConnection();
    let schedules = pool.request().query('SELECT * FROM Horario')
    res.json(await schedules)
};

export const posSchedules =async () => {
    const {Codigo,F_ingreso,Inicio,Fin} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Codigo", sql.Int,Codigo)
    .input("F_ingreso", sql.VarChar,F_ingreso)
    .input("Inicio", sql.VarChar,Inicio)
    .input("Fin",sql.VarChar,Fin)
    .query('INSERT INTO Horario (Codigo,F_ingreso,Inicio,Fin) VALUES (@Codigo,@F_ingreso,@Inicio,@Fin)')
    res.json('Horarios Creados Correctamente');
};

export const getTurnos =async () => {
    let pool = await getConnection();
    let schedules = pool.request().query('SELECT * FROM Turnos')
    res.json(await schedules)
}


export const postTurns =async () => {
    const {No_turno,Jornada} = req.body
    let pool = await getConnection();
    pool.request()
    .input("No_turno", sql.Int,No_turno)
    .input("Jornada", sql.VarChar,Jornada)
    .query('INSERT INTO Turnos (No_turno,Jornada) VALUES (@No_turno,@Jornada)')
    res.json('Turnos Creados Correctamente');
}

export const getVacations =async () => {
    let pool = await getConnection();
    let schedules = pool.request().query('SELECT * FROM Vacaciones')
    res.json(await schedules)
}

export const postVacacions = async() => {
    const {Id_vacaciones,Estodo} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Id_vacaciones", sql.Int,Id_vacaciones)
    .input("Estodo", sql.VarChar,Estodo)
    .query('INSERT INTO Vacaciones (Id_vacaciones,Estodo) VALUES (@Id_vacaciones,@Estodo)')
    res.json('Vacaciones Creados Correctamente');
}

export const getPermises =async () => {
    let pool = await getConnection();
    let schedules = pool.request().query('SELECT * FROM Permisos')
    res.json(await schedules)
}

export const postPermises = async() => {
    const {Tipo_permiso,Fecha_sal,Fecha_ent} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Tipo_permiso", sql.Int,Tipo_permiso)
    .input("Fecha_sal", sql.VarChar,Fecha_sal)
    .input("Fecha_sal", sql.VarChar,Fecha_ent)
    .query('INSERT INTO Permisos (Tipo_permiso,Fecha_sal,Fecha_ent) VALUES (@Tipo_permiso,@Fecha_sal,@Fecha_ent)')
    res.json('Vacaciones Creados Correctamente');
}

export const getAttendance =async () => {
    let pool = await getConnection();
    let schedules = pool.request().query('SELECT * FROM Ausencias')
    res.json(await schedules)
}

export const postAttendance =async () => {
    const {Codigo_ausencia,fecha_ausencia} = req.body
    let pool = await getConnection();
    pool.request()
    .input("Codigo_ausencia", sql.Int,Codigo_ausencia)
    .input("Fecha_sal", sql.VarChar,fecha_ausencia)
    .query('INSERT INTO Ausencias (Codigo_ausencia,fecha_ausencia) VALUES (@Codigo_ausencia,@fecha_ausencia)')
    res.json('Ausencias Creados Correctamente');
}

