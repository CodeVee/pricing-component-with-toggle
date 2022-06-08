const toggle = document.getElementById('toggle');
const monthlyPrices = Array.from(document.getElementsByClassName('monthly'));
const annuallyPrices = Array.from(document.getElementsByClassName('annually'));
const hide = 'hide';

const togglePrice = (e) => {
    if (toggle.checked) {
        monthlyPrices.forEach(price => price.classList.add(hide));
        annuallyPrices.forEach(price => price.classList.remove(hide));
    } else {
        monthlyPrices.forEach(price => price.classList.remove(hide));
        annuallyPrices.forEach(price => price.classList.add(hide));
    }
};


document.addEventListener('DOMContentLoaded', togglePrice);
toggle.addEventListener('change', (e) => togglePrice());