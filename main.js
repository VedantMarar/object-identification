img = "";
status = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting objects"
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    stroke("yellow");
    fill("yellow");
    noFill();
    rect(30,60,450,350);
    text("dog",45,75);
    fill("yellow")
    noFill();
    text("cat",320,120)
    stroke("yellow");
    rect(300,90,270,320);
}

function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}