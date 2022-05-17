// Elements
const form = document.querySelector(".form_css");
const todo = document.querySelector(".todo");
const assign = document.querySelector(".assign");
const startDate = document.querySelector(".start_date");
const endDate = document.querySelector(".end_date");
const list = document.querySelector(".list");

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
    `<li class='lists'>

        <h1>${todo.value}</h1>
        <p> Assigned to ${assign.value}</p>
        <p><em>${dates}</em></p>
        
      </li>`
  );
  todo.value = "";
};
