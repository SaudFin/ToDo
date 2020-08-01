let form = document.getElementById("form");
let table = document.getElementById("table");
let task = document.getElementById("task");
let dueDate = document.getElementById("dueDate");
let submit = document.getElementById("submit");
let doneBox = `<input type="checkbox">`;
document.getElementById("taskStatus").innerHTML = doneBox;
let date = new Date();
const taskInsert = () => {
  let row = table.insertRow(1);
  let cellNumber = row.insertCell(0);
  let cellTask = row.insertCell(1);
  let cellDateAdded = row.insertCell(2);
  let cellDueDate = row.insertCell(3);
  let cellDoneBox = row.insertCell(4);
  cellNumber.innerHTML = "number";
  cellTask.innerHTML = task.value;
  //  to display date in this format YYYY-MM-DD
  cellDateAdded.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  cellDueDate.innerHTML = dueDate.value;
  cellDoneBox.innerHTML = doneBox;
};

submit.addEventListener("click", taskInsert);
