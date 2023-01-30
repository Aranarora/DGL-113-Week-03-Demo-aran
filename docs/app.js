"use strict"

let count = 0;
let items = [];


function clearItem(){
    count = 0;
    items = [];
    const cleartheItemElement = document.getElementById('todos');
    cleartheItemElement.innerHTML = '';
   
}

function addItem() {

    console.log("add item");
    const durationElement = document.getElementById('duration');
    const duration = durationElement.value;
    console.log(duration);
    const descriptionElement = document.getElementById('description');
    const description = descriptionElement.value;
    console.log(description);

    count += 1;


    items.push(`<tr><td>${count}</td><td>${duration}</td><td>${description}</td></tr>`);

let todosElement = document.getElementById('todos');
todosElement.innerHTML = items.join('');}
