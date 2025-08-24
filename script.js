var imageNumber = 1;
var totalImages=5;
function changeImage(event) {
  if (event.target.id == "left-arrow") {
    imageNumber--;
    if(imageNumber<1){
        imageNumber=totalImages
    }
  } else if (event.target.id == "right-arrow") {
    imageNumber++;
    if(imageNumber>totalImages){
        imageNumber=1
    }
  }
  var slider = document.getElementById("slider");
  slider.style.backgroundImage = `url(images/${imageNumber}.jpg)`;
}
