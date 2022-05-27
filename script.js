function randomNumber(){
	return Math.floor(Math.random() * colorhex.length)
}

let button = document.getElementById("btn-js")
let color = document.querySelector(".color")

let colorhex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
]

function generatecolor(){
	let gencolor = "#"

	for(a = 0; a < 6; a++){
		gencolor += colorhex[randomNumber()]
	}

	return gencolor
}

function ifclickbutton(){
	let gencolor = generatecolor()
	document.body.style.backgroundColor = gencolor
  	document.querySelector(".color").innerHTML = gencolor
}