//Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
// console.log(sections);
// console.log(navList.innerHTML);

//Functions
function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
         rect.top < window.innerHeight &&
         rect.bottom > window.innerHeight
    );
}

//Add sections to navList ((2))
sections.forEach(section => {
    let listHtml = `<li data-nav='${section.dataset.nav}'><a href='#${section.getAttribute('id')}'>${section.dataset.nav}</a></li>`;
    navList.insertAdjacentHTML('beforeend', listHtml);  
});

//Listen for scrolling
window.addEventListener('scroll', function() {
   sections.forEach(section => {
        if (isInViewport(section)) {
        //I added the Init of <li> NodeList here because when i put it at the first, it initializes before the <li> tags being added to the page and store an empty list as you know that nodeLists are static not live
          const liTags = navList.querySelectorAll('li');
          // Highlight Nav For Section That's In The ViewPort ((1))
          liTags.forEach(item => {
            //both sharing the same dataset
            if (item.dataset.nav === section.dataset.nav) {
                item.classList.add('active-section');
            } else {
                item.classList.remove('active-section');
            }
          })
        }
   })
});
