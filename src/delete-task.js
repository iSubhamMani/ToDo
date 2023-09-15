export default function deleteTask(){
    const deleteBtns = document.querySelectorAll('.task-tick');

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', e => {
            deleteBtn.classList.add('active');
            const key = e.target.dataset.key;
            deleteTaskFromDB(key);
        })
    })
}

function deleteTaskFromDB(key){
    localStorage.removeItem(key);
}