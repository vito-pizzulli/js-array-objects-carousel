const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.getElementById('carousel');
const buttonPrevious = document.getElementById('button-previous');
const buttonNext = document.getElementById('button-next');
let activeIndex = 0;

images.forEach(game => addElement('img', '', 'carousel-item', carousel).src = game.image);
document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');

buttonNext.addEventListener('click', () => {

    if (activeIndex >= images.length - 1) {
        activeIndex = 0;

        } else {
        activeIndex++;
        }

    document.querySelector('.carousel-item.active').classList.remove('active');
    document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');
});

buttonPrevious.addEventListener('click', () => {

    if (activeIndex === 0) {
        activeIndex = images.length - 1;

        } else {
        activeIndex--;
        }

    document.querySelector('.carousel-item.active').classList.remove('active');
    document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');
});


/* FUNCTIONS */

/**
 * This function creates an html element of the chosen type and class, with the chosen text, and adds it at the end of the selected container.
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} class The name of the class that will be added to the created element.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, elementClass, container) {
    type = document.createElement(type);
    type.innerHTML = innerText;
    type.classList.add(elementClass);
    container.append(type);
    return type;
}