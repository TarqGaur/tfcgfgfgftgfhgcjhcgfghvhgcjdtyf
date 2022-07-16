var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
imge_id = "s1";

function start() {
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("webcam").innerHTML = content;
    if(content=="take my selfie"){
        speak();
        console.log("take selfie");
      }
}


camera = document.getElementById("webcam");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 1000
});



function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        imge_id = "s1"
        snap();
    }, 1000);
    setTimeout(function () {
        imge_id = "s2"
        snap();
    }, 1500);
    setTimeout(function () {
        imge_id = "s3"
        snap();
    }, 2000);
}

function snap() {
    Webcam.snap(function (data_uri) {
        if (imge_id == "s1") {
            document.getElementById("main1").innerHTML = "<img id='picture' src=" + data_uri + ">";
        }
        if (imge_id == "s2") {
            document.getElementById("main2").innerHTML = "<img id='picture' src=" + data_uri + ">";
        }
        if (imge_id == "s3") {
            document.getElementById("main3").innerHTML = "<img id='picture' src=" + data_uri + ">";
        }
    });
}