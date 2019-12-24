let moveGears = document.getElementById('moveGears');
let gearsMoving = false;

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
        moveGears.innerHTML = 'Click me to start the gears!';
        gearsMoving = false;
    }
    else
    {
        Gears = document.getElementById('gears');
        Gears.src = '/Images/Mechanical/clockwork.gif';
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
    }, 500);
});

moveGears.addEventListener('click', startStop);
window.addEventListener('scroll', appear);