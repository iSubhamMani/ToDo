import createNav from "./nav";
import { toggleHam } from "./nav";

export default function createUI(){
    const content = document.getElementById('content');
    content.appendChild(createNav());
    toggleHam();
}