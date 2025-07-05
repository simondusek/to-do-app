import { Task } from "../task.js"

const today = new Date();
const date_options = { 
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric' 
};
const formattedDate = today.toLocaleDateString('en-US', date_options);
let h2_maindesktop = document.querySelector("#h2_maindesktop");
h2_maindesktop.textContent = formattedDate;

document.querySelector("#add-task").addEventListener("click", Task.createTask)
