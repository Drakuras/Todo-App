"use strict";

// Elements
const addTodo = document.querySelector(".add_todo");
const todoItem = document.querySelector(".todo_item");
const todoText = document.querySelector(".todo_text");
const addButton = document.querySelector(".add_button");
const container = document.querySelector(".container");
let counter = document.querySelector(".counter");
const body = document.querySelector("body");
const deleteButton = document.querySelector(".delete_button");
const check = document.getElementsByClassName("checkbox");
const clearer = document.querySelector(".clearer");
let i = 0;
let todos = [];

// Event listeners

const submitHandler = (e) => {
  e.preventDefault();
  todoText.value == "" ? (todoText.value = "Empty") : todoText.value;

  container.insertAdjacentHTML(
    "beforeend",
    `<div draggable='true' class="todo_item border boxshadow">
  <h1>${todoText.value}</h1>
  
  <div class="options">
    <input class='checkbox' type="checkbox" />
    <button type='submit' class="delete_button"><span class="delete material-symbols-outlined">
    delete
    </span></button>
  </div>
  </div>`
  );
  todoText.value = "";

  todos = [...container.children];

  todos.map((el) => {
    el.children[1].lastElementChild.addEventListener("click", () => {
      el.remove();
    });
  });

  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
};
let isItChecked = "d";
document.addEventListener("click", (e) => {
  let element = e.target;
  let del = element.classList.contains("delete");
  let ch = element.classList.contains("checkbox");

  if (ch) {
    if (element.checked === true) {
      e.path[2].style.backgroundColor = "green";
      e.path[2].style.transitionDuration = "200ms";
      isItChecked = true;
      i++;
    } else if (element.checked === false) {
      e.path[2].style.backgroundColor = "black";
      e.path[2].style.transitionDuration = "200ms";
      i--;
      isItChecked = false;
    }
  } else if (del) {
    if (isItChecked === true) {
      i--;
    }
  }
  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
});

clearer.addEventListener("click", () => {
  i *= 0;
  container.innerHTML = "";
  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
});
