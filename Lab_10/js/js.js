alert("this is a new era of you");



const logo = document.querySelector('.logo');

// Піднімання логотипу при наведенні
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'translateY(-5px)';
});

// Повернення до початкової позиції при виході
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'translateY(0)';
});