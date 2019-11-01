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
    }
    else
    {
        success.style.opacity = "0";
        danger.style.opacity = "1";
        danger.style.height = "60px";
        success.style.height = "0px";
    }
}