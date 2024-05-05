noseX =0;                                                           
noseY=0;                                                           
difference = 0;                                                           
rightWristX= 0;                                                           
leftWristX= 0;                                                           
function setup(){
    video = createCapture(VIDEO);
video.size(300,400);
video.position(300,300); 

   canvas = createCanvas(300,400);
   canvas.position(300,300);

  poseNet= ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);}
  

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){                                                           
    if(results.length > 0){
        noseX =results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX+ "noseY"+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX);

        console.log("leftWrist"+leftWristX+"rightWrist"+rightWristX+"difference"+difference);
    }
}

function draw(){
    background("#f50c98");
    textSize(15)
    fill('#000000')
    text('DHARUN.G', 10, 40)
  
   
}



