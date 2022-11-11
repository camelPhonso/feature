//array of card objects
const tarot = [
    {
        name: 'The Chariot',
        image: './tarot/chariot.jpeg',
        love: "Now is the time to take the wheel, and make sure you have a clear understanding of what you’re looking for in love and romance. Once you know your destination, the Chariot tarot love meaning urges you to take action. When you take control of your love life, you are very likely to see rewards. Confidence, courage and drive will lead to success.",
        finances: "If there have been any financial obstacles that have stood in the way of your material stability, now can be the time to deal with them. The Chariot gives you motivation, focus and determination to conquer those challenges. With enough self-discipline, you’ll be able to feel comfortable with your financial situation.",
        health: "Both health and spirituality readings take a positive turn when the Chariot zooms by. The main message with either being that you’ll need to take control and make things happen."
    },
    {
        name: 'The Empress',
        image: './tarot/empress.jpeg',
        love: "The Empress tarot love meaning stems from the element of earth. The person represented by this card can be loving, nurturing and caring, as has financial security or appreciative of beautiful, comforting things. Sometimes, the Empress can point to love and work coming together, either with a coworker, or perhaps a new business venture.",
        finances: "The Empress is abundant both creatively and materially, so this card can point to a comfortable financial situation. You may also be feeling very generous with your money now, wanting to nourish your friends and family with your abundance and good luck. It is certainly a good time to share what you have.",
        health: "If you’ve been struggling with a health issue (physical, emotional, or spiritual), the Empress tarot card tells you to look for natural ways to bring yourself back to wholeness."
    },
    {
        name: 'The Fool',
        image: './tarot/fool.jpeg',
        love: "The Fool tarot meaning in love signals that you'll need to experience new things in order to find the romance that you desire. Be willing to take risks, be bold and expand your vision of the world and you may end up finding love in the most unlikely places. Surprises are in store for you.",
        finances: "When it comes to finances, you may be in a period where you are feeling spontaneous and idealistic. All spending now can be for the purpose of adventure and exploration. Want to go on a trip? Or learn a new skill? It can be easy for you to fund these purchases now. There can be a feeling that you will have all that you need, so there’s no need to worry about the bills, and more emphasis on feeling expansive and curious.",
        health: "The Fool is a card of strong energy. If you have been ill or struggling with your emotional/mental health, the Fool can represent a new lease on life and feeling uninhibited."
    },
    {
        name: 'The Hermit',
        image: './tarot/hermit.jpeg',
        love: "When it comes to love and relationships, the Hermit definitely isn’t a positive ‘romance’ card. This doesn’t mean that it always means the ending of a relationship or singleness, although it can. If you’re single and wanting love, make sure that you’re really ready for a relationship.",
        finances: "For most of us, working and making money is a necessary part of life. Unless you were born wealthy or received a financial windfall of some kind, you’ll probably have to focus at least some of your time on earning a living. This doesn’t mean your career has to rule your life.",
        health: "More so than any other card in the deck, the Hermit is a card focused on spirituality. In fact, the Hermit’s central message is to focus on spiritual enlightenment and connecting to one’s higher self by focusing inward."
    },
    {
        name: 'The Hierophant',
        image: './tarot/hierophant.jpeg',
        love: "The Hierophant means full commitment, therefore the Hierophant in a love context is a very good sign. It is associated with traditional and solid relationships and indicates that you and your partner are on the same page about pretty much everything. This is not just a normal relationship, but one that feels like “meant to be” and almost sacred.",
        finances: "In a career context, the Hierophant indicates that new things are coming your way. This can be in the form of a promotion, moving to another department, or changing companies. While working with a lot of new colleagues, one of them will act as a mentor.",
        health: "Are you having health issues or feel any ailment coming on? As a symbol of existing conventions and well-established procedures, the Hierophant in a health context tells you to visit your doctor and to follow his advice. Don’t try to find a solution online, instead, just listen to the wisdom of a professional."
    },
    {
        name: 'The Lovers',
        image: './tarot/lovers.jpeg',
        love: "The main meaning of the upright Lovers tarot card is (pretty obvious) love, as well as romance, attraction, and perfect harmony.",
        finances: "Because the Lovers in tarot is all about renewal, career and money changes can happen quickly when this card is in the mix. This isn’t always positive though.",
        health: "Besides romance and love, the Lovers tarot card in a health context also represents the growth of your own subjective principles and beliefs, irrespective of what society dictates as norms. It’s about getting clear about your own values and finding harmony within yourself."
    },
    {
        name: 'The Magician',
        image: './tarot/magician.jpeg',
        love: "The Magician tarot card sometimes represents a manipulator, someone who uses their personality and charisma to dupe those who fall under his spell. What does your intuition say?",
        finances: "The Magician tarot card can mean great things in a money and career reading–if you play your cards right. Because he is linked to creation, this card is especially powerful when questions are focused on launching a new business or inventing something.",
        health: "The Magician’s focus is on creation and improvement also in health matters. If you have been ill or working through emotional/physical difficulties, a significant change may happen soon."
    },
    {
        name: 'The Priestess',
        image: './tarot/priestess.jpeg',
        love: "If the High Priestess tarot card represents you in a reading, you might be feeling dissatisfied with many areas of your life, including love. If she represents your partner or friend, you’re probably feeling like you can’t achieve intimacy no matter how hard you try.",
        finances: "This Major Arcana card urges you to take a step back and look at the situation as an observer. What advice would you give a friend in your shoes?",
        health: "Have you been feeling like something is ‘off’ where your body is concerned? If so, follow your intuition and seek medical guidance. Because the High Priestess can represent hormonal and fertility issues as well as upcoming pregnancy, it is important not to ignore her messages."
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
let shuffle = () => {
    button.preventDefault;
    tarot.sort((a,b) => 0.5 - Math.random());

    for (let i = 0; i < deck.length; i++){
        deck[i].setAttribute('name',tarot[i].name);
        deck[i].classList.remove('stacked', 'right', 'left');
        deck[i].classList.add('lined');
        deck[i].addEventListener('click',read);
    };

    button.innerText = 'pick a card';
    button.disabled = true;
    button.style.cursor = 'not-allowed'
};

//flip a card and display the reading when clicked
function read(){
    let selected;
    for (let i = 0; i < tarot.length; i++){
        if (this.getAttribute('name') === tarot[i].name){
            selected = tarot[i];
            this.classList.add('flip');
            this.innerHTML = '<img src="' + selected.image + '">';
            this.classList.remove('lined');            
        }else{
            deck[i].style.display = 'none';
        };
    };
    
    //create a new div to display next to the selected card
    let reading = document.createElement('div');
    reading.classList.add('reading');
    table.appendChild(reading);

    //display the name of this card
    let name = document.createElement('p');
    name.classList.add('tname');
    let nContent = document.createTextNode(selected.name);
    reading.appendChild(name);
    name.appendChild(nContent);

    //display the reading of the card against the question asked
    let theme = document.createElement('p');
    theme.classList.add('ttheme');
    let tTheme = document.createTextNode(`What the tarot sees for you in ${question}`);
    reading.appendChild(theme);
    theme.appendChild(tTheme);

    //collect string from the key that matches the question collected during ask()
    let description = document.createElement('p');
    description.classList.add('tdescription');
    let dContent = document.createTextNode(selected[question]);
    reading.appendChild(description);
    description.appendChild(dContent);

    button.innerText = 'press "Enter" to start a new reading';
    document.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
            window.location.reload(true);   
        };
    });
};

//collect the users' question before a shuffle
function ask(){
    question = this.getAttribute('id'); //save the question asked for use in 'read'
    button.disabled = false;
    button.innerText = 'Shuffle the cards';
    button.style.cursor = 'pointer';

    for (let i = 0; i < labels.length; i++){
        labels[i].innerText = '';
    };

    //addEventListener to prompt shuffle() to be called
    button.addEventListener('click', shuffle);
};

//call ask()
for (let i of choices){
    i.addEventListener('click', ask);
};