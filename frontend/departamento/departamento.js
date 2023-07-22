import {mostrar,borrar,insertar,mostrarId,update} from "../departamento/API.js"

const cardsContainer = document.querySelector('#cartas');
const form = document.querySelector('#formPOST');
const select = document.querySelector('#idComuna');


async function show(){
    cardsContainer.innerHTML = "";
    const datos = await mostrar();
    datos.forEach((dato)=>{
        const {idDepartamento,nombreDepartamento} = dato;
        cardsContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombreDepartamento}</h5>
                <p class="card-text"></p>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text"></p>
                <p class="card-text"></p>
                <a href="#" id="${idDepartamento}" class="card-link btn btn-danger eliminar">Eliminar</a>
                <a href="#" id="${idDepartamento}"  data-bs-toggle="modal" data-bs-target="#modalupdate" class="card-link btn btn-warning update">Actualizar</a>
            </div>
        </div>
        `;
    })
}

async function agregar(e){
    e.preventDefault();
    const nombreDepartamento = document.querySelector('#nombreDepartamento').value;

    const creyente = {
        nombreDepartamento,
    }
    insertar(creyente);
}


cardsContainer.addEventListener('click', (e)=>{
    if (e.target.classList.contains('eliminar')){
        const id = e.target.getAttribute('id');
        borrar(id);
    }
})

form.addEventListener('submit', agregar);

document.addEventListener('DOMContentLoaded', show);

cardsContainer.addEventListener('click',getId);
async function getId(e){
    if(e.target.classList.contains('update'));
    const idDepartamento = e.target.getAttribute('idUpdate');
    const datos = await mostrarId(idDepartamento);
    datos.forEach((dato)=>{
        const {idDepartamento,nombreDepartamento}=dato;

        const nombre =document.querySelector('#nombreDepartamentoUpdate');
        const id = document.querySelector('#idUpdate');

        nombre.value=nombreDepartamento;
        id.value=idDepartamento
    })
}

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',actualizar);

async function actualizar(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const nombreDepartamento =document.querySelector('#nombreDepartamentoUpdate').value;

    const datos = {
        nombreDepartamento,
    }
    console.log(datos,id);
    return update(datos,id)
}