import generateKey from "./randomKey";
import addTaskToDB from "./add-task-to-db";

export default function getKey(){
    const taskTitle = document.querySelector('.title-input').value;
    const taskDueDate = document.querySelector('.due-date-picker').value;

    if(taskTitle !== '' && taskDueDate !== ''){
        const task = Task(taskTitle, taskDueDate);
        const key = generateKey();
        addTaskToDB(key, task);

        return key;
    }
}

const Task = (title, dueDate) => {
    return {title, dueDate};
}