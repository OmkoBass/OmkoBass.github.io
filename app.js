const send = document.getElementById('send');

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
    const email = document.getElementById('email');
    const text = document.getElementById('text');

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailPattern.test(email.value) && (text.value != ''))
    {
        let success = document.querySelector('.success');
        success.style.opacity = 1;
        setTimeout(fade = () =>
        {
            success.style.opacity = 0;
        }, 3000);
    }
    else
    {
        let error = document.querySelector('.error');
        error.style.opacity = 1;
        setTimeout(fade = () =>
        {
            error.style.opacity = 0;
        }, 3000);
    }
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

window.addEventListener('scroll', appear);
send.addEventListener('click', validate);