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
    const preload = document.querySelector('.preload');
    preload.classList.add('loaded');
    const overflow = document.querySelector('*');
    overflow.classList.add('overflowadded');
});

window.addEventListener('scroll', appear);