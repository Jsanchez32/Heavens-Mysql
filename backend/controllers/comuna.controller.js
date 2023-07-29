import getConnection from "../db/database.js";

const getDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query("SELECT Comuna.idComuna,Comuna.nombreComuna, Municipio.nombreMunicipio FROM Comuna JOIN Municipio ON Comuna.idMunicipio = Municipio.idMunicipio");
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}


const addDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombreComuna,idMunicipio} = req.body
        const datos = {
            nombreComuna,idMunicipio
        }
        const result = await connection.query('INSERT INTO Comuna SET ?',datos)
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
        const datos = await connection.query('DELETE FROM Comuna WHERE  idComuna=?',id);
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
        const datos = await connection.query('SELECT * FROM Comuna WHERE idComuna=?',id);
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
        const {nombreComuna,idMunicipio} = req.body;
        const datos = {nombreComuna,idMunicipio};
        const result = await connection.query('UPDATE Comuna SET ? WHERE idComuna=?',[datos,id] );
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