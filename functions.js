console.log("Working Fine 😊");
showTasks();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  console.log("Add Button Clicked");
  let addTxt = document.getElementById("addTxt");
  console.log(addTxt.value);

  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  tasksObj.push(addTxt.value);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  addTxt.value = "";

  console.log(tasksObj);
  showTasks();
});

function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  let html = "";
  tasksObj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Task ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteTask(this.id)" class="btn btn-primary">Delete Task</button>
                </div>
            </div>`;
  });

  let tasksEle = document.getElementById("tasks");
  if (tasksObj.length != 0) {
    tasksEle.innerHTML = html;
  } else {
    tasksEle.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteTask(index) {
  console.log("Delete Button Clicked");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  tasksObj.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  showTasks();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  // console.log(search.value);
  let inputVal = search.value.toLowerCase();

  let noteCards = document.getElementsByClassName("noteCard");
  console.log(noteCards);

  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});