import getConnection from "../db/database.js";

const getDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query("SELECT Creyente.idCreyente, Creyente.nombreCreyente,Creyente.email,Creyente.nroCelular,Creyente.direccion,Barrio.nombreBarrio FROM Creyente JOIN Barrio ON Creyente.idBarrio = Barrio.idBarrio");
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}
const getBucaramanga = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query(`SELECT cr.nombreCreyente,cr.email,cr.nroCelular,cr.direccion,mu.nombreMunicipio
        FROM creyente cr
        JOIN barrio b ON cr.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio mu ON co.idMunicipio = mu.idMunicipio
        JOIN departamento de ON mu.idDepartamento = de.idDepartamento
        
        WHERE mu.nombreMunicipio = 'Bucaramanga'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}
const getCanaveral = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query(`SELECT cr.nombreCreyente,cr.email,cr.nroCelular,cr.direccion,b.nombreBarrio,mu.nombreMunicipio
        FROM creyente cr
        JOIN barrio b ON cr.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio mu ON co.idMunicipio = mu.idMunicipio
        JOIN departamento de ON mu.idDepartamento = de.idDepartamento
        
        WHERE b.nombreBarrio = 'Cañaveral' AND mu.nombreMunicipio='Floridablanca'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}
const getComuna5 = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query(`SELECT cr.nombreCreyente,cr.email,cr.nroCelular,cr.direccion,co.nombreComuna,mu.nombreMunicipio
        FROM creyente cr
        JOIN barrio b ON cr.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio mu ON co.idMunicipio = mu.idMunicipio
        JOIN departamento de ON mu.idDepartamento = de.idDepartamento
        
        WHERE co.nombreComuna = 'Comuna 5' AND mu.nombreMunicipio='Bucaramanga'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}
const getSanPio = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query(`SELECT cr.nombreCreyente,cr.email,cr.nroCelular,cr.direccion,b.nombreBarrio,mu.nombreMunicipio
        FROM creyente cr
        JOIN barrio b ON cr.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio mu ON co.idMunicipio = mu.idMunicipio
        JOIN departamento de ON mu.idDepartamento = de.idDepartamento
        
        WHERE b.nombreBarrio = 'San Pio' AND mu.nombreMunicipio='Bucaramanga'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}
const getSantander = async (req,res)=>{
    try {
        const connection = await getConnection();
        const datos = await connection.query(`SELECT cr.nombreCreyente,cr.email,cr.nroCelular,cr.direccion,de.nombreDepartamento
        FROM creyente cr
        JOIN barrio b ON cr.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio mu ON co.idMunicipio = mu.idMunicipio
        JOIN departamento de ON mu.idDepartamento = de.idDepartamento
        
        WHERE de.nombreDepartamento = 'Santander'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'})
    }
}





const addDato = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombreCreyente,email,nroCelular,direccion,idBarrio} = req.body
        const datos = {
            nombreCreyente,email,nroCelular,direccion,idBarrio
        }
        const result = await connection.query('INSERT INTO Creyente SET ?',datos)
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
        const datos = await connection.query('DELETE FROM Creyente WHERE  idCreyente=?',id);
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
        const datos = await connection.query('SELECT * FROM Creyente WHERE idCreyente=?',id);
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
        const {nombreCreyente,email,nroCelular,direccion,idBarrio} = req.body;
        const datos = {nombreCreyente,email,nroCelular,direccion,idBarrio};
        const result = await connection.query('UPDATE Creyente SET ? WHERE idCreyente=?',[datos,id] );
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
    updDato,
    getBucaramanga,
    getCanaveral,
    getComuna5,
    getSanPio,
    getSantander
}