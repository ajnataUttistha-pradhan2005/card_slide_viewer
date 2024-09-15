import { characters } from './characterdata.js';

const container = document.querySelector('.container');
const card = document.querySelector('.card');
const card_name = document.querySelector('.name');
const card_img = document.querySelector('.card_img');
const card_rank = document.querySelector('.rank');
const card_description = document.querySelector('.description');
const li_power = document.querySelector('.power');
const li_defense = document.querySelector('.defense');
const li_speed = document.querySelector('.speed');
const li_magic = document.querySelector('.magic');
const li_health = document.querySelector('.health');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');



function updateCardClass(className, index) {
    // Remove the existing class if it exists
    if (card.classList[index]) {
        card.classList.replace(card.classList[index], className);
    } else {
        card.classList.add(className);
    }
}

function checkNsetElement(item) {
    // Ensure card has the 'card' class
    if (!card.classList.contains('card')) {
        card.classList.add('card');
    }

    // Set card id if not already set
    if (!card.id) {
        card.id = `card${current_card + 1}`;
    }

    // Handle element classes
    const elementClass = item.element.toLowerCase();
    const validElements = ['fire', 'water', 'earth', 'air', 'arcane'];
    if (validElements.includes(elementClass)) {
        updateCardClass(elementClass, 1);
    }

    // Check rank and update class
    checkNsetRank(item);
}

function checkNsetRank(item) {
    // Handle rank classes
    const rankClass = item.rank.toLowerCase();
    const validRanks = ['legendary', 'epic', 'rare', 'uncommon', 'common'];
    if (validRanks.includes(rankClass)) {
        updateCardClass(rankClass, 2);
    }
}

let current_card = 0;

window.addEventListener('DOMContentLoaded', () => {
    showCharacterDetails();
});

function showCharacterDetails(){
    const item = characters[current_card];
    checkNsetElement(item);
    card_name.textContent = item.name;
    card_img.src = item.img;
    card_img.alt = item.name;
    card_rank.textContent = `Rank : ${item.rank}`;

    card_description.textContent = item.description;
    li_power.textContent = `PWR : ${item.stats.power}`;
    li_defense.textContent = `DEF : ${item.stats.defense}`;
    li_speed.textContent = `SPD : ${item.stats.speed}`;
    li_magic.textContent = `MAG : ${item.stats.magic}`;
    li_health.textContent = `HP : ${item.stats.health}`;
}

// show next card 
nextBtn.addEventListener('click' , () => {
    console.log('clicked');
    current_card++;
    if(current_card > characters.length - 1){
        current_card = 0;
    }
    showCharacterDetails();
});

// show previous card
prevBtn.addEventListener('click', () => {
    current_card--;
    if(current_card < 0){
        current_card = characters.length - 1 ;
    }
    showCharacterDetails();
});