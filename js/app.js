//Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
const burgerMenu = document.querySelector('.burger__menu');
const pageHeader = document.querySelector('.page__header');
// console.log(collapseBtn);
// console.log(sections);
// console.log(navList.innerHTML);

//Functions
function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > window.innerHeight
    );
  };
  //Scroll To Top Button ((5))
  function scrollFunction() {
    if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
}
function toTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function collapse(e) {
  console.log(e.target.parentElement);
  if (!e.target.parentElement.classList.contains('collapse')) {
    e.target.parentElement.classList.add('collapse')
    e.target.classList.replace('fa-arrow-up', 'fa-arrow-down');
    
  } else {
    e.target.parentElement.classList.remove('collapse');
    e.target.classList.replace('fa-arrow-down', 'fa-arrow-up');
  }
}

function toggleMenu() {
  const menu = burgerMenu.nextElementSibling;
  console.log(menu);
  menu.classList.toggle('active-state');
  burgerMenu.classList.toggle('close-state');
}

function showNav() {
  this.classList.remove('hide');
}
//Add sections to navList ((2))
sections.forEach(section => {
  let listHtml = `<li data-nav='${section.dataset.nav}'><a href='#${section.getAttribute('id')}'>${section.dataset.nav}</a></li>`;
  navList.insertAdjacentHTML('beforeend', listHtml);  
});

//Listen for scrolling
let timer = null;
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.page__header');
  //Hide Fixed Nav Bar While Not Scrolling ((4))
  if (timer !== null) {
    nav.classList.remove('hide');
    clearTimeout(timer);
  }
   timer = setTimeout(function() {
    if (burgerMenu.classList.contains('close-state')) return; //Don't hide the nav when it's toggled on
     nav.classList.add('hide');
    }, 700);
    //  console.log(timer);
    sections.forEach(section => {
      if (isInViewport(section)) {
        //I added the Init of <li> NodeList here because when i put it at the first, it initializes before the <li> tags being added to the page and store an empty list as you know that nodeLists are static not live
        const liTags = navList.querySelectorAll('li');
        // Highlight Active Section That's In The ViewPort ((3))
        section.classList.add('active');
        // Highlight Nav Item For Section That's In The ViewPort ((1))
        liTags.forEach(item => {
          //both sharing the same dataset
          if (item.dataset.nav === section.dataset.nav) {
            item.classList.add('active-section');
          } else {
            item.classList.remove('active-section');
          }
        })
      } else {
        section.classList.remove('active');
      };
    })
  });
  //Scroll To Top Btn ((5))
  window.addEventListener('scroll', scrollFunction);
  
  //Listen For click
  scrollToTopBtn.addEventListener('click', toTheTop);
    
    //Collapsible Sections ((6))
  sections.forEach(section => {
    const collapseBtn = section.querySelector('.collapse-btn');
    collapseBtn.addEventListener('click', collapse);
  })
  // BurgerMenu Toggle Btn ((7))
  burgerMenu.addEventListener('click', toggleMenu);
  
  // Show Nav When Mouse Is Over It
  pageHeader.addEventListener('mouseover', showNav);