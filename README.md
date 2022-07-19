# Landing Page Project

## Description

Responsive Landing Page Project (Udacity)

## Requirements:

1. Navigation is built dynamically as an unordered list.
2. It should be clear which section is being viewed while scrolling through the page.
3. When clicking an item from the navigation menu, the link should scroll to the appropriate section (smooth scrolling).

## Additional features

1. Responsive navigation menu
2. While scrolling navigation item corresponding to the section in viewport is highlighted.
3. Hide fixed navigation bar while not scrolling
4. Add a scroll to top button on the page that's only visible when the user scrolls below the fold of the page.
5. Make sections collapsible

## APIS And Methods Used:
- classList methods 
    ```javascript
    Element.classList.add();
    Element.classList.remove();
    Element.classList.toggle();
    Element.classList.replace();
    Element.classList.contains();
    ```
- Event Listeners
   ```javascript
    Element.addEventListener(event, func);
   ```
- setTimeout & clearTimeout
    ```javascript
     setTimeout(func, ms)
     clearTimeout();
    ```
- forEach
    ```javascript
    Elements.forEach(Element => {

    })
    ```

## Summary For How Each Requirement Has Fulfilled

### Requirements

1. Loop over sections and append each section's data-nav as an HTML <li><a></a></li> element text in the <ul> element.
2. Listen to scrolling and determine which section is in the viewport using information provided by Element.getBoundingClientRect() method then add .active class to it using Element.classList.add() method and remove it from the other sections using Element.classList.remove() method.
3. By linking the id of each section as a value for href attribute for <a> element inside each <li> element Ex. <li><a href='#seciton1'></a></li>. Now by clicked an item from the nav menu the link will scroll for the appropriate section. And for Smoothness add the property scroll-behavior: smooth to html element in css.

### Additionals

1. In mobile view the nav menu turn to burger button which is being activated by clicking. The media queries play vital role in this transition. Then I added functionality to the btn using Element.classList.toggle() method to add and remove active-state to navbar__menu for every click and add and remove close-state the the burger btn itself for every click.
2. First I add a conditional to link each section in viewport with the correspondent nav item in nav menu, and it's by checking for the equality of data-nav in both seciton and nav item. If they are equal add active-section class to this nav item classList, otherwise remove it.
3. I initialized a variable named timer with value of null, then listen to scrolling.
If timer is not null remove hide class from .page__header and clearTimeout, otherwise if it's stayed null for a specific time using setTimeout(func, ms) method (700ms) ((no scrolling happened to change the value of timer)) then add hide class to .page__header.
4. By Listening for scrolling if document.body.scrollTop > the fold of the page or document.documentElement.scrollTop > the fold of the page change display property of scrollToTopBtn to 'block', otherwise change it to 'none'. Then listen for clicks on this btn and assign a callback function to it that set document.body.scrollTop to 0 and document.documentElement.scrollTop to 0 to scroll back to the top of the page.
5. create a button for collapsing and listen for clicks on it for each click check if .landing__container doesn't contain collapse class. If true add collapse class to it's classList which contains properties to hide the paragraphs in the section , If false remove collapse class from it's classList. 
