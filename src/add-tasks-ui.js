import getKey from './add-tasks';

export default function createTasksUI(){
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-tasks-container');

    const addTasksBtn = document.createElement('span');
    addTasksBtn.classList.add('add-tasks');
    
    addTaskContainer.appendChild(addTasksBtn);

    return addTaskContainer;
}

export function addTaskToDOM(){
    const taskKey = getKey();
    const task = JSON.parse(localStorage.getItem(taskKey));

    if(task.title === undefined && task.dueDate === undefined) return;

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const taskTick = document.createElement('span');
    taskTick.classList.add('task-tick');
    taskTick.setAttribute('data-key', taskKey);

    const taskEdit = document.createElement('span');
    taskEdit.classList.add('task-edit');
    taskEdit.setAttribute('data-key', taskKey);

    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;

    const taskDueDate = document.createElement('span');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = `Due: ${task.dueDate}`;

    contentContainer.appendChild(taskTitle);
    contentContainer.appendChild(taskDueDate);

    taskCard.appendChild(taskTick);
    taskCard.appendChild(contentContainer);
    taskCard.appendChild(taskEdit);

    return taskCard;
}