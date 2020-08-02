let form = document.getElementById("form");
let table = document.getElementById("table");
let task = document.getElementById("task");
let dueDate = document.getElementById("dueDate");
let submit = document.getElementById("submit");
let doneBox = `<input type="checkbox">`;
let date = new Date();
let dltButton = `<input onclick=taskDelete() type="checkbox">`;
const taskInsert = () => {
  // the IF statement is to ensure that the user fill the the info about a task.
  if (task.value && dueDate.value) {
    //   the variables below might need to be rewritten in more efficent way.
    let row = table.insertRow(1);
    let cellNumber = row.insertCell(0);
    let cellTask = row.insertCell(1);
    let cellDateAdded = row.insertCell(2);
    let cellDueDate = row.insertCell(3);
    let cellDoneBox = row.insertCell(4);
    let cellDelete = row.insertCell(5);
    cellNumber.innerHTML = "number";
    cellTask.innerHTML = task.value;
    //  to display date in this format YYYY-MM-DD
    cellDateAdded.innerHTML = `${date.getFullYear()}-${date.getMonth()}`;
    cellDueDate.innerHTML = dueDate.value;
    cellDoneBox.innerHTML = doneBox;
    cellDelete.innerHTML = dltButton;
  } else {
    alert("please fill the required");
  }
};
// this function to delete a row(task)
const taskDelete = () => {
  //  to access the table data element from the delete button
  let td = event.target.parentNode;
  //  to access the whole row
  let tr = td.parentNode;
  //  access the parent of the whole row then access its child and delete it **might need some changes**
  tr.parentNode.removeChild(tr);
};
submit.addEventListener("click", taskInsert);
