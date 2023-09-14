export default function createModal(){
    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    
    const titleText = document.createElement('span');
    titleText.textContent = 'Title';
    titleText.classList.add('title-txt');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('title-input');

    const dueDateText = document.createElement('span');
    dueDateText.textContent = 'Due Date';
    dueDateText.classList.add('due-date');

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.min = `${new Date().toJSON().slice(0, 10)}`;
    dueDateInput.classList.add('due-date-picker');

    const closeModalBtn = document.createElement('button');
    closeModalBtn.textContent = 'Close';
    closeModalBtn.classList.add('close-modal');
    closeModalBtn.addEventListener('click', closeModal);

    const submitModalBtn = document.createElement('button');
    submitModalBtn.textContent = 'Add';
    submitModalBtn.classList.add('submit-modal');

    modal.appendChild(titleText);
    modal.appendChild(titleInput);
    modal.appendChild(dueDateText);
    modal.appendChild(dueDateInput);
    modal.appendChild(closeModalBtn);
    modal.appendChild(submitModalBtn);

    return modal;
}

export function loadModal(){
    const addTasksBtn = document.querySelector('.add-tasks');

    addTasksBtn.addEventListener('click', () => {
        displayModal();
    });
}

function resetModal(){
    const titleInput = document.querySelector('.title-input');
    titleInput.value = '';
    const dueDateInput = document.querySelector('.due-date-picker');
    console.log(dueDateInput.value);
    dueDateInput.value = '';
}

function closeModal(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    resetModal();
    modal.close();
}

function displayModal(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    modal.showModal();
}