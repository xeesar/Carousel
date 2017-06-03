var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	console.log(slideIndex-1);
	var i;
	var slides = document.getElementsByClassName("Slides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}

	if(n<1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length;i++){
		slides[i].style.display = "none";
	}

	for(i = 0; i <dots.length;i++){
		dots[i].className = dots[i].className.replace("active","");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

document.onclick = function (event) {
	var target = event.target;
	if(target.className == "Img")
	{
		var modal = document.getElementsByClassName("myModal")[0];
		var modalimg = document.getElementById("modalImg");
		var modaltext = document.getElementById("modalText");
		modal.style.display = "block";
		modalimg.src = target.src;
		modaltext.innerHTML = target.alt;
	}
}

document.getElementById("close").onclick = function () {
	var modal = document.getElementsByClassName("myModal")[0];
	modal.style.display = "none";
}

document.getElementsByClassName("myModal")[0].onclick =function () {
	if(this.style.display == "block"){
		this.style.display = "none";
	}
}
