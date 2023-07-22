const url = "http://localhost:5000/api/creyente";
const urlBucaramanga = "http://localhost:5000/api/creyente/bucaramanga";
const urlCañaveral = "http://localhost:5000/api/creyente/canaveral";
const urlComuna5 = "http://localhost:5000/api/creyente/comuna5";
const urlSantander = "http://localhost:5000/api/creyente/santander";
const urlSanPio = "http://localhost:5000/api/creyente/sanPio";
const urlBarrio = "http://localhost:5000/api/barrio"

export const mostrar = async ()=>{
    try {
        const respuesta = await fetch(url);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
export const mostrarBucaramanga = async ()=>{
    try {
        const respuesta = await fetch(urlBucaramanga);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
export const mostrarCañaveral = async ()=>{
    try {
        const respuesta = await fetch(urlCañaveral);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
export const mostrarComuna5 = async ()=>{
    try {
        const respuesta = await fetch(urlComuna5);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
export const mostrarSanPio = async ()=>{
    try {
        const respuesta = await fetch(urlSanPio);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
export const mostrarSantander = async ()=>{
    try {
        const respuesta = await fetch(urlSantander);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const mostrarComuna = async ()=>{
    try {
        const respuesta = await fetch(urlBarrio);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const mostrarId = async (id)=>{
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const datos = respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const insertar = async (dato)=>{
    try {
        await fetch(`${url}`,{
            method : "POST",
            body : JSON.stringify(dato),
            headers : {
                'Content-Type':'application/json'
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const borrar = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method : "DELETE"
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const update = async (actualizar,id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'put',
            body:JSON.stringify(actualizar),
            headers:{'Content-Type':'application/json'}
        })
        window.location.href="index.html";

    } catch (error) {
        console.log(error);
    }
}
