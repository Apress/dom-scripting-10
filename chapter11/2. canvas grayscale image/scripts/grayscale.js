function convertToGS(img) {
  // For good measure return if canvas isn't supported.
  if (!Modernizr.canvas) return;
  
  // Store the original color version.
  img.color = img.src;
  
  // Create a grayscale version.
  img.grayscale = createGSCanvas(img);
  
  // Swap the images on mouseover/out 
	img.onmouseover = function() {
	  this.src = this.color;
	} 
	img.onmouseout = function() {
 		this.src = this.grayscale; 
 	}
 	
 	img.onmouseout();
} 

function createGSCanvas(img) {

	var canvas=document.createElement("canvas");
	canvas.width=img.width;
	canvas.height=img.height;
	var ctx=canvas.getContext("2d");
	ctx.drawImage(img,0,0);
	
	// Note: getImageData will only work for images 
	// on the same domain as the script. 
	var c = ctx.getImageData(0, 0, img.width, img.height); 
	for (i=0; i<c.height; i++) {
		for (j=0; j<c.width; j++) {
			var x = (i*4) * c.width + (j*4);
			var r = c.data[x]; 
			var g = c.data[x+1]; 
			var b = c.data[x+2]; 
			c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3;
		}
	}
	ctx.putImageData(c,0,0,0,0, c.width, c.height);
	return canvas.toDataURL();
}

// Add a load event. 
// use addLoadEvent function if alongside other scripts. 
window.onload = function() {
	convertToGS(document.getElementById('avatar'));
}