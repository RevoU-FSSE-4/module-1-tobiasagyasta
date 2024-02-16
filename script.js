
window.addEventListener('scroll',function(){scrollFunction()});
window.addEventListener('scrollend',function(){scrollEnd()});
function scrollFunction()
{
    if(document.documentElement.scrollTop > 100)
    {
        document.getElementById("main-header").style.opacity = 0.3;
    }
}

function scrollEnd()
{
    document.getElementById("main-header").style.opacity = 1;
}

function changeHamburgerState()
{
    let hamburger_menu = document.getElementById("hamburger-menu")
    if (hamburger_menu.style.display === "none")
    {
        hamburger_menu.style.display = "flex";
    }
    else
    {
        hamburger_menu.style.display = "none";
    }

    
}