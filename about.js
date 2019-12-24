window.addEventListener('load', () =>
{
    let normal = document.querySelector('.normal');
    setTimeout(() => {
        normal.classList.add('appear');
    }, 750);
});