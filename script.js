// Cache the DOM 
var button = document.getElementById("button")

var body = document.getElementById("body")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var img = document.getElementById("imagine")

var asteptari = document.getElementById("asteptari")

var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

//add eventListener to button 
button.addEventListener("click",altaViata)
an.addEventListener("mouseover",displayAge)

function displayAge(){
	an.innerHTML = year - an.innerHTML
}




function altaViata(){
	nume.innerHTML = "Functie: cititor in orez"
	prenume.innerHTML = "Locul de munca"
	
	asteptari.innerHTML = "Experiente: <ol><li>astronomice</li><li>trigonometrice</li></ol>"
	
	body.style.backgroundColor = "cyan"
	body.style.color = "green"
	
	img.src = "aur.png"
	img.style.opacity = "70%"
	img.style.borderWidth = "25px"
	img.style.width = "300px"
	img.style.height = "300px"
	
}
