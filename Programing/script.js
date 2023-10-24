const header = document.querySelector('.header');
const slogan = document.querySelector('.slogan');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('sticky-header');
        slogan.style.display = 'none';
        content.style.marginTop = `${header.offsetHeight}px`; // Add margin to content to prevent it from overlapping the sticky header
    } else {
        header.classList.remove('sticky-header');
        slogan.style.display = 'block';
        content.style.marginTop = '0'; // Reset the margin when the header is not sticky
    }
});

// JavaScript code to generate grid items
const gridContainer = document.querySelector('.grid-container');
const numItems = 20;

for (let i = 1; i <= numItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item glass-effect';
    gridItem.innerHTML = `${i}`;
    gridContainer.appendChild(gridItem);
}
