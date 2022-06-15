document.body.onload = () => {
    if (localStorage.getItem('darkModeState') != null) {
        var stat =  localStorage.getItem('darkModeState');
        console.log("dark mode on load is: " + stat);
    } else {
        localStorage.setItem('darkModeState', false);
        var stat = false;
        console.log("dark mode auto set to: " + stat);
    }

    if(stat === 'true') {
        console.log("dark mode");
        setDarkMode();
    } else {
        console.log("light mode");
    }
}

setDarkMode = () => {
    var bodyElement = document.body;
    var linkElement = document.getElementsByClassName("link");
    var darkElement = document.getElementById("icon");
    
    bodyElement.classList.toggle("dark-mode");
    for (let i = 0; i < linkElement.length; i++) {
        linkElement[i].classList.toggle("dark-mode-text");
    }
    darkElement.classList.toggle("dark-mode-text");
}

setDarkModeStatus = state => {
    localStorage.setItem('darkModeState', state);
}

checkDarkMode = () => {
    var darkModeState = localStorage.getItem('darkModeState');

    if(darkModeState == 'false') {
        darkModeState = true;
        setDarkModeStatus(darkModeState);
        
    } else {
        darkModeState = false;
        setDarkModeStatus(darkModeState);
    }
    setDarkMode();
}