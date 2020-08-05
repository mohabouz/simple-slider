var leftBtn = document.getElementById("left"),
    righBtn = document.getElementById("right"),
    sldierContainer = document.getElementById("slider_container"),
    sliderItem =  document.getElementsByClassName("slider_item"),
	circlesContainer = document.getElementsByClassName("cercles")[0];

var goRightInterval = setInterval(goRight,7000);
var circElements = [];
var counter = 0;
var slidesNum = sliderItem.length;

sldierContainer.style.width = (slidesNum*900) + "px";

for (var i = 0 ; i < sliderItem.length ; i++) {
	var elem = document.createElement("span");
	elem.setAttribute("data-circ", i);
	circlesContainer.appendChild(elem);
	elem.addEventListener("click", function(){
		var n = this.dataset.circ;
		goTo(n);
	});
	circElements.push(elem);
}

circElements[0].className = "active";

function goTo(n) {
	sldierContainer.style.marginLeft = -n*900 + "px";
	counter = n;
	refreshCircles();
	resetInterval();
}

function goLeft (){
    if (counter == 0){
      sldierContainer.style.marginLeft = -(slidesNum-1)*900 + "px";
	  counter = slidesNum - 1;
    } else {
      sldierContainer.style.marginLeft = -900*(counter-1) + "px";
	  counter--;
    }
	
	refreshCircles();
}

function goRight (){
	if (counter == slidesNum-1){
		sldierContainer.style.marginLeft = 0;
		counter = 0;
    } else {
		sldierContainer.style.marginLeft = -900*(counter+1) + "px";
		counter++;
    }
	
	refreshCircles();
}

leftBtn.addEventListener('click',function(){
	goLeft();
	resetInterval();
});

righBtn.addEventListener('click',function(){
	goRight();
	resetInterval();
});

function resetInterval() {
	clearInterval(goRightInterval);
	goRightInterval = setInterval(goRight,7000);
}

function refreshCircles(){
	for(var i = 0 ; i < circElements.length ; i++) {
		circElements[i].className = (i == counter ? "active" : "");
	}
}

