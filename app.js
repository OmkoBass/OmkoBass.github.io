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

let textarea = document.getElementById("messagebox");
textarea.addEventListener('focus', alignleft);
textarea.addEventListener('focusout', aligncenter);

