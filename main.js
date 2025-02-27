song = "";
leftWristX = 0;
leftWristY = 0;
rigthWristX = 0;
rightWristY = 0;


function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet está inicializado');
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}


function play()
{
     song.play();
     song.setVolume(1);
     song.rate(1);
}

function gotPoses(results) 
{
    if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);


            console.log(results);
            rightWristX = results[0].pose.leftWrist.x;
            rightWristY = results[0].pose.leftWrist.y;
            console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        }
}