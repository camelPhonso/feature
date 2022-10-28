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
    console.log(deck[2]);
};

//flip a card and display the reading when clicked
function read(){
    for (let i = 0; i < cards.length; i++){
        if (deck[i].getAttribute('name') === cards[i].name){
            this.innerHTML = '<img src="' + deck[i].image + '">';
        };
    };
    console.log(this.getAttribute('name'));
};

//call shuffle()
let button = document.getElementById('pick');
button.addEventListener('click', shuffle);

//call read()
for (let i of deck){
    i.addEventListener('click', read);
}