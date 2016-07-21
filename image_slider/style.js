// JavaScript Document

window.onload = function () {
	var slider = document.getElementsByClassName('slider')[0],	//returns the first image in the div slider.
		title = document.getElementsByClassName('title')[0],		//returns class title
		images = slider.getElementsByTagName('img'), 			//include all images in the div slider
		counter = 0,												// one = assigns value
		nextBtn = slider.getElementsByClassName('next')[0], 		//next is a variable that references next 
		prevBtn = slider.getElementsByClassName('prev')[0];		//prev is a variable that references a class that is prev inside slider div
		
	function showImage (index) {									//declares a function showImage that allows one parameter to be passed into it called index
		//Set classname on the image-elements (hide them)
		for (var i = 0; i < images.length; i += 1) {				//for loop does something many times over. Create variable at 0 while variable is smaller than the number of images. Increment after each itiration by one.
			images[i].className = 'hideImage';					//Takes image array and applies the class called hideImage to each element of the array.
		}
		
		//Add the showImage classname to the img-element you want
		images[index].className = 'showImage';					//taking parameter called index and applies the class called showImage
		
		// Take the content of the alt tag and write it inside the title div element
		title.innerHTML = images[index].alt;
	}
		
	function nextImg () {										//declaires a function nextImg
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if(counter < images.length - 1) {							//if 0 is less than images.length minus one 
			counter += 1;										//yes - increment counter by one
		} else {
			counter = 0;											//no - return first image
		}
		
		showImage(counter);										//takes parameter showImage passes in counter and shows image associated to the counter value.
	}
	
	function prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if(counter > 0) {
			counter -= 1;
		} else {
			counter = images.length - 1;
		}
		
		showImage(counter);
	}
	
	//give the buttons an onclick event
	nextBtn.onclick = nextImg;
	prevBtn.onclick = prevImg;
	
	// Says for the nextImg method to be called automatically every 10000 milliseconds
	window.setInterval(nextImg, 10000);
	
	//start the slider
	showImage(counter);
};