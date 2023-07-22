import getConnection from "../db/database.js";

const getDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query("SELECT Barrio.idBarrio,Barrio.nombreBarrio, Comuna.nombreComuna FROM Barrio JOIN Comuna ON Barrio.idComuna = Comuna.idComuna");
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}

const addDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombreBarrio,idComuna} = req.body
        const datos = {
            nombreBarrio,idComuna
        }
        const result = await connection.query('INSERT INTO Barrio SET ?',datos)
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
        const datos = await connection.query('DELETE FROM Barrio WHERE  idBarrio=?',id);
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
        const datos = await connection.query('SELECT * FROM Barrio WHERE idBarrio=?',id);
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
        const {nombreBarrio,idComuna} = req.body;
        const datos = {nombreBarrio,idComuna};
        const result = await connection.query('UPDATE Barrio SET ? WHERE idBarrio=?',[datos,id] );
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