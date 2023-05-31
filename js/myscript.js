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
const thumbnails = document.getElementById('thumbnails');
const buttonPrevious = document.getElementById('button-previous');
const buttonNext = document.getElementById('button-next');
const buttonAutoplay = document.getElementById('button-autoplay');
const buttonReverse = document.getElementById('button-reverse');
let activeIndex = 0;
let autoplayStatus = true;


images.forEach((game, index) => {

    const carouselItem = addElement('div', '', 'carousel-item', carousel);
    const gameImage = addElement('img', '', 'game-image', carouselItem).src = game.image;
    const textContainer = addElement('div', '', 'text-container', carouselItem);
    const gameTitle = addElement('h1', game.title, 'game-title', textContainer);
    const gameText = addElement('p', game.text, 'game-text', textContainer);
    document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');
    const gameThumbnail = addElement('img', '', 'thumbnail-image', thumbnails);
    gameThumbnail.src = game.image;
    
    gameThumbnail.addEventListener('click', () => {
        activeIndex = index;
        document.querySelector('.carousel-item.active').classList.remove('active');
        document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');
    });
})


let autoplay = setInterval(() => {
    buttonNext.click();
}, 3000);


buttonAutoplay.addEventListener('click', () => {

    if (autoplayStatus === false) {

        autoplay = setInterval(() => {
            buttonNext.click();
        }, 3000);

        autoplayStatus = true;
        buttonAutoplay.innerHTML = '<i class="fa-solid fa-pause"></i>';

    } else if (autoplayStatus === true) {

        clearInterval(autoplay);
        autoplayStatus = false;
        buttonAutoplay.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
})


buttonReverse.addEventListener('click', () => {

    clearInterval(autoplay);
    autoplay = setInterval(() => {
        buttonPrevious.click();
    }, 3000);
})


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
    const element = document.createElement(type);
    element.innerHTML = innerText;
    element.classList.add(elementClass);
    container.append(element);
    return element;
}