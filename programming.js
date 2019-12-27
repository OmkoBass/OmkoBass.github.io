const language = document.getElementById('language');

let home = document.getElementById('home');
let resources = document.getElementById('resources');
let main = document.getElementById('main');
let toknowheader = document.getElementById('toknowheader');
let toknowtext = document.getElementById('toknowtext');
let programminglanguage = document.getElementById('programminglanguage');
let salary = document.getElementById('salary');
let thinkingheader = document.getElementById('thinkingheader');
let thinkingtext = document.getElementById('thinkingtext');
let pointertext = document.getElementById('pointertext');
let kingimg = document.getElementById('kingimg');
let importantpeople = document.getElementById('importantpeople');
let ritchietext = document.getElementById('ritchietext');
let linustext = document.getElementById('linustext');
let linuxp1 = document.getElementById('linuxp1');
let linuxp2 = document.getElementById('linuxp2');
let linuxp3 = document.getElementById('linuxp3');
let linuxp4 = document.getElementById('linuxp4');


let english = true;

function changeLanguage()
{
    if(english)
    {
        home.innerHTML = 'Home';
        resources.innerHTML = 'Resources';
        main.innerHTML = 'PROGRAMMING'
        english = false;
    }
    else
    {
        home.innerHTML = 'Pocetna';
        resources.innerHTML = 'Resursi';
        main.innerHTML = 'PROGRAMIRANJE';
        toknowheader.innerHTML = 'Sta treba da znate';
        toknowtext.innerHTML = `Za programiranje je potrebna izvrsna matematicko-logicka jedinica. <br>
        Efikasno razmisljanje razdvaja kodera or pravog programera.`;
        programminglanguage.innerHTML = 'Programski Jezik';
        salary.innerHTML = 'Plata';
        thinkingheader.innerHTML = 'Razmisljanje';
        thinkig
        english = true;
    }
}

function appear()
{
    let toKnowText = document.querySelector('.toknow-text');
    let toKnowPosition = toKnowText.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.4;

    if(toKnowPosition < screenPosition)
        toKnowText.classList.add('appear');
    if(toKnowPosition > screenPosition * 1.4)
        toKnowText.classList.remove('appear');
}

window.addEventListener('load', () => {
    scroll(0,0);
    setTimeout(() => {
        const preload = document.querySelector('.preload');
        preload.classList.add('loaded');
        const overflow = document.querySelector('*');
        overflow.classList.add('overflowadded');
    }, 250);
});

changeLanguage();
language.addEventListener('click', changeLanguage);
window.addEventListener('scroll', appear);