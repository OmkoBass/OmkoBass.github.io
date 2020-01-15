const send = document.getElementById('send');
const language = document.getElementById('language');

//Text
let oet = document.getElementById('oet');
let prog = document.getElementById('prog');
let mech = document.getElementById('mech');
let about = document.getElementById('about');
let main = document.getElementById('main');
let smart = document.getElementById('smart');
let desc1 = document.getElementById('desc1');
let efficient = document.getElementById('efficient');
let desc2 = document.getElementById('desc2');
let useful = document.getElementById('useful');
let desc3 = document.getElementById('desc3');
let contactus = document.getElementById('contactus');
let yourfullname = document.getElementById('yourfullname');
let youremail = document.getElementById('youremail');
let yourmessage = document.getElementById('yourmessage');
let successful = document.getElementById('successful');

//Labels
let fullname = document.querySelector('.fullname');
let email = document.querySelector('.email');
let message = document.querySelector('.message');

//Inputs
let fullnameinput = document.getElementById('fullnameinput');
let emailinput = document.getElementById('emailinput');
let messageinput = document.getElementById('messageinput');

//Regex patterns
const fullnameinputpattern = /^[A-Z]{1}[a-z]{1,}\s{1}[A-Z]{1}[a-z]{1,}$/;
const emailinputpattern = /^$/;
const messageinputpattern = /^([a-zA-Z0-9.]{1,255})$/;

//Erros
let nameerror = document.getElementById('nameerror');
let emailerror = document.getElementById('emailerror');
let messageerror = document.getElementById('messageerror');

//Success
let successText = document.getElementById('successtext');

let english = true;

function appear()
{
    let electricalText = document.querySelector('.electrical-text');
    let programmingText = document.querySelector('.programming-text');
    let mechanicalText = document.querySelector('.mechanical-text');

    let electricalPosition = electricalText.getBoundingClientRect().top;
    let programmingPosition = programmingText.getBoundingClientRect().top;
    let mechanicalPosition = mechanicalText.getBoundingClientRect().top;
    
    let screenPosition = window.innerHeight / 1.6;

    if(electricalPosition < screenPosition)
        electricalText.classList.add('appear');
    if(electricalPosition > screenPosition * 1.6)
        electricalText.classList.remove('appear');

    if(programmingPosition < screenPosition)
        programmingText.classList.add('appear');
    if(programmingPosition > screenPosition * 1.6)
        programmingText.classList.remove('appear');

    if(mechanicalPosition < screenPosition)
        mechanicalText.classList.add('appear');
    if(mechanicalPosition > screenPosition * 1.6)
        mechanicalText.classList.remove('appear');
}

function changeLanguage()
{   
    if(english)
    {
        oet.innerHTML = 'Electrical Engineering';
        prog.innerHTML = 'Programming';
        mech.innerHTML = 'Mechanical Engineering';
        about.innerHTML = 'About me';
        main.innerHTML = 'THE MOST IMPORTANT BRANCHES OF SCIENCE';
        smart.innerHTML = 'Smart';
        desc1.innerHTML = `Engineering is not for everyone which means that only the best and the most hard working people with a quality mathematical-logical unit can be succesful. <br> 
        That type of intelligence has pushed the civilization forward and these three branches of science: Electrical Engineering, Programming and Mechanical Engineering will continue to strive for that goal.`
        efficient.innerHTML = 'Efficient';
        desc2.innerHTML = `We strive for an ideal world that gives us the best possible performances for the leats ammount of resources spent. And we are slowly getting there every day.<br>
        Today we can do that, we can be efficient and let machines do the easy and boring stuff that is constantly being repeated. <br>
        Those machines need to be programmed to work, to recognize a pattern and that's exactly what programming will do and help us.`;
        useful.innerHTML = 'Useful';
        desc3.innerHTML = `Everything that we do, we do for two reason. To improve out quality of life and make things easier for us. Without engineering we would never reach the luxuries we have today. <br>
        Stuff today the we view as "Nothing special" a man 100 years before us would thing it's magic.`;
        contactus.innerHTML ='Contact us!';
        yourfullname.innerHTML = 'Your full name:';
        youremail.innerHTML = 'Your email:';
        yourmessage.innerHTML = 'Your message:';
        send.innerHTML = 'Send';
        //errors
        nameerror.innerHTML = 'Bad name.';
        emailerror.innerHTML = 'Bad email.';
        messageerror.innerHTML = 'Bad message.';
        successText = 'Success!';
        english = false;
    }
    else
    {
        oet.innerHTML = 'Elektrotehnika';
        prog.innerHTML = 'Programiranje';
        mech.innerHTML = 'Mašinstvo';
        about.innerHTML = 'O meni';
        main.innerHTML = 'NAJVAŽNIJE GRANE NAUKE';
        smart.innerHTML = 'Pametno';
        desc1.innerHTML = `Inženjerstvo nije za svakog, što znači da samo najbolji i najradniji ljudi sa kvalitetnom matematičko-logičkom jedinicom u mozgu mogu da budu ušpesni. <br>
        Ta vrsta inteligencije je gurnula civilizaciju napred i ove tri nauke: Elektrotehnika, Programiranje i Mašinstvo će nastaviti u tom cilju.`;
        efficient.innerHTML = 'Efikasno'
        desc2.innerHTML = `Težimo idealnom svetu koji nam daje najbolje performanse za najmanje troškove i cenu. I svaki dan smo sve bliži tome.
        Danas mi to možemo da uradimo, možemo da budemo efikasni i da pustimo mašine da rade lake i dosadne stvari koje se konstantno ponavljaju. <br>
        Baš te mašine moraju biti isprogramirane da bi radile, da prepoznaju ponavljanja i putanju i baš za to nam služi programiranje.`;
        useful.innerHTML = 'Korisno';
        desc3.innerHTML = `Sve to radimo iz dva razloga. Da nam poboljša kvalitet života i učini stvari lakšim. Bez inženjerstva nikad ne bi smo došli do luksuza koje imamo danas.<br>   
        Današnje stvari koje gledamo kao "Ništa posebno" bi čoveku pre 100 godina bile prava magija.`;
        contactus.innerHTML ='Kontaktirajte nas!';
        yourfullname.innerHTML = 'Vaše puno ime:';
        youremail.innerHTML = 'Vaš e-mail:';
        yourmessage.innerHTML = 'Vaša poruka:';
        send.innerHTML = 'Pošalji';
        //errors
        nameerror.innerHTML = 'Loše ime.';
        emailerror.innerHTML = 'Loš email.';
        messageerror.innerHTML = 'Loša poruka.';
        successText = 'Uspešno!';
        english = true;
    }
}

//Full name tooltip, have to trigger it this way
fullnameinput.addEventListener('click', () => {
    if(!english)
    {
        $(document).ready(function(){
            $('.n').tooltip({title: "First letters must be capital case."}); 
        });
    }
    else
    {
        $(document).ready(function(){
            $('.n').tooltip({title: "Prva slova moraju biti velika."}); 
        });
    }
});

//Email tooltip, have to trigger it this way
emailinput.addEventListener('click', () => {
    if(!english)
    {
        $(document).ready(function(){
            $('.e').tooltip({title: "Email can start with anything, maximum 5 numbers and 3 symbols in a sequence."}); 
        });
    }
    else
    {
        $(document).ready(function(){
            $('.e').tooltip({title: "Email moze da pocne bilo kako. Maksimalno 5 uzastopnih slova i 3 simbola."}); 
        });
    }
});

//Message tooltip, have to trigger it this way
messageinput.addEventListener('click', () => {
    if(!english)
    {
        $(document).ready(function(){
            $('.m').tooltip({title: "Maximum 255 letters."}); 
        });
    }
    else
    {
        $(document).ready(function(){
            $('.m').tooltip({title: "Maksimum 255 slova."}); 
        });
    }
});

function validate()
{
    let fullNameValid = false;
    let emailValid = false;
    let messageValid = false;

    //Should be using camelCase
    
    if(fullnameinputpattern.test(fullnameinput))
        fullNameValid = true;
    else
    {
        nameerror.classList.add('error-appear');
        setTimeout(() => {
            nameerror.classList.remove('error-appear');
        }, 2500);
    }
    if(emailinputpattern.test(emailinput))
        emailValid = true;
    else
    {
        emailerror.classList.add('error-appear');
        setTimeout(() => {
            emailerror.classList.remove('error-appear');
        }, 2500);
    }
    if(messageinputpattern.test(messageinput))
        messageValid = true;
    else
    {
        messageerror.classList.add('error-appear');
        setTimeout(() => {
            messageerror.classList.remove('error-appear');
        }, 2500);
    }
    if(fullNameValid && emailValid && messageValid)
    {
        successText.classList.add('success-appear');
        setTimeout(() => {
            successText.classList.remove('error-appear');
        }, 2500);
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
window.addEventListener('scroll', appear);
send.addEventListener('click', validate);
language.addEventListener('click', changeLanguage);