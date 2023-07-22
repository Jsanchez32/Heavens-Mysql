import {mostrar,borrar,insertar,mostrarComuna,mostrarId,update} from "../barrio/API.js"

const cardsContainer = document.querySelector('#cartas');
const form = document.querySelector('#formPOST');
const select = document.querySelector('#idComuna');


async function show(){
    cardsContainer.innerHTML = "";
    const datos = await mostrar();
    datos.forEach((dato)=>{
        const {idBarrio,nombreBarrio,nombreComuna} = dato;
        cardsContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombreBarrio}</h5>
                <p class="card-text">${nombreComuna}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text"></p>
                <p class="card-text"></p>
                <a href="#" id="${idBarrio}" class="card-link btn btn-danger eliminar">Eliminar</a>
                <a href="#" id="${idBarrio}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
            </div>
        </div>
        `;
    })
}

async function agregar(e){
    e.preventDefault();
    const nombreBarrio = document.querySelector('#nombreBarrio').value;
    const idComuna = document.querySelector('#idComuna').value;

    const creyente = {
        nombreBarrio,
        idComuna,
    }
    insertar(creyente);
}

async function llenarSelect(){
    const comunas = await mostrarComuna();
    const selectUpdate = document.querySelector('#idComunaUpdate')
    comunas.forEach((comuna)=>{
        const {nombreComuna,idComuna} = comuna;
        select.innerHTML+=`
            <option value="${idComuna}">${nombreComuna}</option>
        `
        selectUpdate.innerHTML+=`
            <option value="${idComuna}">${nombreComuna}</option>
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

document.addEventListener('DOMContentLoaded', show);
document.addEventListener('DOMContentLoaded', llenarSelect);


cardsContainer.addEventListener('click',getId);
async function getId(e){
    if(e.target.classList.contains('update'));
    const idBarrio = e.target.getAttribute('idUpdate');
    const datos = await mostrarId(idBarrio);
    datos.forEach((dato)=>{
        const {idBarrio,nombreBarrio,nombreComuna}=dato;

        const nombre =document.querySelector('#nombreBarrioUpdate');
        const comuna = document.querySelector('#idComunaUpdate');
        const id = document.querySelector('#idUpdate');
        console.log(comuna.value);

        nombre.value=nombreBarrio;
        comuna.value=nombreComuna;
        id.value=idBarrio
    })
}

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',actualizar);

async function actualizar(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const nombreBarrio =document.querySelector('#nombreBarrioUpdate').value;
    const idComuna = document.querySelector('#idComunaUpdate').value;

    const datos = {
        nombreBarrio,
        idComuna,
    }
    console.log(datos,id);
    return update(datos,id)
}