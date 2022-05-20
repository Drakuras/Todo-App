"use strict";

// Elements
const addTodo = document.querySelector(".add_todo");
const todoItem = document.querySelector(".todo_item");
const todoText = document.querySelector(".todo_text");
const addButton = document.querySelector(".add_button");
const container = document.querySelector(".container");
let counter = document.querySelector(".counter");
const body = document.querySelector("body");
const deleteButton = document.getElementsByClassName("delete");

const clearer = document.querySelector(".clearer");
let i = 0;
let todos = [];
let arr = [];

// Event listeners

const submitHandler = (e) => {
  e.preventDefault();
  todoText.value == "" ? (todoText.value = "Empty") : todoText.value;
  arr.push(deleteButton);
  container.insertAdjacentHTML(
    "beforeend",
    `<div draggable='true' class="todo_item border boxshadow">
      <h1>${todoText.value}</h1>
  
      <div class="options">
        <input class='checkbox' type="checkbox" name='fruit' />
        <button onclick='deleteHandler()' class="delete_button"><span class="delete material-symbols-outlined">
        delete
        </span></button>
      </div>
     </div>`
  );
  todoText.value = "";

  todos = [...container.children];

  todos.map((el) => {
    arr.push(el.children[1].children[0].checked);
  });

  todos.map((el) => {
    el.children[1].lastElementChild.addEventListener("click", () => {
      el.remove();
    });
  });

  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
  checkHandler();
};

document.addEventListener("click", (e) => {
  i = document.querySelectorAll(`input[type='checkbox']:checked`).length;

  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
});

clearer.addEventListener("click", () => {
  i *= 0;
  container.innerHTML = "";
  counter.innerHTML = `<h1> ${container.childElementCount} Todo</br>${i} Completed</h1>`;
});

const deleteHandler = () => {
  i = document.querySelectorAll(`input[type='checkbox']:checked`).length;
};

const checkHandler = () => {
  document.querySelectorAll(`input[type='checkbox']`).forEach((x) => {
    x.onclick = () => {
      i = document.querySelectorAll(`input[type='checkbox']:checked`).length;
      if (x.checked) {
        x.parentElement.parentElement.style.backgroundColor = "green";
        x.parentElement.parentElement.style.transitionDuration = "300ms";
      } else {
        x.parentElement.parentElement.style.backgroundColor = "";
        x.parentElement.parentElement.style.transitionDuration = "300ms";
      }
    };
  });
};
