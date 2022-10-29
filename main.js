//array of card objects
const cards = [
    {
        name: 'The Chariot',
        image: './tarot/chariot.jpeg'
    },
    {
        name: 'The Empress',
        image: './tarot/empress.jpeg'
    },
    {
        name: 'The Fool',
        image: './tarot/fool.jpeg'
    },
    {
        name: 'The Hermit',
        image: './tarot/hermit.jpeg'
    },
    {
        name: 'The Hierophant',
        image: './tarot/hierophant.jpeg'
    },
    {
        name: 'The Lovers',
        image: './tarot/lovers.jpeg'
    },
    {
        name: 'The Magician',
        image: './tarot/magician.jpeg'
    },
    {
        name: 'The Priestess',
        image: './tarot/priestess.jpeg'
    }
];

//global variables
let deck = document.querySelectorAll('.card');
let form = document.getElementsByTagName('form');
let button = document.getElementById('pick');
let question;
let choices = document.getElementsByClassName('question');
let labels = document.getElementsByClassName('label');
let table = document.getElementById('table');

//function to suffle the cards array and assign to each card div
function shuffle(){
    cards.sort((a,b) => 0.5 - Math.random());

    for (let i = 0; i < deck.length; i++){
        deck[i].setAttribute('name',cards[i].name);
        deck[i].classList.remove('stacked');
        deck[i].classList.add('lined');
        deck[i].classList.remove('right');
        deck[i].classList.remove('left');
    };
};

//flip a card and display the reading when clicked
function read(){
    let selected;
    for (let i = 0; i < cards.length; i++){
        if (this.getAttribute('name') === cards[i].name){
            selected = cards[i];
            this.innerHTML = '<img src="' + cards[i].image + '">';
            this.classList.remove('lined');
        }else{
            deck[i].style.display = 'none';
        };
    };
    let name = document.createElement('p');
    let nContent = document.createTextNode(selected.name);
    table.appendChild(name);
    name.appendChild(nContent);
};

//collect the users' question before a shuffle
function ask(){
    question = this.getAttribute('id'); //save the question asked for use in 'read'
    button.disabled = false;
    button.innerText = 'Pick a card';

    for (let i = 0; i < labels.length; i++){
        labels[i].innerText = '';
    };
};

//call shuffle()
button.addEventListener('click', shuffle);

//call read()
for (let i of deck){
    i.addEventListener('click', read);
};

//call ask()
for (let i of choices){
    i.addEventListener('click', ask);
};