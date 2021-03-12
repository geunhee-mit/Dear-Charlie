window.onload = choosePic;

var myPix = new Array("images/light/DSC05515-2.jpg","images/light/DSC05634-HDR-Pano-2.jpg","images/light/DSC05848-2.jpg","images/light/DSC05941-Pano-2.jpg","images/light/DSC05947-Pano-3.jpg");

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("myPicture").src = myPix[randomNum]
};

$('.carousel').carousel({
  interval: 10000
})
