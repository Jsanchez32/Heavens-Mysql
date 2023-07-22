import getConnection from "../db/database.js";

const getDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query("SELECT * FROM Departamento");
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}

const addDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombreDepartamento} = req.body
        const datos = {
            nombreDepartamento
        }
        const result = await connection.query('INSERT INTO Departamento SET ?',datos)
        res.send(result);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const delDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const datos = await connection.query('DELETE FROM Departamento WHERE  idDepartamento=?',id);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const idDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const datos = await connection.query('SELECT * FROM Departamento WHERE idDepartamento=?',id);
        res.json(datos);
    } catch (error) {
       res.status(404);
       res.send({error:"No funca"}); 
    }
}

const updDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const {nombreDepartamento} = req.body;
        const datos = {nombreDepartamento};
        const result = await connection.query('UPDATE Departamento SET ? WHERE idDepartamento=?',[datos,id] );
        res.json(result);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}


export const methodsHTTP ={
    getDato,
    addDato,
    delDato,
    idDato,
    updDato
}