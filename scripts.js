let taskList = [];

function addTask() {
  let tId = document.getElementById("id").value;
  if (tId !== "") {
    let exists = taskList.some((a) => a.idInput == tId); //some method
    if (!exists) {
      task = {
        idInput: document.getElementById("id").value,
        nameInput: document.getElementById("name").value,
        statusInput: document.getElementById("status").value,
        assignInput: document.getElementById("assign").value,
        dateInput: document.getElementById("date").value,
      };
      var compl;
      document.getElementsByName("iscompleted").forEach((radio) => {
        if (radio.checked) {
          compl = radio.value;
        }
      }),
        (task.compl = compl);
      taskList.push(task);
      console.log(taskList);
      alert("Data added");
    } else {
      alert("data exist");
    }
  }
}

function clrData() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("status").value = "";
  document.getElementById("assign").value = "";
  document.getElementById("date").value = "";
  document.getElementById("table").innerHTML = "";
}
let searchName = [];
function searchByName() {
  let name = document.getElementById("name").value;
  let fname = taskList.find((x) => x.nameInput == name); // find method
  // console.log("message", fname);
  if (fname != "") {
    alert("Employee name find");

    (document.getElementById("id").value = fname.idInput),
      (document.getElementById("name").value = fname.nameInput),
      (document.getElementById("status").value = fname.statusInput),
      (document.getElementById("assign").value = fname.assignInput),
      (document.getElementById("date").value = fname.dateInput),
      (document.getElementsByName("fname.compl").checked = true);
    searchName.push(fname);
    console.log(searchName);
  } else alert("Employee name not find");
}
let search = [];
function searchById() {
  let id = document.getElementById("id").value;
  let fid = taskList.find((x) => x.idInput == id);
  console.log("Messege", fid);
  if (fid != null) {
    alert("Employee id find");

    (document.getElementById("id").value = fid.idInput),
      (document.getElementById("name").value = fid.nameInput),
      (document.getElementById("status").value = fid.statusInput),
      (document.getElementById("assign").value = fid.assignInput),
      (document.getElementById("date").value = fid.dateInput),
      (document.getElementsByName("fid.compl").checked = false);

    search.push(fid);
  } else alert("Employee name not find");
}
function searchTable() {
  let headers = ["Id", "Name", "Status ", "Task Assign", "Date", "Completed"];
  let myTbl = document.getElementById("searchTable");
  let table = document.createElement("searchTable");
  let headerRow = document.createElement("tr");
  headers.forEach((headText) => {
    let head = document.createElement("th");
    let textNode = document.createTextNode(headText);
    head.appendChild(textNode);
    headerRow.appendChild(head);
  });
  table.appendChild(headerRow);

  search.forEach((empp) => {
    // function of object
    let row = document.createElement("tr");

    let id = empp.idInput;
    let cell1 = document.createElement("td");
    let tdata = document.createTextNode(id);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let namee = empp.nameInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(namee);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let status = empp.statusInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(status);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let assign = empp.assignInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(assign);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let date = empp.dateInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(date);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let completed = empp.compl;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(completed);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    table.appendChild(row);
  });
  myTbl.appendChild(table);
}
function searchNamee() {
  let headers = ["Id", "Name", "Status ", "Task Assign", "Date", "Completed"];
  let myTbl = document.getElementById("searchTable");
  let table = document.createElement("searchTable");
  let headerRow = document.createElement("tr");
  headers.forEach((headText) => {
    let head = document.createElement("th");
    let textNode = document.createTextNode(headText);
    head.appendChild(textNode);
    headerRow.appendChild(head);
  });
  table.appendChild(headerRow);

  searchName.forEach((empp) => {
    // function of object
    let row = document.createElement("tr");

    let id = empp.idInput;
    let cell1 = document.createElement("td");
    let tdata = document.createTextNode(id);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let namee = empp.nameInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(namee);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let status = empp.statusInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(status);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let assign = empp.assignInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(assign);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let date = empp.dateInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(date);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let completed = empp.compl;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(completed);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    table.appendChild(row);
  });
  myTbl.appendChild(table);
}
// for access these feild
// function updateTask() {
//   let table= document.getElementById("table");
//   let tId = document.getElementById("id").value;
//   let exists = taskList.some((a) => a.idInput == tId);
//   if(exists){
//    selectedRow = td.parentElement.parentElement; // by using parentElement it represent the corresponding row element
//   document.getElementById("id").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("name").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("status").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("assign").value = selectedRow.cells[3].innerHTML;
//   document.getElementById("date").value = selectedRow.cells[4].innerHTML;
// };
// }
// // for updating these feilds
// let selectedRow = null;
// function updateRecord() {

//   selectedRow.cells[0].innerHTML=document.getElementById("id").value,
//   selectedRow.cells[1].innerHTML=document.getElementById("name").value,
//   selectedRow.cells[2].innerHTML=document.getElementById("status").value,
//   selectedRow.cells[3].innerHTML=document.getElementById("assign").value,
//   selectedRow.cells[4].innerHTML=document.getElementById("date").value

// // if (selectedRow !== null) {
// //     let tId = document.getElementById("id").value;
// //     if (tId !== "") {
// //       let exists = taskList.some((a) => a.idInput == tId);  //some method
// //       if (exists) {
// //         task={
// //           idInput: document.getElementById("id").value,
// //           nameInput: document.getElementById("name").value,
// //           statusInput: document.getElementById("status").value,
// //           assignInput: document.getElementById("assign").value,
// //           dateInput: document.getElementById("date").value,
// //         }
// //         var compl;
// //         document.getElementsByName("iscompleted").forEach((radio) => {
// //           if (radio.checked) {
// //             compl = radio.value;
// //           }
// //         }),
// //           (task.compl = compl);
// //         taskList.push(task);
// //       } else {
// //         alert("data not exist");
// //       }
// //     }
// //   }

// }

function showTask() {
  // debugger
  let headers = ["Id", "Name", "Status ", "Task Assign", "Date", "Completed"];
  let myTbl = document.getElementById("table");
  let table = document.createElement("table");
  let headerRow = document.createElement("tr");
  headers.forEach((headText) => {
    let head = document.createElement("th");
    let textNode = document.createTextNode(headText);
    head.appendChild(textNode);
    headerRow.appendChild(head);
  });
  table.appendChild(headerRow);

  taskList.forEach((empp) => {        //forEach method 
    // function of object
    let row = document.createElement("tr");

    let id = empp.idInput;
    let cell1 = document.createElement("td");
    let tdata = document.createTextNode(id);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let namee = empp.nameInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(namee);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let status = empp.statusInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(status);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let assign = empp.assignInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(assign);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let date = empp.dateInput;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(date);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    let completed = empp.compl;
    cell1 = document.createElement("td");
    tdata = document.createTextNode(completed);

    cell1.appendChild(tdata);
    row.appendChild(cell1);

    table.appendChild(row);
  });
  myTbl.appendChild(table);
}

function deleteTask() {
  debugger;
  let id = document.getElementById("id").value;
  let row = taskList.filter((x) => x.idInput == id); // filter method
  console.log("Messege", row);

  alert("Employee id find");
  removedEl = taskList.splice(row, 1);
  console.log(taskList);
}

function updateTask() {
  debugger;
  let id = document.getElementById("id").value;
  let x = taskList.find((obj) => obj.idInput == id);  //find method
  {
    (x.idInput = document.getElementById("id").value),
      (x.nameInput = document.getElementById("name").value),
      (x.statusInput = document.getElementById("status").value),
      (x.assignInput = document.getElementById("assign").value),
      (x.dateInput = document.getElementById("date").value);
  }
  console.log("data updated", x);
}
