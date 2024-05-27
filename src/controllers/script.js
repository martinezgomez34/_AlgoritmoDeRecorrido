import Contact from "../models/Contact.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")
let sea = document.getElementById("search-btn")
let min = document.getElementById("min-btn")
let max = document.getElementById("max-btn")
let tree = document.getElementById("tree-btn")

btn.addEventListener("click",()=>{
    let firstName = document.getElementById("name").value
    let lastName = document.getElementById("age").value
    let phoneNumber = document.getElementById("animalClass").value

    let contacto = new Contact(firstName,lastName,phoneNumber)
    if(bst.add(contacto)){
        Swal.fire("Animal Agregado!");
    }else
    Swal.fire("Error al agregar animal, intente de nuevo!");
})

sea.addEventListener("click",()=>{
    let searchAnimal = document.getElementById("search-btn").value;
    if (bst.search(searchAnimal)) {
        Swal.fire("Animal encontrado");
    } else {
        Swal.fire("Animal no registrado");
    }
})

min.addEventListener("click",()=>{
    let data = bst.min();
    if (data) {
        Swal.fire(`${data.value.lastName}`);
    } else {
        Swal.fire("No se registran animales");
    }
});

max.addEventListener("click",()=>{
    let data = bst.max();
    if (data) {
        Swal.fire(`${data.value.lastName}`);
    } else {
        Swal.fire("No se registran animales");
    }
});

tree.addEventListener("click",()=>{
    
})
