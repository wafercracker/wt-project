let array = [0, 1, 2, 3];
let sprts = document.querySelectorAll('.sprts');
// let badminton = document.getElementById('badminton');
// let football = document.getElementById('football');
// let cricket = document.getElementById('cricket');
// let zumba = document.getElementById('zumba');
// let firstButton = document.getElementById('first');
// let secondButton = document.getElementById('second');


document.addEventListener('DOMContentLoaded', () => {
    sprts.forEach(element => {
        setInterval(() => {
            sprts[0].classList.remove('display');
            sprts[1].classList.add('display');
            sprts[2].classList.add('display');
            sprts[3].classList.add('display');
        }, 2000);
        setInterval(() => {
            sprts[0].classList.add('display');
            sprts[1].classList.remove('display');
            sprts[2].classList.add('display');
            sprts[3].classList.add('display');
        }, 4000);
        setInterval(() => {
            sprts[0].classList.add('display');
            sprts[1].classList.add('display');
            sprts[2].classList.remove('display');
            sprts[3].classList.add('display');
        }, 6000);
        setInterval(() => {
            sprts[0].classList.add('display');
            sprts[1].classList.add('display');
            sprts[2].classList.add('display');
            sprts[3].classList.remove('display');
        }, 8000);
    })
})

sprts.forEach(element =>{
    element.addEventListener('click', ()=>{
        window.location.assign("/html/sports.html")
    })
})

