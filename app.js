const lang = navigator.language;

let date = new Date();
let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {
    weekday: 'long'
});
let monthName = date.toLocaleString(lang, {
    month: 'long'
});
let year = date.getFullYear();

document.querySelector('#month-name').innerHTML = monthName;
document.querySelector('#day-name').innerHTML = dayName;
document.querySelector('#day-number').innerHTML = dayNumber;
document.querySelector('#year').innerHTML = year;