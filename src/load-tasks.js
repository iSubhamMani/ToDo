export default function loadTasks(){
    const taskContainer = document.querySelector('.task-container');
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key));

        taskContainer.appendChild(addCardToDOM(task, key));
    }
}

function addCardToDOM(task, key){
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const taskTick = document.createElement('span');
    taskTick.classList.add('task-tick');
    taskTick.setAttribute('data-key', key);

    const taskEdit = document.createElement('span');
    taskEdit.classList.add('task-edit');
    taskEdit.setAttribute('data-key', key);

    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;

    const taskDueDate = document.createElement('span');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = `Due: ${task.dueDate}`;

    contentContainer.appendChild(taskTitle);
    contentContainer.appendChild(taskDueDate);

    taskCard.appendChild(taskEdit);
    taskCard.appendChild(contentContainer);
    taskCard.appendChild(taskTick);

    return taskCard;
}