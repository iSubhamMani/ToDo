export default function createTasksUI(){
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-tasks-container');

    const addTasksBtn = document.createElement('span');
    addTasksBtn.classList.add('add-tasks');
    
    addTaskContainer.appendChild(addTasksBtn);

    return addTaskContainer;
}