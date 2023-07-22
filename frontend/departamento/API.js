const url = "http://localhost:5000/api/departamento";

export const mostrar = async ()=>{
    try {
        const respuesta = await fetch(url);
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
