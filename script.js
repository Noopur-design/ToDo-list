let addtaskbtn = document.getElementById("add-task-btn");
let list = document.getElementById("task-list");
let newtask = document.getElementById("new-task")

addtaskbtn.addEventListener('click', addtask);

newtask.addEventListener("keypress" ,(e)=>{
if(e.key==="Enter"){
    addtask();
}
})

let addtask =()=>{
    const TaskText = newtask.value.trim();

    if(TaskText === ''){
        alert("Please Enter a Task");
        return;
    }

    const taskitem = document.createElement("li");
    taskitem.innerHTML = `<span>${TaskText}</span>
    <button class="delete-btn">Delete</button>`;

   list.appendChild(taskitem);
    newtask.value = "";

    taskitem.querySelector(".delete-btn").addEventListener("click" , ()=>{
        taskitem.remove();
    });
}


// const addTaskBtn = document.getElementById('add-task-btn');
// const newTaskInput = document.getElementById('new-task');
// const taskList = document.getElementById('task-list');


// addTaskBtn.addEventListener('click', addTask);


// newTaskInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// function addTask() {
//     const taskText = newTaskInput.value.trim();

//     if (taskText === '') {
//         alert('Please enter a task');
//         return;
//     }

//     const taskItem = document.createElement('li');
//     taskItem.innerHTML = `
//         <span>${taskText}</span>
//         <button class="delete-btn">Delete</button>
//     `;

//     taskList.appendChild(taskItem);
//     newTaskInput.value = '';

   
//     taskItem.querySelector('.delete-btn').addEventListener('click', function() {
//         taskItem.remove();
//     });
// }
