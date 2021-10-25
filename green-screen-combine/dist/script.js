var fgImage = null;
var bgImage = null;

function loadForegroundImage(){
  var imgFile = document.getElementById("fgfile");
  fgImage = new SimpleImage(imgFile);
  var canvas = document.getElementById("fgcan");
  fgImage.drawTo(canvas);
}


function loadBackgroundImage(){
  var imgFilebg = document.getElementById("bgfile");
  bgImage = new SimpleImage(imgFilebg);
  var canvasbg = document.getElementById("bgcan");
  bgImage.drawTo(canvasbg);
}




function greenScreen(){
  if(fgImage == null || !fgImage.complete()){
    alert("foreground not loaded");
    return;
  }
  
  if(bgImage == null || ! bgImage.complete()){
    alert("background not loaded");
  }
  //clearCanvas();
  
  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  
  for(var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > 240){
      var bgPixel = bgImage.getPixel(x,y);
      output.setPixel(x, y, bgPixel);
    }
    else {
      output.setPixel(x, y, pixel);
    }
  }
  output.drawTo(bgcan);
}



function clearCanvas(){
  var imgFile1 = document.getElementById("fgcan");
  var imgFile2 = document.getElementById("bgcan");
  
  var context1 = imgFile1.getContext("2d");
  context1.fillStyle = 'white';
  context1.clearRect(0, 0, imgFile1.width, imgFile1.height);
  
  var context2 = imgFile2.getContext("2d");
  context2.fillStyle = 'white';
  context2.clearRect(0, 0, imgFile2.width, imgFile2.height);
}