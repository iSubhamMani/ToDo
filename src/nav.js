export function toggleHam(){
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

export default function createNav(){
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const brandTitle = document.createElement('div');
    brandTitle.textContent = 'To Do';
    brandTitle.classList.add('brand-title');

    const toggleBtn = document.createElement('a');
    toggleBtn.href = '#';
    toggleBtn.classList.add('toggle-btn');

    const bar1 = document.createElement('span');
    bar1.classList.add('bar');
    const bar2 = document.createElement('span');
    bar2.classList.add('bar');
    const bar3 = document.createElement('span');
    bar3.classList.add('bar');

    toggleBtn.appendChild(bar1);
    toggleBtn.appendChild(bar2);
    toggleBtn.appendChild(bar3);

    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    const navList = document.createElement('ul');
    const todayLI = document.createElement('li');
    todayLI.textContent = 'Today';
    todayLI.classList.add('nav-link');
    todayLI.classList.add('today-li');
    const thisWeekLI = document.createElement('li');
    thisWeekLI.textContent = 'This Week';
    thisWeekLI.classList.add('nav-link');
    thisWeekLI.classList.add("thisWeek-li");
    const projectsLI = document.createElement('li');
    projectsLI.textContent = 'Projects';
    projectsLI.classList.add('nav-link');
    projectsLI.classList.add('projects-li');

    navList.appendChild(todayLI);
    navList.appendChild(thisWeekLI);
    navList.appendChild(projectsLI);

    navLinks.appendChild(navList);

    navbar.appendChild(brandTitle);
    navbar.appendChild(toggleBtn);
    navbar.appendChild(navLinks);

    return navbar;
}