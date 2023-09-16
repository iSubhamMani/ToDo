export default function createEditTaskModal(){
    const modal = document.createElement('dialog');
    modal.classList.add('edit-modal');
    
    const titleText = document.createElement('span');
    titleText.textContent = 'Title';
    titleText.classList.add('title-txt');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('title-input-edit');

    const dueDateText = document.createElement('span');
    dueDateText.textContent = 'Due Date';
    dueDateText.classList.add('due-date');

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.min = `${new Date().toJSON().slice(0, 10)}`;
    dueDateInput.classList.add('due-date-picker-edit');

    const closeModalBtn = document.createElement('button');
    closeModalBtn.textContent = 'Close';
    closeModalBtn.classList.add('close-modal');
    closeModalBtn.addEventListener('click', closeModal);

    const updateModalBtn = document.createElement('button');
    updateModalBtn.textContent = 'Update';
    updateModalBtn.classList.add('update-modal');

    modal.appendChild(titleText);
    modal.appendChild(titleInput);
    modal.appendChild(dueDateText);
    modal.appendChild(dueDateInput);
    modal.appendChild(closeModalBtn);
    modal.appendChild(updateModalBtn);

    return modal;
}

function closeModal(){
    const modal = document.querySelector('.edit-modal');
    modal.style.display = 'none';
    modal.close();
}

export function displayEditModal(){
    const modal = document.querySelector('.edit-modal');
    modal.style.display = 'flex';
    modal.showModal();
}