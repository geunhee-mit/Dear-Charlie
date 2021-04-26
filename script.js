window.onload = choosePic;

var myPix = new Array("images/light/DSC05848-2.jpg","images/light/DSC05634-HDR-Pano-2_low.jpg","images/light/DSC05848-2.jpg","images/light/DSC05941-Pano-2_low.jpg","images/light/DSC05947-Pano-3_low.jpg","images/detail/DSC06813-HDR.jpg","images/detail/DSC06813-HDR.jpg","images/detail/DSC06813-HDR.jpg","images/detail/MAH07232_poster.jpg","images/detail/MAH07232_poster.jpg","images/poetics/DSC07657.jpg","images/poetics/DSC07903-HDR.jpg","images/poetics/DSC07993.jpg","images/poetics/DSC08165.jpg","images/poetics/DSC08178.jpg");

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("myPicture").src = myPix[randomNum]
};

$('.carousel').carousel({
  interval: 10000
})
