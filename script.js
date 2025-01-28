links = [
    ["main.html", "home"],
]

// Switching page function
function ChangeSwitch(number)
{
    setTimeout(function () { 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);

    setTimeout(function () {
        if (links[number])
        {
            $("#content").load(links[number][0]);
            document.title = "Team Springs - "+links[number][1];
        }
    }, 500);
};