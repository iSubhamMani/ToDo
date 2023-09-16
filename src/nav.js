export default function createNav(){
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const brandTitle = document.createElement('div');
    brandTitle.textContent = 'To Do';
    brandTitle.classList.add('brand-title');

    navbar.appendChild(brandTitle);

    return navbar;
}