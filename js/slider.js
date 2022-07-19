let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
let currentImageNumber = 0;
let leftButton, rightButton;
let widget = document.getElementsByClassName('photo')[0];
[leftButton, rightButton] = document.getElementsByClassName('scroll-button');

let opacitys = []                     //создаём массив с значаниями opacity для анимации
for (op = 1; op>=-1; op -= 0.05) {
	if (op > 0) {
		opacitys.push(String(op))
	} else {
		opacitys.push(String(-op))
	}
}
opacitys.pop()
opacitys.push('1')

function setImage() {
	let index = 0;
	let timer = setInterval(function() {      // анимация и смена картинки
  		if (index > opacitys.length) {
  			clearInterval(timer);
  		} else {
  			if (index == Math.floor(opacitys.length/2)+1) {
  				widget.setAttribute('src', `asset/${images[currentImageNumber]}`);
  			}
  			widget.style.opacity = opacitys[index];
  			index++
  		}
	}, 15);
}

function changeImage(delta) {         //цикличная замена номера картинки по нажатию на кнопку
	currentImageNumber += delta;
	if (currentImageNumber >= images.length) {
		currentImageNumber = 0;
	} else if (currentImageNumber < 0) {
		currentImageNumber = images.length-1;
	}
	setImage()
}

leftButton.addEventListener("click", () => changeImage(-1))
rightButton.addEventListener("click", () => changeImage(1))



