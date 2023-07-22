import {mostrar,borrar,insertar,mostrarDepartamento,mostrarId,update} from "./API.js"

const cardsContainer = document.querySelector('#cartas');
const form = document.querySelector('#formPOST');
const select = document.querySelector('#idDepartamento');


async function show(){
    cardsContainer.innerHTML = "";
    const datos = await mostrar();
    datos.forEach((dato)=>{
        const {idMunicipio,nombreMunicipio,nombreDepartamento} = dato;
        cardsContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombreMunicipio}</h5>
                <p class="card-text">${nombreDepartamento}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text"></p>
                <p class="card-text"></p>
                <a href="#" id="${idMunicipio}" class="card-link btn btn-danger eliminar">Eliminar</a>
                <a href="#" id="${idMunicipio}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
            </div>
        </div>
        `;
    })
}

async function agregar(e){
    e.preventDefault();
    const nombreMunicipio = document.querySelector('#nombreMunicipio').value;
    const idDepartamento = document.querySelector('#idDepartamento').value;

    const creyente = {
        nombreMunicipio,
        idDepartamento,
    }
    insertar(creyente);
}

async function llenarSelect(){
    const departamento = await mostrarDepartamento();
    const selectUpdate = document.querySelector('#idDepartamentoUpdate')
    departamento.forEach((comuna)=>{
        const {nombreDepartamento,idDepartamento} = comuna;
        select.innerHTML+=`
            <option value="${idDepartamento}">${nombreDepartamento}</option>
        `
        selectUpdate.innerHTML+=`
            <option value="${idDepartamento}">${nombreDepartamento}</option>
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
    if(e.target.classList.contains('update')){
        const idMunicipio = e.target.getAttribute('id');
        const datos = await mostrarId(idMunicipio);
        datos.forEach((dato)=>{
            const {idMunicipio,nombreMunicipio,nombreDepartamento}=dato;
    
            const nombre =document.querySelector('#nombreMunicipioUpdate');
            const comuna = document.querySelector('#idDepartamentoUpdate');
            const id = document.querySelector('#idUpdate');
    
            nombre.value=nombreMunicipio;
            comuna.value=nombreDepartamento;
            id.value=idMunicipio
            console.log(id.value);
        })
    }
}

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',actualizar);

async function actualizar(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const nombreMunicipio =document.querySelector('#nombreMunicipioUpdate').value;
    const idDepartamento = document.querySelector('#idDepartamentoUpdate').value;

    const datos = {
        nombreMunicipio,
        idDepartamento,
    }
    console.log(datos,id);
    return update(datos,id)
}