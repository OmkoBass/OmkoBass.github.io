const send = document.getElementById('send');
const language = document.getElementById('language');

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
let yourname = document.getElementById('yourname');
let yourlastname = document.getElementById('yourlastname');
let youremail = document.getElementById('youremail');
let message = document.getElementById('message');
let successful = document.getElementById('successful');

let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let text = document.getElementById('text');

let popup = document.querySelectorAll('.popup');

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

function validate()
{
    let error = document.querySelector('.error');
    let success = document.querySelector('.success');
    let texterror = document.querySelector('.texterror')

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailPattern.test(email.value))
    {
        if(text.value != '')
        {
            success.style.opacity = 1;
            setTimeout(fade = () =>
            {
                success.style.opacity = 0;
            }, 3000);

            email.value = '';
            text.value = '';
        }
        else
        {
            texterror.style.opacity = 1;
            setTimeout(fade = () =>
            {
                texterror.style.opacity = 0;
            }, 3000);
        }
    }
    else
    {
        error.style.opacity = 1;
        setTimeout(fade = () =>
        {
            error.style.opacity = 0;
        }, 3000);
        if(text.value == '')
        {
            texterror.style.opacity = 1;
            setTimeout(fade = () =>
            {
                texterror.style.opacity = 0;
            }, 3000);
        }
    }
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
        yourname.innerHTML = 'Your name:';
        yourlastname.innerHTML = 'Your last name:';
        youremail.innerHTML = 'Your e-mail:';
        message.innerHTML = 'Your message:';
        send.innerHTML = 'Send';
        name.placeholder = 'Jack';
        lastname.placeholder = 'Walker';
        email.placeholder = 'someone@email.com';
        text.placeholder = 'Love the page!';
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
        yourname.innerHTML = 'Vaše ime:';
        yourlastname.innerHTML = 'Vaše prezime:';
        youremail.innerHTML = 'Vaš e-mail:';
        message.innerHTML = 'Vaša poruka:';
        send.innerHTML = 'Pošalji';
        name.placeholder = 'Neko';
        lastname.placeholder = 'Nekić';
        email.placeholder = 'neko@email.com';
        text.placeholder = 'Sviđa mi se stranica!';
        english = true;
    }
}

email.addEventListener('click', () => {
})

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