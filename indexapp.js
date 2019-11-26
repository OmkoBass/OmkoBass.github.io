let textarea = document.getElementById("messagebox");

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

function fadeout(id)
{
    var target = document.getElementById(id);
    var wait = setInterval(function ()
    {
        var effect = setInterval(function ()
        {
            if(!target.style.opacity)
                target.style.opacity = 1;
            else if(target.style.opacity > 0)
                target.style.opacity -= 0.1;
            else
                clearInterval(effect);
        }, 30);
        clearInterval(wait);
    }, 1000);
    id.style.height = "0px";
}

function validate()
{
    var msg = document.getElementById("messagebox").value;
    var success = document.getElementById("alertsuccess");
    var danger = document.getElementById("alertdanger");

    if(msg !== "")
    {
        success.style.opacity = "1";
        danger.style.opacity = "0";
        success.style.height = "60px";
        danger.style.height = "0px";
        document.getElementById("messagebox").value = "";
        document.getElementById("email").value = "";
        textarea.style.border = "1px solid green";
        fadeout("alertsuccess");
    }
    else
    {
        success.style.opacity = "0";
        danger.style.opacity = "1";
        danger.style.height = "60px";
        success.style.height = "0px";
        textarea.style.border = "1px solid red";
        fadeout("alertdanger");
    }
}

function alignleft()
{
    textarea.style.textAlign = "left";
}

function aligncenter()
{
    textarea.style.textAlign = "center";
}

window.addEventListener('scroll', appear);
textarea.addEventListener('focus', alignleft);
textarea.addEventListener('focusout', aligncenter);
