const language = document.getElementById('language');
const moveGears = document.getElementById('moveGears');

let gearsMoving = false;

let home = document.getElementById('home');
let resources = document.getElementById('resources');
let main = document.getElementById('main');
let geartextt = document.getElementById('geartextt');
let toknowheader = document.getElementById('toknowheader');
let toknowtext = document.getElementById('toknowtext');
let wisdomwords = document.getElementById('wisdomwords');
let wisdomexplenation = document.getElementById('wisdomexplenation');
let halloffame = document.getElementById('halloffame');
let tesla = document.getElementById('tesla');
let kitaw = document.getElementById('kitaw');
let watt = document.getElementById('watt');
let george = document.getElementById('george');
let manymore = document.getElementById('manymore');
let phiheader = document.getElementById('phiheader');
let phitext = document.getElementById('phitext');


let english = true;

function changeLanguage()
{
    if(english)
    {
        home.innerHTML = 'Home';
        resources.innerHTML = 'Resources';
        main.innerHTML = 'MECHANICAL ENGINEERING';
        geartextt.innerHTML = `Mechanical Engineering allows us things in real life from this gif. When we look at the gears inside of a clock we can see the immense complexity and mechanical engineering gives us way more than that. Without this kind of engineering we would have any Motors, Wheels, Windmills, Pulling contraptions, Ships, Copying, Hydraulics and many many more things.`;
        moveGears.innerHTML = 'Click me to start the gears!';
        toknowheader.innerHTML = 'What you need to know';
        toknowtext.innerHTML = `Mechanical engineering is most likely the hardest branch of engineering in which you enter with only the best knowledge of physics and math.`;
        wisdomwords.innerHTML = 'Wisdom Words';
        wisdomexplenation.innerHTML = 'Wise words from wise formulas';
        halloffame.innerHTML = 'HALL OF FAME';
        tesla.innerHTML = `The greatest mind of humanity`;
        kitaw.innerHTML = `Ethiopian engineer that invented the GPS while working for NASA.`;
        watt.innerHTML = `Scottish inventor that invented the modern steam engine, rotor machine and copying.`;
        george.innerHTML = 'British inventor that made the first inner-city rail system.';
        manymore.innerHTML = 'AND MANY MORE ...';
        phiheader.innerHTML = 'THE GOLDEN RATIO';
        phitext.innerHTML = `Two quantities are in their golden ratio if their sum divided by the first quantity is equal to the first one divided by the second. <br>
        Everything around us is in the golden ratio. <br>
        The difference between our forearm and arm, our finger and hand, the entire nature is in that ratio, even the universe itself. `;

        english = false;
    }
    else
    {
        home.innerHTML = 'Pocetna';
        resources.innerHTML = 'Resursi';
        main.innerHTML = 'MASINSTVO';
        geartextt.innerHTML = `Mehanika nam omogucava stvari kao sto su sa ovog gif-a da imamo u pravom zivotu. Kad gledamo zupcanike u satu vidimo koliko je kompleksna i precizna stvar a masinstvo nam daje mnogo mnogo vise od toga. Bez nje ne bi smo imali: Bilo kakave motore, Tockove, Vetrenjace, Naslonce za vucu, Brodove, Stampanje, Hidrauliku i mnogo drugi stvari.`;
        moveGears.innerHTML = `Klikni mene da pokrenes zupcanike!`;
        toknowheader.innerHTML = `Sta treba da znate`;
        toknowtext.innerHTML = `Vrlo moguce da je masinstvo najteza grana inzenjerstva u kojoj se samo ulazi sa izvanrednim predznanjem u poljima fizike i matematike.`;
        wisdomwords.innerHTML = `Reci mudrosti`;
        wisdomexplenation.innerHTML = `Mudre reci mudrih formula`;
        halloffame.innerHTML = 'DVORANA SLAVNIH';
        tesla.innerHTML = 'Najveci um svih vremena';
        kitaw.innerHTML = 'Inzenjer iz Etiopije koji je izmislio GPS dok je radio u NASI.';
        watt.innerHTML = 'Skocki izumitelj koji je izmislio modernu parnu masinu, rotor masinu i kopiranje.';
        george.innerHTML = `Britanski izumitelj koji je napravio prvi sistem pruga unutar grada.`;
        manymore.innerHTML = 'I MNOGI DRUGI...';
        phiheader.innerHTML = 'ZLATNI PRESEK';
        phitext.innerHTML = `Dve velicine su zlatnom odnosu ako je zbir te dve velicine kroz prvu jednak prva velicina kroz drugu. <br>
        Sve oko nas je u zlatnom odnosu. <br> 
        Razlika nase podlaktice i ruke, prsta i sake, cela priroda je u tom odnosu pa cak i sam univerzum.`;

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

function startStop()
{
    let Gears = document.getElementById('gears');
    if(gearsMoving == true)
    {
        Gears.src = '/Images/Mechanical/clockworkimg.png';
        if(english)
            moveGears.innerHTML = 'Klikni mene da pokrenes zupcanike!';
        else
            moveGears.innerHTML = 'Click me to start the gears!';
        gearsMoving = false;
    }
    else
    {
        Gears.src = '/Images/Mechanical/clockwork.gif';
        if(english)
            moveGears.innerHTML = 'Klikni mene da zaustavis zupcanike!';
        else
            moveGears.innerHTML = 'Click me to stop the gears!';
        gearsMoving = true;
    }
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
moveGears.addEventListener('click', startStop);
window.addEventListener('scroll', appear);