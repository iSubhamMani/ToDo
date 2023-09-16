import { displayEditModal } from "./edit-task-modal";
import Task from "./Task";

let taskKey = '';

export default function editTask(){
    const editBtns = document.querySelectorAll('.task-edit');

    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', e => {
            loadEditModal(e.target.dataset.key);
        })
    });
}

function loadEditModal(key){
    displayEditModal();
    taskKey = key;

    const titleInput = document.querySelector('.title-input-edit');
    const dueDatePicker = document.querySelector('.due-date-picker-edit');

    const oldtask = JSON.parse(localStorage.getItem(taskKey));
    titleInput.value = oldtask.title;
    dueDatePicker.value = oldtask.dueDate;

    const updateBtn = document.querySelector('.update-modal');
    updateBtn.addEventListener('click', updateTask);
}

function closeEditModal(){
    const updateBtn = document.querySelector('.update-modal');
    updateBtn.removeEventListener('click', updateTask);
    const modal = document.querySelector('.edit-modal');
    modal.style.display = 'none';
    modal.close();
}

function updateTask(){
    const titleInput = document.querySelector('.title-input-edit');
    const dueDatePicker = document.querySelector('.due-date-picker-edit');

    const newTask = Task(titleInput.value, dueDatePicker.value);
    localStorage.setItem(taskKey, JSON.stringify(newTask));
    closeEditModal();
    location.reload();
}