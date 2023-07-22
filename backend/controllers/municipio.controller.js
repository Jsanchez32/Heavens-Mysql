import getConnection from "../db/database.js";

const getDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query("SELECT Municipio.idMunicipio,Municipio.nombreMunicipio, Departamento.nombreDepartamento FROM Municipio JOIN Departamento ON Municipio.idDepartamento = Departamento.idDepartamento");
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}

const addDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombreMunicipio,idDepartamento} = req.body
        const datos = {
            nombreMunicipio,idDepartamento
        }
        const result = await connection.query('INSERT INTO Municipio SET ?',datos)
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
        const datos = await connection.query('DELETE FROM Municipio WHERE  idMunicipio=?',id);
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
        const datos = await connection.query('SELECT * FROM Municipio WHERE idMunicipio=?',id);
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
        const {nombreMunicipio,idDepartamento} = req.body;
        const datos = {nombreMunicipio,idDepartamento};
        const result = await connection.query('UPDATE Municipio SET ? WHERE idMunicipio=?',[datos,id] );
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