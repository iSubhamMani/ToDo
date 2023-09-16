export default function createNav(){
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const brandTitle = document.createElement('div');
    brandTitle.textContent = 'To Do';
    brandTitle.classList.add('brand-title');

    const refreshBtn = document.createElement('span');
    refreshBtn.classList.add('refresh-btn');
    refreshBtn.addEventListener('click', () => {
        location.reload();
    })

    navbar.appendChild(brandTitle);
    navbar.appendChild(refreshBtn);

    return navbar;
}