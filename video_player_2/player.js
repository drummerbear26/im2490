// JavaScript Document

// This says that the cod inside (which will be a function later on; we haven't written it yet) will be executed once the page's DOM has loaded.

// This differs from document.onload() which only runs the JS in it after ALL resources (or assets) have been loaded (or downloaded) that are embedded in the page that calls the document.onload()

document.addEventListener("DOMContentLoaded", function()
{	
	// we'll call our initalizing function here																				
	startVideo();
}, false);

var videoPlayer;

//Sets the videoPlayer variable to the video ID in the page																		
function startVideo()															
{
	videoPlayer = document.getElementById("video");	
	loadVideo("Big_Buck_Bunny.mp4");
	
	// says to run the updateProgressBar method each millisecond after the videoPlayer has started.
	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);		
}
	
// Used to set all the button attributes at once																		
function changeButton(btn, value) 												
{
	btn.innerHTML = value;
	btn.title = value;
	btn.className = value;	
}

// Handles both the play and pause video functionality in one button																			
function togglePlayPause()														
{
	// Stores the play/pause button element node in a variable																			
	var button = document.getElementById("playPauseBtn");						
	
	if (videoPlayer.paused || videoPlayer.ended) 
	{
		changeButton(button, "Pause");
		videoPlayer.play();	
	} else {
		changeButton(button, "Play");	
		videoPlayer.pause();
	}
}

// Handles both the rewind and fast forward functionality
function rwAndFf(dir, amt)
{
	// Set variable to videoPlayer playback Rate
	var rwff = videoPlayer.playbackRate;
	
	// Set variable to rewind id
	var rw_btn = document.getElementById("rewind-btn");
	
	// Ternary Operator which is basically an if / else statement, really concisely put
	(rwff == 0.5) ? rw_btn.disabled = true : rw_btn.disabled = false;
	/*
		The above ternary operator is literally the same thing as what's written below.
	if (rwff == 0) {
		rw_btn.disabled = true;
	} else {
		rw_btn.disabled = false;
	}
	*/
	
	if (dir == "rw") {
		videoPlayer.playbackRate -= amt;
	} else if (dir == "ff") {
		videoPlayer.playbackRate += amt;
	}
	
	console.log("New playback rate: " + videoPlayer.playbackRate + ".");
}
	
// Handles stopping the video																			
function stopVideo()																
{
	videoPlayer.pause();
	videoPlayer.currentTime = 0;
	
	var button = document.getElementById("playPauseBtn");
	changeButton(button, "Play");	
	
}

// Toggles Mute on and off
function toggleMute() 															
{
	var button = document.getElementById("muteBtn");
	
	if (videoPlayer.muted)
	{
		changeButton(button, "Mute");
		videoPlayer.muted = false;	
	} else {
		changeButton(button, "Muted");
		videoPlayer.muted = true;	
	}
}

// Handles volume change
function changeVolume() {														
	videoPlayer.volume=document.getElementById('changeVolume').value;
}

// Shows progress of movie
function updateProgressBar() {													
	var progressBar = document.getElementById('progress');
	var percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
	
	progressBar.value = percentage;
	
	progressBar.innerHTML = percentage;
}

function fullScreen() {
	if (videoPlayer.requestFullscreen) {
		videoPlayer.requestFullscreen();
	} else if (videoPlayer.mozRequestFullScreen) {
		videoPlayer.mozRequestFullScreen();
	} else if (videoPlayer.webkitRequestFullscreen) {
		videoPlayer.webkitRequestFullscreen();
	}
	
	console.log("Trying to go to full-screen mode.");
}

function loadVideo(video)
  {
	// Create variable for path to video  
	var vPath = 'video/' + video;
	
	// Set videoPlayer source to path of video and load video
	videoPlayer.src = vPath;
	videoPlayer.load();  
	
	// Create variable that splits the video name from extension
	var vPoster = video.split('.');
	
	// Set videoPlayer poster to path and name of poster
	videoPlayer.poster = "images/" + vPoster[0] + ".jpg";
	
	// Create variable for playPauseBtn
	var play = document.getElementById("playPauseBtn");
	
	// Change play button to Play
	changeButton(play, 'Play');
	
	//Create variable for Progress Bar
	var progressBar = document.getElementById('progress');
	
	progressBar.value = 0;
	
  }