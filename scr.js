let addButton = document.getElementById("add");
let fname = document.getElementById("fname");
let list = document.getElementById("ullist");

function addTask() {
    console.log("Button clicked");
    let taskText = fname.value.trim();

    if (taskText !== '') {
        let task = document.createElement('li');
        task.textContent = taskText;
        list.appendChild(task);
        fname.value = ''; 
    } else {
        console.log("Input field is empty");
    }
}

addButton.addEventListener("click", addTask);
