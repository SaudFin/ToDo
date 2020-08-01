// #1- get HTML input element
// #2- create a varabile for the table (to access it for rendring later)
// #3- create function to take inputs to be rendered:-
// ** store task & dueDate inputs to variables
// ** push them to the table to be rendered
let form = document.getElementById("form");
let table = document.getElementById("table");
let task = document.getElementById("task");
let dueDate = document.getElementById("dueDate");
let submit = document.getElementById("submit");
let date = new Date();
const taskInsert = () => {
  let row = table.insertRow(1);
  let cellNumber = row.insertCell(0);
  let cellTask = row.insertCell(1);
  let cellDateAdded = row.insertCell(2);
  let cellDueDate = row.insertCell(3);

  cellNumber.innerHTML = "number";
  cellTask.innerHTML = task.value;
  //  to display date in this format YYYY-MM-DD
  cellDateAdded.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  cellDueDate.innerHTML = dueDate.value;
};

submit.addEventListener("click", taskInsert);
