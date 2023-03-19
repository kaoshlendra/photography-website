//hamburger
const menuBtn = document.querySelector('.menu-btn');
const hamburger= document.querySelector('.hamburger');
const opnemenu = document.querySelector('.nevbar_link');
const elmBody = document.querySelector('.elmbody');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
	menuBtn.classList.add('open');
	elmBody.classList.add('open');

	menuOpen = true;}
	else {
	menuBtn.classList.remove('open');
	elmBody.classList.remove('open');

	menuOpen = false;}	

});

menuBtn.addEventListener('click', () => {
	opnemenu.classList.toggle('open');
});
//for slider

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  if (n > slides.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  		console.log(slides.length);
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";    
}


//scroll effect
function bgchanger(argument) {
	if(this.scrollY > this.innerHeight / 1.5){
		document.body.classList.add("bg-active");
}else{
		document.body.classList.remove("bg-active");
}
};

window.addEventListener("scroll", bgchanger);
//scroll effect

//slider by dev ed
/*
const devedslider = document.querySelector('image');
const devedsliderimage = document.querySelectorAll('image img');

//button
const prevBtn = document.querySelector('prev');
const nextBtn = document.querySelector('next');

let counter = 1;
const size = devedsliderimage[0].clientWidth;

devedslider.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';

nextBtn.addEventListener('click', () => {
	slides.style.transition = "transform 0.4s ease-in-out";
	counter++;
  slides.style.transform = 'translateX('+(-size* slideIndex)+'px)';

});
*/







/*
const size = devedsliderimage[0].clientWidth;
<a  href="javascript:void(0);" onclick="return false">
*/



