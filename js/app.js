window.addEventListener("load", loading);

function loading (){
	var	boton = document.getElementById("enviar");
	boton.addEventListener("click", publicacion);
}
function publicacion(evento){
	evento.preventDefault();
	var escribir = document.getElementById("mensaje");
	var cuadro = document.getElementById("cuadro");

	var row= document.createElement("div");
	row.classList.add("valign", "wrapper", "row");

	var contenedorImg= document.createElement("div");
	contenedorImg.classList.add("col", "s2");	

	var image= document.createElement("img");
	image.setAttribute("src","img/karol.jpg");
	image.classList.add("circle", "responsive-img");

	var contenedorTexto= document.createElement("div");
	contenedorTexto.classList.add("col", "s10");	

	var texto =document.createElement("div");
	texto.innerHTML = escribir.value;

	
	row.appendChild(contenedorImg);
	row.appendChild(contenedorTexto);
	contenedorImg.appendChild(image);
	contenedorTexto.appendChild(texto);
	cuadro.appendChild(row);

}













