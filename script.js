let size = document.getElementById("sizeInfo");
window.addEventListener("resize",()=>
size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
)
window.onload = size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`