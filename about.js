const language = document.getElementById('language');

let home = document.getElementById('home');
let who = document.getElementById('who');
let dont = document.getElementById('dont');
let ami = document.getElementById('ami');
let programming = document.getElementById('programming');
let other = document.getElementById('other');

let english = true;

let normal = document.querySelector('.normal');

function changeLanguage()
{
    if(english)
    {
        home.innerHTML = 'Home';
        who.innerHTML = 'Who am I?'
        dont.innerHTML = `Don't have a more normal <br> picture than this`;
        ami.innerHTML = `I am Omer Batilović. Software engineering student studying at the State University of Novi Pazar. <br>
        I'm at the half-point of my studies and i absolutely love what i'm studying and doing. <br> 
        I have a black belt in programming, don't care for anything else.`;
        programming.innerHTML = 'Programming';
        other.innerHTML = 'Other';    
        
        english = false;
    }
    else
    {
        home.innerHTML = 'Početna';
        who.innerHTML = 'Ko sam ja?'
        dont.innerHTML = `Nemam normalniju <br>sliku od ove.`;
        ami.innerHTML = `Ja sam Omer Batilović. Student softverskog inženjerstva na Državnom Univerzitetu u Novom Pazaru. <br>
        Druga sam godina osnovnih studija i ovo što studiram i čime se bavim je moja najveća želja. <br>
        Imam crni pojas u programiranju, ostalo me ne interesuje.`;
        programming.innerHTML = 'Programiranje';
        other.innerHTML = 'Ostalo'
        
        english = true;
    }
}

language.style.pointerEvents = 'none';

window.addEventListener('load', () =>
{
    setTimeout(() => {
        normal.classList.add('appear');
    }, 750);
});

setTimeout(() =>
{
    normal.classList.add('normalnone');
    if(english)
        document.querySelector('.normal p').innerHTML = 'Odoh';
    else
        document.querySelector('.normal p').innerHTML = 'Bye';

    setTimeout(() => {
        language.style.pointerEvents = 'all';
        language.classList.add('active');
        language.classList.remove('disabled');
    }, 2000);
}, 6000);

changeLanguage();

language.addEventListener('click', changeLanguage);