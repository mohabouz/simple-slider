var leftBtn = document.getElementById("left"),
    righBtn = document.getElementById("right"),
    sldierContainer = document.getElementById("slider_container"),
    sliderItem =  document.getElementsByClassName("slider_item");

function goLeft (){
    if (parseInt(sldierContainer.style.marginLeft) == 0){
      sldierContainer.style.marginLeft = -(sliderItem.length-1)*100 + "%";
    } else {
      sldierContainer.style.marginLeft = (parseInt(sldierContainer.style.marginLeft)+100) + "%";
    }
}

function goRight (){
    if (-parseInt(sldierContainer.style.marginLeft) >= (sliderItem.length-1)*100){
      sldierContainer.style.marginLeft = 0;
    } else {
      sldierContainer.style.marginLeft = (parseInt(sldierContainer.style.marginLeft)-100) + "%";
    }
}

var goRightInterval = setInterval(goRight,7000);

leftBtn.addEventListener('click',function(){
  goLeft();
  clearInterval(goRightInterval);
  goRightInterval = setInterval(goRight,7000);
});

righBtn.addEventListener('click',function(){
  goRight();
  clearInterval(goRightInterval);
  goRightInterval = setInterval(goRight,7000);
});
