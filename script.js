"use strict";
// Elements
const form = document.querySelector(".form_css");
const todo = document.querySelector(".todo");
const assign = document.querySelector(".assign");
const startDate = document.querySelector(".start_date");
const endDate = document.querySelector(".end_date");
const list = document.querySelector(".list");
const lists = document.querySelectorAll(".lists");
const title = document.querySelector(".title");
const check = document.querySelector(".check");
const counterElement = document.querySelector(".counter");
// Variables
let completed = 0;
let counter = 0;

// Functions

//Submit function creates a new list element by inserting the values from the form
const submitHandler = (e) => {
  e.preventDefault();
  const dates =
    startDate.value != "" && endDate.value != ""
      ? `starts on the ${startDate.value} and ends in ${endDate.value}`
      : `No date set`;
  list.insertAdjacentHTML(
    "beforeend",
    `<li class='lists border'>

        <h1>${title.value}</h1>
        <p>${todo.value}</p>
        <p> Assigned to ${assign.value}</p>
        <p><em>${dates}</em></p>
        <div class='options'>
          <input type="checkbox" name="" class="check" onclick="checkHandler(event)">
          <button onclick='deleteHandler(event)'>Delete</button>
        </div>
        
      </li>`
  );
  todo.value = title.value = assign.value = "";
  counter++;
  countFunc();
};

const checkHandler = (e) => {
  if (e.path[0].checked === true) {
    completed++;
  } else {
    completed--;
  }
  countFunc();
};

const deleteHandler = (e) => {
  console.log("clicked");
  console.log(e.path[1].outerHTML);
  e.path[1].innerHTML = "";
  e.path[1].outerHTML = "";
  counter--;
  countFunc();
};

const countFunc = () => {
  counterElement.children[1].textContent = completed;
  counterElement.children[3].textContent = counter;

  // counterElement.innerHTML = elcount;
};
countFunc();
// event listerner for checkbox
