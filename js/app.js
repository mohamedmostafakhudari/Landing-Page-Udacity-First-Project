//Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
const burgerMenu = document.querySelector('.burger__menu');
const pageHeader = document.querySelector('.page__header');

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
const fragment = document.createDocumentFragment();
sections.forEach(section => {
  const navTitle = section.getAttribute('data-nav');
  const id = section.getAttribute('id');
  const link = document.createElement('a');
  const linkItem = document.createElement('li');
  link.href = `#${id}`;
  link.textContent = `${navTitle}`
  link.addEventListener('click', e => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
  linkItem.appendChild(link);
  fragment.appendChild(linkItem);
});

navList.appendChild(fragment);

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

    // Highlight Nav Item For Section That's In The ViewPort ((1))
    // Highlight Active Section That's In The ViewPort ((3))
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const navLink = navList.querySelector(`li a[href = '#${id}']`);
      const navItem = navLink.parentElement;
      if (isInViewport(section)) {
        section.classList.add('active');
        navItem.classList.add('active-section');
       
      } else {
        section.classList.remove('active');
        navItem.classList.remove('active-section');
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
