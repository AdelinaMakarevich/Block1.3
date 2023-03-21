let menuOn = document.querySelector('.menu-on');
let menu = document.querySelector('.menu');
let menuOff = document.querySelector('.menu-off');
let lid = document.querySelector('.lid');
let bth1 = document.querySelector('.bth1');
let bth2 = document.querySelector('.bth2');
let bth3 = document.querySelector('.bth3');
let text = document.querySelector('.conteiner__text');
let logo = document.querySelector('.abusteku-deagulus');
let cadr = document.querySelector('.abusteku-deagulusnew');
menuOn.addEventListener('click', function(){
	menu.classList.add('active');
})
menuOff.addEventListener('click', function(){
	menu.classList.remove('active');
})
bth1.addEventListener('click', function(){
	text.classList.toggle('show');
})
bth2.addEventListener('click', function(){
	logo.classList.toggle('show');
})
bth3.addEventListener('click', function(){
	cadr.classList.toggle('show');
})