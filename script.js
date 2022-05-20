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

let todos = [];

// Event listeners

const submitHandler = (e) => {
  e.preventDefault();
  todoText.value == "" ? (todoText.value = "Empty") : todoText.value;

  container.insertAdjacentHTML(
    "afterbegin",
    `<div draggable='true' class="todo_item border boxshadow">
  <h1>${todoText.value}</h1>
  
  <div class="options">
    <input class='checkbox' type="checkbox" />
    <button type='submit' class="delete_button">Delete</button>
  </div>
  </div>`
  );
  todoText.value = "";

  todos = [...container.children];

  todos.map((el, i, arr) => {
    el.children[1].lastElementChild.addEventListener("click", () => {
      el.remove();
    });
  });
  counter.innerHTML = `<h1> ${container.childElementCount}/${i}</h1>`;
};
let i = 0;

document.addEventListener("click", (e) => {
  let element = e.target;
  let counterz = 0;

  if (element.classList.contains("checkbox")) {
    if (element.checked) {
      i++;
    } else {
      i--;
    }
  }
  counter.innerHTML = `<h1> ${container.childElementCount}/${i}</h1>`;
});
