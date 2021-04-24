function setup(){
    canvas=createCanvas(200,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KoyofyVS1/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(video,0,0,200,200);
    classifier.classify(video,gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}