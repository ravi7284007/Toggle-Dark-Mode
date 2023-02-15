const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.querySelector('#toggle-icon');
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

const imageMode = color => {
    img1.src = `img/undraw_proud_coder_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

const darkMode = () => {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark')
}
const lightMode = () => {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50 %)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50 %)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light')
}

function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')

        lightMode()
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode()
    }
}