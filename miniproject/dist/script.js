var image = null;

function loadImage(){
  
  var imgFile = document.getElementById("pfile");
  image= new SimpleImage(imgFile);
  var canvas = document.getElementById("photo");
  image.drawTo(canvas);
}

function grayScale(){
  if(image == null || !image.complete()){
    alert("file not loaded");
    return;
  }
  
  for (var  pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  
  var imgcanvas = document.getElementById("photo");
  image.drawTo(imgcanvas);
}

function makeRed(){
  if(image == null || !image.complete()){
    alert("file not loaded");
    return;
  }
  
  for (var  pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(avg < 128){
    pixel.setRed(avg*2);
    pixel.setGreen(0);
    pixel.setBlue(0);}
    else
     {pixel.setRed(255);
      pixel.setGreen(avg*2 - 255);
      pixel.setBlue(avg*2 - 255);} 
  }
  var imgcanvas =      document.getElementById("photo");
  image.drawTo(imgcanvas);
}


function resetImage(){
  if(image == null || !image.complete()){
    alert("file not loaded");
    return;
  }
  
  var imgFile = document.getElementById("photo");
  
  var context = imgFile.getContext("2d");
  context.fillStyle = 'white';
  context.clearRect(0, 0, imgFile.width, imgFile.height);
}


function addWhiteBorder(){
  var whiteImage = new SimpleImage(500, 500);
  for (var  pixel of whiteImage.values()){
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(255);
}
  
  var output = new SimpleImage(image.getWidth(), image.getHeight());
  
  
  for(var pixel of whiteImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if(x < 30){
      var bgPixel = whiteImage.getPixel(x,y);
      output.setPixel(x, y, bgPixel);
    }
    else {
      for(var pixel of image.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        output.setPixel(x, y, pixel);
      }    
    }
    
    if(x > whiteImage.getWidth() - 30)
    {var bgPixel = whiteImage.getPixel(x,y);
      output.setPixel(x, y, bgPixel);}
  }
  output.drawTo(photo);
}