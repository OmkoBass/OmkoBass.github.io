const language = document.getElementById('language');

let homepage = document.getElementById('homepage');
let oet = document.getElementById('oet');
let prog = document.getElementById('prog');
let mech = document.getElementById('mech');
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
let wireheader = document.getElementById('wireheader');
let wiretext = document.getElementById('wiretext');
let resistorheader = document.getElementById('resistorheader');
let resistortext = document.getElementById('resistortext');
let capacitorheader = document.getElementById('capacitorheader');
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
        oet.innerHTML = 'Electrical Engineering';
        prog.innerHTML = 'Programming';
        mech.innerHTML = 'Mechanical Engineering';
        resources.innerHTML = 'Resources';
        main.innerHTML = 'ELECTRICAL ENGINEERING';
        toknowheader.innerHTML = 'What you need to know';
        desc1.innerHTML = `For electrical engineering you need exquisite knowledge of imaginary numbers and their appliance in problems in order to get the solution. <br>
        It's not easy to know electricity and her behaviour, knowledge of physics is important in order to comprehend the variety of concepts. <br>
        A hard science, but very useful.`;
        math.innerHTML = 'Math';
        desc2.innerHTML = 'The language of the universe. Math is most likely the most important area to know in order to succeed in electrical engineering.';
        physics.innerHTML = 'Physics';
        desc3.innerHTML = `The base of the entire universe. Everything around us is physics, without her there's no electricity and without electricity there's no electrical engineering.`;
        programming.innerHTML = 'Programming';
        desc4.innerHTML = `Programming knowledge is desirable, the logical part counts more than the 'real' programming part.`;
        elementstext.innerHTML = 'The most basic parts of electrical circuits';
        wireheader.innerHTML = 'Wire';
        wiretext.innerHTML = `The most basic thing in electrical circuits. Wires are there to transport the electricity. <br>
        Without them, there's no transporting which means there's no activity in the circuit.`;
        resistorheader.innerHTML = 'Resistor';
        resistortext.innerHTML = `The Resistor is the element that lowers the electricity, we can imagine it by thinking that it squeezes the current's path and the voltage pushes the current forward. <br>
        The unit of resistance is the Ohm`;
        capacitorheader.innerHTML = 'Capacitor';
        capacitortext.innerHTML = `The capacitor is the element that collects electricity and then release it out. <br>
        Every condensate can hold a different amount of electricity. The unit for captivity is feared.`;
        tesla.innerHTML = 'The Greates Mind of Humanity';
        teslatext.innerHTML = `The man that invented the alternating current, Tesla's transformer, The Remote, Teleforce, Violet Rays and many many other things. <br>
        He spoke fluently 8 languages, he could imagine the most complex simulations in his head, solved complex integrals in his head and all of his inventions kept just there. <br>
        The best engineer humanity has ever seen, without him we would not be able to see this right now. He was ahead of everyone for hundreds of years.`;
        fake.innerHTML = 'Fake Man';
        faketext.innerHTML = `The man that invented the light bulb. Man that offered Tesla 300 000$ back then in exchange for improving direct current which tesla could of course do. <br>
        Edison is a "Fake Man" for a reason, because he didn't give that money to him. Tesla after that invented the alternating current and while everyone was boasting about their 5 transferred volts, Tesla showed his 20 000 volts. <br>
        Edison fell so low that he was killing animals with high voltage claiming that it's "Too dangerous".`;
        english = false;
    }
    else
    {
        homepage.innerHTML = 'Početna';
        oet.innerHTML = 'Elektrotehnika';
        prog.innerHTML = 'Programiranje';
        mech.innerHTML = 'Mašinstvo';
        resources.innerHTML = 'Resursi';
        main.innerHTML = 'ELEKTROTEHNIKA';
        toknowheader.innerHTML = 'Šta treba da znate';
        desc1.innerHTML = `Za elektrotehniku je potrebno izvrsno znanje imaginarnih brojeva i primena njih da bi dosli do rešenja našeg problema. <br>
        Nije lako znati struju i njeno ponašanje, potrebno je znanje iz fizike da bi se mogli shvatiti razni koncepti. <br>
        Teška oblast ali vrlo korisna.`; 
        math.innerHTML = 'Matematika';
        desc2.innerHTML = 'Jezik celog univerzuma. Matematika je vrlo moguće najpotrebnija oblast za uspeh u elektrotehnici.';
        physics.innerHTML = 'Fizika';
        desc3.innerHTML = 'Osnova celog univerzuma. Sve oko nas je fizika, bez fizike nema struje a bez struje nema elektrotehnike.';
        programming.innerHTML = 'Programiranje';
        desc4.innerHTML = 'Znanje u programiranju je poželjno, više logičko znanje i rešavanje problema nego znanje "pravog" znanja o programiranju.';
        elementstext.innerHTML = 'Najosnovniji elementi električnog kola';
        wireheader.innerHTML = 'Žica'
        wiretext.innerHTML = 'Najosnovnija stvar u električnom kolu. Žice su nam tu da bi prenele struju.<br> Bez njih nema nikakvog prenosa što znači da nema aktivnosti u kolu.';
        resistorheader.innerHTML = 'Otpornik'
        resistortext.innerHTML = `Otpornik je element koji smanjuje struju, njega možemo da zamislimo kao da zateže prolaz struji a napon kao da gura struju napred. <br>
        Jedinica za otpornost je OM.`;
        capacitorheader.innerHTML = 'Kondenzator';
        capacitortext.innerHTML = `Kondenzator je element koji prikuplja u sebi struju i pušta je. <br>
        Svaki kondenzator može da sadrži različitu količinu struje. Jedinica za kapacitivnost je Farad.`;
        tesla.innerHTML = 'Najveći um svih vremena';
        teslatext.innerHTML = `Čovek koji je izmislio Naizmeničnu struju, Teslin transformator, Daljinski upravljač, Teleforce, Violet ray i mnogo toga.<br>
        Pričao je tečno 8 jezika, u glavi je video najkompleksnije simulacije, rešavao komplksne intergrale u glavi i sve svoje izume čuvao baš u njoj. <br>
        Najbolji inženjer svih vremena, bez njega ne bi smo mogli da čitamo ovo sad. Bio je ispred svih stotinama godina.`;
        fake.innerHTML = 'Lažni čovek';
        faketext.innerHTML = `Čovek koji je izmislio sijalicu. Čovek koji je Tesli nudio tadašnjih 300 000$ da unapredi jednosmernu struju koju je Tesla naravno unapredio. <br>
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
    }, 250);
});

changeLanguage();

language.addEventListener('click', changeLanguage);
window.addEventListener('scroll', appear);