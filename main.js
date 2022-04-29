Status = ""
objects = [];
to_find = ""

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}

function start(){
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects"; 
    to_find = document.getElementById("object_input").value;   
    }

    function modelLoaded(){
        console.log("Model loaded");
        Status = true;
    }

    function gotResult(error,results){
    if(error){
    console.log(error);    
    }
    else{
    console.log(results);
    objects = results;    
    }    
    }

function draw(){
    image(video, 0, 0 , 380, 380);

    if(Status != ""){
        objectDetection.detect(video, gotResult);   
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("orange");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("orange");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

          if(objects[i].label == to_find){
          document.getElementById("Item_found_or_not").innerHTML = to_find+" Found";    
          }
          else{
          document.getElementById("Item_found_or_not").innerHTML = to_find+" Not Found";    
          }
        }
        if(objects.length == 0){
        document.getElementById("Item_found_or_not").innerHTML = to_find+" Not Found"    
        }
        }}