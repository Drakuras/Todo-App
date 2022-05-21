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
const todoTitle = document.querySelector(".todo_title");
const mainTitle = document.querySelector(".main_title");
const addTitle = document.querySelector(".add_title");
const clearer = document.querySelector(".clearer");
let i = 0;
let todos = [];
let arr = [];

// Event listeners

todoTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTitle.click();
  }
});
const titleHandler = (e) => {
  e.preventDefault();

  mainTitle.innerHTML =
    todoTitle.value === ""
      ? `<h1>Empty Title</h1>`
      : `<h1>${todoTitle.value}</h1>`;

  todoTitle.value = "";
};

const submitHandler = (e) => {
  e.preventDefault();
  container.insertAdjacentHTML(
    "beforeend",
    `<div draggable='true' class="todo_item border boxshadow draggable">

      <h1 contenteditable='true'>${
        todoText.value === "" ? "Empty" : todoText.value
      }</h1>
  
      <div class="options">
        <input class='checkbox' type="checkbox" name='fruit' />
        <button onclick='deleteHandler()' class="delete_button"><span class="delete material-symbols-outlined">
        delete
        </span></button>
      </div>
      <div class="description">
          <p data-placeholder="Click to edit description" contenteditable="true"></p>
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

  counter.innerHTML = `<h1>Total: ${container.childElementCount}</br>Completed: ${i} </h1>`;
  checkHandler();
  draggableHandler();
};

document.addEventListener("click", (e) => {
  i = document.querySelectorAll(`input[type='checkbox']:checked`).length;

  counter.innerHTML = `<h1>Total: ${container.childElementCount}</br>Completed: ${i} </h1>`;
});

clearer.addEventListener("click", () => {
  i *= 0;
  container.innerHTML = "";
  counter.innerHTML = `<h1>Total: ${container.childElementCount}</br>Completed: ${i} </h1>`;
  mainTitle.innerHTML = `<h1>Empty Title</h1>`;
});

const deleteHandler = () => {
  i = document.querySelectorAll(`input[type='checkbox']:checked`).length;
};

const checkHandler = () => {
  document.querySelectorAll(`input[type='checkbox']`).forEach((x) => {
    x.onclick = () => {
      i = document.querySelectorAll(`input[type='checkbox']:checked`).length;
      if (x.checked) {
        x.parentElement.parentElement.classList.add("coolbackground");
        x.parentElement.parentElement.style.transitionDuration = "300ms";
      } else {
        x.parentElement.parentElement.classList.remove("coolbackground");
        x.parentElement.parentElement.style.transitionDuration = "300ms";
      }
    };
  });
};

const draggableHandler = () => {
  const draggables = document.querySelectorAll(".draggable");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
};

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      console.log(offset);

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

addButton.click();
