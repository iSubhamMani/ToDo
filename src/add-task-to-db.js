export default function addTaskToDB(key, task){
    localStorage.setItem(key, JSON.stringify(task));
}