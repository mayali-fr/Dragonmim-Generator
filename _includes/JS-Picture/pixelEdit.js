function colorFilter()
{
  //Access the canvas
  c = document.getElementById("canvas1"); 
  context = c.getContext("2d");

  //Declare variables
  var imgData = context.getImageData(0,0,canvas1.width,canvas1.height);
  var data = imgData.data;

  var red = new Array();    
  var green = new Array(); 
  var blue = new Array(); 
  var alpha = new Array();    

  //Read image and make changes on the fly as it's read  
  for (i = 0; i < data.length; i += 4) 
  {                     
    red[i] = imgData.data[i];
    if (red[i] == 0) red[i] = 255; 
    green[i] = imgData.data[i+1];
    if (green[i] == 0) green[i] = 255;
    blue[i] = imgData.data[i+2]; // no change, blue == 0 for black and for yellow
    alpha[i] = imgData.data[i+3]; // Again, no change
  } 

  // Write the image back to the canvas
  for (i = 0; i < data.length; i += 4)  
  {
    imgData.data[i] = red[i];
    imgData.data[i+1] = green[i];
    imgData.data[i+2] = blue[i]; 
    imgData.data[i+3] = alpha[i];   
  } 

  context.putImageData(imgData, 0, 0);
} 