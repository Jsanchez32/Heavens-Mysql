import {mostrar,borrar,insertar,mostrarMunicipio,mostrarId,update} from "./API.js"

const cardsContainer = document.querySelector('#cartas');
const form = document.querySelector('#formPOST');
const select = document.querySelector('#idMunicipio');


async function show(){
    cardsContainer.innerHTML = "";
    const datos = await mostrar();
    datos.forEach((dato)=>{
        const {idComuna,nombreComuna,nombreMunicipio} = dato;
        cardsContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombreComuna}</h5>
                <p class="card-text">${nombreMunicipio}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text"></p>
                <p class="card-text"></p>
                <a href="#" id="${idComuna}" class="card-link btn btn-danger eliminar">Eliminar</a>
                <a href="#" id="${idComuna}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
            </div>
        </div>
        `;
    })
}

async function agregar(e){
    e.preventDefault();
    const nombreComuna = document.querySelector('#nombreComuna').value;
    const idMunicipio = document.querySelector('#idMunicipio').value;

    const creyente = {
        nombreComuna,
        idMunicipio,
    }
    insertar(creyente);
}

async function llenarSelect(){
    const departamento = await mostrarMunicipio();
    const selectUpdate = document.querySelector('#idMunicipioUpdate')
    departamento.forEach((comuna)=>{
        const {nombreMunicipio,idMunicipio} = comuna;
        select.innerHTML+=`
            <option value="${idMunicipio}">${nombreMunicipio}</option>
        `
        selectUpdate.innerHTML+=`
            <option value="${idMunicipio}">${nombreMunicipio}</option>
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
    const idComuna = e.target.getAttribute('idUpdate');
    const datos = await mostrarId(idComuna);
    datos.forEach((dato)=>{
        const {idComuna,nombreComuna,nombreMunicipio}=dato;

        const nombre =document.querySelector('#nombreComunaUpdate');
        const comuna = document.querySelector('#idMunicipioUpdate');
        const id = document.querySelector('#idUpdate');
        console.log(comuna.value);

        nombre.value=nombreComuna;
        comuna.value=nombreMunicipio;
        id.value=idComuna
    })
}

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',actualizar);

async function actualizar(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const nombreComuna =document.querySelector('#nombreComunaUpdate').value;
    const idMunicipio = document.querySelector('#idMunicipioUpdate').value;

    const datos = {
        nombreComuna,
        idMunicipio,
    }
    console.log(datos,id);
    return update(datos,id)
}