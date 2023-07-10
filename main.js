var status = "";
var value = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(640, 420);
    video.hide();
}

function start(){
  objectDetector - ml5.objectDetector("cocoSSD", modelLoaded);
  document.getElementById('status').innerHTML = "Detecting Objects";
  value = document.getElementById('input').value;
}

function preload(){

}

function draw(){
  image(video, 0, 0, 640, 420);
}

function modelLoaded(){
   console.log("Model is Loaded!");
   status = true;
}