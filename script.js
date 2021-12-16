const prevButton = document.querySelector('#prevbtn');
const nextButton = document.querySelector('#nextbtn');
const book = document.querySelector('#book');

// Pages
const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');

// Event Listeners
prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);

// logic
let currentLocation = 1;
let numberOfPages = 3;
let maxPages = numberOfPages + 1;

// Functions

function openBook() {
    book.style.transform = "translateX(50%)";
    prevButton.style.transform = 'translateX(-180px)';
    nextButton.style.transform = 'translateX(180px)';
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = 'translateX(0%)';
    }
    else {
        book.style.transform = 'translateX(100%)';
    }
    prevButton.style.transform = 'translateX(0px)';
    nextButton.style.transform = 'translateX(0px)'
}

function next() {
    if (currentLocation < maxPages) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add('flipped');
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add('flipped');
                paper2.style.zIndex = 2;
                break;
            case 3:
                closeBook(false);
                paper3.classList.add('flipped');
                paper3.style.zIndex = 3;
                break;
            default:
                return;
        }
        currentLocation++;
    }
}

function prev() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove('flipped');
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove('flipped');
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove('flipped');
                paper3.style.zIndex = 1;
                break;
            default:
                return;
        }
        currentLocation--;
    }
}
