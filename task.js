export const Task = {
    taskName: null,
    taskDescription: null,
    timeStapm: null,
    priority: null,
    isCompleted: false,
    reminderSet: false,
    reminderTime: null,
    flag: null,
    sentToEmail: false,
    email: null,

    createTask: () => {
        transition();
        getUserData();
        sendUserData();
    },
    editTask: (taskName) => {

    },
    deleteTask: (taskName) => {

    },
}

function transition() {
        if (window.getComputedStyle(document.querySelector(".sidebar-right")).getPropertyValue("width") === '0px') {
            document.querySelector(".main-desktop").style.width = "50.99%"
            document.querySelector(".sidebar-right").style.width = "30%"
        } else {
            document.querySelector(".main-desktop").style.width = "80.99%"
            document.querySelector(".sidebar-right").style.width = "0%"
        };
};


// document.querySelector('button').addEventListener("click", () => {
//     const taskName = document.querySelector("#taskName").value
//     const newPara = document.createElement('p')
//     const newParaContent = newPara.innerText = taskName
//     document.querySelector(".main-desktop").appendChild = newParaContent
// })


function getUserData() {
    console.log("reading user data...")
}

function sendUserData() {
    console.log("sending user data...");
}

























/**
 * const addTask = document.querySelector("#add-task")

const newTask = (taskName) => {
    const task = document.createElement('p');
    const taskText = document.createTextNode(taskName);
    task.appendChild(taskText);
    document.getElementById("task-list").appendChild(task);
}

addTask.addEventListener("click", (e) => {
    console.log("click");
    newTask("New Task Added");
})
 */

