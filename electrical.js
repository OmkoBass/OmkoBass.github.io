const language = document.getElementById('language');

let homepage = document.getElementById('homepage');
let resources = document.getElementById('resources');
let main = document.getElementById('main');
let toknowheader = document.getElementById('toknowheader');
let desc1 = document.getElementById('desc1');
let math = document.getElementById('math');
let desc2 = document.getElementById('desc2');
let physics = document.getElementById('physics');
let desc3 = document.getElementById('desc3');
let programming = document.getElementById('programming');
let desc4 = document.getElementById('desc4');
let elementstext = document.getElementById('elementstext');
let wiretext = document.getElementById('wiretext');
let resistortext = document.getElementById('resistortext');
let capacitortext = document.getElementById('capacitortext');
let tesla = document.getElementById('tesla');
let teslatext = document.getElementById('teslatext');
let fake = document.getElementById('fake');
let faketext = document.getElementById('faketext');


let english = true;

function changeLanguage()
{
    if(english)
    {
        homepage.innerHTML = 'Home';
        resources.innerHTML = 'Resources';
        main.innerHTML = 'THE KNOWLEDGE OF ELECTRICITY';
        toknowheader.innerHTML = 'What you need to know';
        desc1.innerHTML = `For electrical engineering you need exsquisite knowlede of imaginary numbers and their appliance in problems in order to get the solution. <br>
        It's not easy to know electricity and her behaviour, knowledge of physics is imporatnt in order to comprehend the variety of concepts. <br>
        A hard science but very useful.`;
        math.innerHTML = 'Math';
        desc2.innerHTML = 'The language of the universe. Math is most likely the most imporant area to know in order to succed in electrical engineering.';
        physics.innerHTML = 'Physics';
        desc3.innerHTML = `The base of the entire universe. Everything around us is physiccs, without her there's no electricity and without electricity there's no electrical engineering.`;
        programming.innerHTML = 'Programming';
        desc4.innerHTML = `Programming knowledge is desierable, the logical part counts more than the 'real' programming part.`;
        elementstext.innerHTML = 'The most basic parts of electrical circuits';
        wiretext.innerHTML = `The most basic thing in electrical circuits. Wires are there to transport the electricity. <br>
        Without them there's no transporting which means there's no activity in the circuit.`;
        resistortext.innerHTML = `Resistor is the element that lowers the electricity, we can imagine it by thinking that it squeezes the current's path and the voltage pushes the current forward. <br>
        The unit for resistance is Ohm`;
        capacitortext.innerHTML = `Capacitor is the element that collects electricity and then rleases it out. <br>
        Every condensator can hold a diffrent ammount of electricity. The unit for capcitivity is Fahrad.`;
        tesla.innerHTML = 'The Greates Mind of Humanity';
        teslatext.innerHTML = `Man that invented the alternating current, Tesla's transformer, The Remote, Teleforce, Violet Rays and many many other things. <br>
        He spoke fluently 8 languages, he could imagine the most complex simulations in his head, solved complex intergrals in his head and all of his inventions kept just there. <br>
        The best engineer humanity has ever seen, without him we would not be able to see this right now. He was ahead of everyone for hungreads of years.`;
        fake.innerHTML = 'Fake Man';
        faketext.innerHTML = `Man that invented the lightbulb. Man that offered Tesla 300 000$ back then in exchange for improving direct current which tesla could ofcourse do. <br>
        Edison is a "Fake Man" for a reason because he didn't give that money to him. Tesla after that invented the alternating current and while everyone was boasting about their 5 transfered volts, Tesla showed his 20 000 volts. <br>
        Edison fell so low that he was killing animals with high voltage claiming that it's "Too dangerous".`;
        english = false;
    }
    else
    {
        homepage.innerHTML = 'Početna';
        resources.innerHTML = 'Resursi';
        main.innerHTML = 'ZNANJE O ELEKTRIČNOJ ENERGIJI';
        toknowheader.innerHTML = 'Šta treba da znate';
        desc1.innerHTML = `Za elektrotehniku je potrebno izvrsno znanje imaginarnih brojeva i primena njih da bi dosli do rešenja našeg problema. <br>
        Nije lako znati struju i njeno ponašanje, potrebno je znanje iz fizike da bi se mogli shvatiti razni koncepti. <br>
        Teška oblast ali vrlo isplativa.`; 
        math.innerHTML = 'Matematika';
        desc2.innerHTML = 'Jezik celog univerzuma. Matematika je vrlo moguce najpotrebnija oblast za uspeh u elektrotehnici.';
        physics.innerHTML = 'Fizika';
        desc3.innerHTML = 'Osnova celog univerzuma. Sve oko nas je fizika, bez fizike nema struje a bez struje nema elektrotehnike.';
        programming.innerHTML = 'Programiranje';
        desc4.innerHTML = 'Znanje u programiranju je poželjno, više logičko znanje i rešavanje problema nego "pravog" znanja o programiranju.';
        elementstext.innerHTML = 'Najosnovniji elementi električnog kola';
        wiretext.innerHTML = 'Najosnovnija stvar u električnom kolu. Žice su nam tu da bi prenele struju.<br> Bez njih nema nikakvog prenosa što znači da nema aktivnosti u kolu.';
        resistortext.innerHTML = `Otpornik je element koji smanjuje struju, njega možemo da zamislimo kao da zateze prolaz struji a napon kao da gura struju napred. <br>
        Jedinica za otpornost je OM.`;
        capacitortext.innerHTML = `Kondenzator je element koji prikuplja u sebi struju i pušta je. <br>
        Svaki kondenzator moze da sadrži različitu količinu struje. Jedinica za kapacitivnost je Farad.`;
        tesla.innerHTML = 'Najveci um svih vremena';
        teslatext.innerHTML = `Čovek koji je izmislio Naizmeničnu struju, Teslin transformator, Daljinski upravljač, Teleforce, Violet ray i mnogo mnogo mnogo toga.<br>
        Pričao je tečno 8 jezika, u glavi je video najkompleksnije simulacije, rešavao komplksne intergrale u glavi i sve svoje izume čuvao baš u njoj. <br>
        Najbolji inženjer svih vremena, bez njega ne bi smo mogli da čitamo ovo sad. Bio je ispred svih stotinama godina.`;
        fake.innerHTML = 'Lažni čovek';
        faketext.innerHTML = `Čovek koji je izmislio sijalicu. Čovek koji je tesli nudio tadašnjih 300 000$ Nikoli Tesli da unapredi jednosmernu struju koju je Tesla naravno unapredio. <br>
        Edison je s razlogom "Lažni Čovek" jer mu te pare nije dao. Tesla je nakon toga izmislio naizmeničnu struju i dok su se svi hvalili sa svojih 5 prenetih volti Tesla je pokazao svojih 20 000 prenetih volti.<br>
        Edison je došao do toga da je plašio narod visokim naponom ubijajuci životinje javno da bi se narod plasio od naizmenične struje.`;
        english = true;
    }
}

function appear()
{
    let toKnowText = document.querySelector('.toknow-text');
    let toKnowPosition = toKnowText.getBoundingClientRect().top;
    
    let screenPosition = window.innerHeight / 1.6;

    if(toKnowPosition < screenPosition)
        toKnowText.classList.add('appear');
    if(toKnowPosition > screenPosition * 1.6)
        toKnowText.classList.remove('appear');
}

window.addEventListener('load', () => {
    scroll(0,0);
    setTimeout(() => {
        const preload = document.querySelector('.preload');
        preload.classList.add('loaded');
        const overflow = document.querySelector('*');
        overflow.classList.add('overflowadded');
    }, 500);
});

changeLanguage();

language.addEventListener('click', changeLanguage);
window.addEventListener('scroll', appear);