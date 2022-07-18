//Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);
console.log(navList.innerHTML);


//Add sections to navList ((2))
sections.forEach(section => {
    navList.innerHTML += `<li>${section.dataset.nav}</li>`;
})