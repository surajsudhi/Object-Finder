Status = ""
video = ""
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}

function start(){
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";    
    }

    function modelLoaded(){
        console.log("Model loaded");
        Status = true;
    }

function draw(){
    image(video, 0, 0 , 380, 380);
}