import { addTaskToDOM } from "./add-tasks-ui";
import { closeModal } from "./add-task-modal";

export default function createTaskContainer(){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const addTaskBtn = document.querySelector('.submit-modal');
    addTaskBtn.addEventListener('click', () => {
        taskContainer.appendChild(addTaskToDOM());
        closeModal();
    })

    return taskContainer;
}