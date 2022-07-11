function clicked(){
    const colours = ["red", "green", "blue", "yellow", "orange", "magenta", "pink", "SlateBlue", "DarkCyan", "GreenYellow", "Plum"]
    const hi = document.getElementById('button')
    const rand = Math.round(Math.random() * 10)

    hi.style.color = colours[rand]
}


function clipboardId() {
    //select the element with the id "copyMe", must be a text box
    var textToCopy = document.getElementById("copydiscord");
    //select the text in the text box
    textToCopy.select();
    //copy the text to the clipboard
    document.execCommand("copy");
}