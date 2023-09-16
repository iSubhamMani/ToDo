import createNav from "./nav";
import createTasksUI from "./add-tasks-ui";
import createTaskContainer from "./task-container";
import loadTasks from "./load-tasks";
import deleteTask from "./delete-task";
import createAddTaskModal from "./add-task-modal";
import createEditTaskModal from "./edit-task-modal";
import editTask from "./edit-task";

export default function createUI(){
    const content = document.getElementById('content');
    content.appendChild(createNav());
    content.appendChild(createTasksUI());
    content.appendChild(createAddTaskModal());
    content.appendChild(createEditTaskModal());
    content.appendChild(createTaskContainer());
    loadTasks();
    deleteTask();
    editTask();
}