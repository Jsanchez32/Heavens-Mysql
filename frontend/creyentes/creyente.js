import {mostrar,borrar,insertar,mostrarComuna,mostrarId,update,mostrarBucaramanga,mostrarCañaveral,mostrarComuna5,mostrarSanPio,mostrarSantander} from "../creyentes/API.js"

const cardsContainer = document.querySelector('#cartas');
const form = document.querySelector('#formPOST');
const select = document.querySelector('#idBarrio');

const filtros = document.querySelector('#selectFiltro');

const selectFiltro = async()=>{
    const filtroSelect = document.querySelector('#selectFiltro').value;
    switch (filtroSelect) {
        case 'Todos':
            cardsContainer.innerHTML = "";
            const todos = await mostrar();
            todos.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreBarrio} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreBarrio}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
        case 'Bucaramanga':
            cardsContainer.innerHTML = "";
            const bucaramanga = await mostrarBucaramanga();
            bucaramanga.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreMunicipio} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreMunicipio}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
        case 'Cañaveral':
            cardsContainer.innerHTML = "";
            const cañaveral = await mostrarCañaveral();
            cañaveral.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreBarrio} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreBarrio}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
        case 'SanPio':
            cardsContainer.innerHTML = "";
            const sanPio = await mostrarSanPio();
            sanPio.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreBarrio} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreBarrio}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
        case 'Comuna5':
                    cardsContainer.innerHTML = "";
            const comuna5 = await mostrarComuna5();
            comuna5.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreComuna} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreComuna}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
        case 'Santander':
            cardsContainer.innerHTML = "";
            const santander = await mostrarSantander();
            santander.forEach((dato)=>{
                const {idCreyente,nombreCreyente,email,nroCelular,direccion,nombreDepartamento} = dato;
                cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${nombreCreyente}</h5>
                        <p class="card-text">${email}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${nroCelular}</h6>
                        <p class="card-text">${direccion}</p>
                        <p class="card-text">${nombreDepartamento}</p>
                        <a href="#" id="${idCreyente}" class="card-link btn btn-danger eliminar">Eliminar</a>
                        <a href="#" id="${idCreyente}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
                    </div>
                </div>
                `;
            })
            break;
    
        default:
            break;
    }
}

filtros.addEventListener('change',selectFiltro);

async function agregar(e){
    e.preventDefault();
    const nombreCreyente = document.querySelector('#nombreCreyente').value;
    const email = document.querySelector('#email').value;
    const nroCelular = document.querySelector('#nroCelular').value;
    const direccion = document.querySelector('#direccion').value;
    const idBarrio = document.querySelector('#idBarrio').value;

    const dato = {
        nombreCreyente,
        email,
        nroCelular,
        direccion,
        idBarrio
    }
    insertar(dato);
}

async function llenarSelect(){
    const comunas = await mostrarComuna();
    const selectUpdate = document.querySelector('#idBarrioUpdate');

    comunas.forEach((comuna)=>{
        const {nombreBarrio,idBarrio} = comuna;
        select.innerHTML+=`
            <option value="${idBarrio}">${nombreBarrio}</option>
        `
        selectUpdate.innerHTML+=`
        <option value="${idBarrio}">${nombreBarrio}</option>
    `
    })
}

cardsContainer.addEventListener('click', (e)=>{
    if (e.target.classList.contains('eliminar')){
        const id = e.target.getAttribute('id');
        borrar(id);
    }
})

form.addEventListener('submit', agregar);

document.addEventListener('DOMContentLoaded', llenarSelect);


cardsContainer.addEventListener('click',getId);

async function getId(e){
    if(e.target.classList.contains('update'));
    const idCreyente = e.target.getAttribute('idUpdate');
    const datos = await mostrarId(idCreyente);
    datos.forEach((dato)=>{
        const {idCreyente,nombreCreyente,email,nroCelular,direccion,idBarrio}=dato;

        const nombre =document.querySelector('#nombreCreyenteUpdate');
        const emailUpdate = document.querySelector('#emailUpdate');
        const nroCelularUpdate = document.querySelector('#nroCelularUpdate');
        const direccionUpdate = document.querySelector('#direccionUpdate');
        const idBarrioUpdate = document.querySelector('#idBarrioUpdate');
        const id = document.querySelector('#idUpdate');

        nombre.value=nombreCreyente;
        emailUpdate.value=email;
        nroCelularUpdate.value=nroCelular;
        direccionUpdate.value=direccion;
        idBarrioUpdate.value=idBarrio;
        id.value=idCreyente
    })
}

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',actualizar);

async function actualizar(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const nombreCreyente =document.querySelector('#nombreCreyenteUpdate').value;
    const email = document.querySelector('#emailUpdate').value;
    const nroCelular = document.querySelector('#nroCelularUpdate').value;
    const direccion = document.querySelector('#direccionUpdate').value;
    const idBarrio = document.querySelector('#idBarrioUpdate').value;

    const datos = {
        nombreCreyente,
        email,
        nroCelular,
        direccion,
        idBarrio
    }
    console.log(datos,id);
    return update(datos,id)
}