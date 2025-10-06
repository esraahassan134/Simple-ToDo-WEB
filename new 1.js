let addBtn = document.querySelector("#addBtn");
let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });

    taskList.appendChild(li);
    taskInput.value = "";   }
});
