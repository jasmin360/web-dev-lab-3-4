var tasks = [];

function addTask() {
    var input = document.getElementById("task-input");

    if (input.value === "") {
        return;
    }

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    showTasks();
}

function showTasks() {
    var list = document.getElementById("task-list");
    var i;

    list.textContent = "";

    for (i = 0; i < tasks.length; i++) {
        var item = document.createElement("li");
        var checkbox = document.createElement("input");
        var text = document.createElement("span");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;
        checkbox.setAttribute("data-index", i);
        checkbox.onchange = updateTask;

        text.textContent = tasks[i].text;
        item.appendChild(checkbox);
        item.appendChild(text);
        list.appendChild(item);
    }
}

function updateTask() {
    var index = this.getAttribute("data-index");

    tasks[index].completed = this.checked;
    showTasks();
}

document.getElementById("add-button").addEventListener("click", addTask);
document.getElementById("clear-button").addEventListener("click", function() {
    tasks = [];
    showTasks();
});
