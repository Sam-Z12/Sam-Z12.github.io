const toggleTheme = document.querySelector('#theme-toggle');

toggleTheme.addEventListener('click', () => {
    document.body.classList.contains("light-theme") 
    ? setDarkMode()
    : setLightMode()

})

function setDarkMode () {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme");
    toggleTheme.setAttribute("aria-label","Switch to light theme");

}

function setLightMode () {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    toggleTheme.setAttribute("aria-label","Switch to dark theme");
}


function setThemePref() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
        return;
    };

    setLightMode();
}

document.onload = setThemePref();