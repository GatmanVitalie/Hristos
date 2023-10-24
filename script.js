const header = document.querySelector('.header');
const slogan = document.querySelector('.slogan');
const content = document.querySelector('.content');



// JavaScript code to generate grid items
const gridContainer = document.querySelector('.grid-container');
const numItems = 20;

for (let i = 1; i <= numItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item glass-effect';
    gridItem.innerHTML = `${i}`;
    gridContainer.appendChild(gridItem);
}
