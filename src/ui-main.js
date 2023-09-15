import createNav from "./nav";
import { toggleHam } from "./nav";
import createTasksUI from "./add-tasks-ui";
import createModal from "./add-task-modal";
import createTaskContainer from "./task-container";
import loadTasks from "./load-tasks";

export default function createUI(){
    const content = document.getElementById('content');
    content.appendChild(createNav());
    content.appendChild(createTasksUI());
    content.appendChild(createModal());
    content.appendChild(createTaskContainer());
    loadTasks();
    toggleHam();
}