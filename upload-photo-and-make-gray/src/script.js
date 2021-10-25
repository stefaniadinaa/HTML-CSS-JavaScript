var image;
var grayimage;
function upload(){
  var imgcanvas = document.getElementById("c1");
  var fileinput = document.getElementById("finput");

  image = new SimpleImage(fileinput);
  grayimage = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}


function makeGray(){
    
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("c2");
    image.drawTo(imgcanvas);
}