

function clicked(){
    const colours = ["red", "green", "blue", "yellow", "orange", "magenta", "pink", "SlateBlue", "DarkCyan", "GreenYellow", "Plum"]
    const hi = document.getElementById('button')
    const rand = Math.round(Math.random() * 10)

    hi.style.color = colours[rand]
}


setInterval(() => {
    // const greens = ["#0B6623", "#708238", "#3F704D", "#8F9779", "#29AB87", "#00755E", "#3B7A57", "#004B49", "#1C352D", "#8A9A5B", "#39FF14", "#50C878", "#C7EA46"]
    const colour = ["#d3abdd", "#e4a1f5", "#c487d3", "#df79f8", "#a850be", "#ca4fe9" ]
    const money = document.getElementById('money')
    const rand = Math.round(Math.random() * 10)
    money.style.color = colour[rand]
    // money.style.backgroundColor= colours[rand]
}, 500) 

// setInterval(() => {
//     const pinks = ["#F0D3F7", "#d3abdd", "#e4a1f5", "#c487d3", "#df79f8", "#a850be", "#ca4fe9" ]
//     const body = document.body
//     const rand = Math.round(Math.random() * 10)
//     body.style.backgroundColor = pinks[rand]
//     // money.style.backgroundColor= colours[rand]
// }, 10000)
