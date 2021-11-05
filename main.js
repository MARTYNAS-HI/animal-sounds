function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cX2eSk4QU/model.json', ModelReady);
}

function ModelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log("Got Result");
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_m = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuaracy - ' +
            (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('image');
        

        if (results[0].label == "bark") {
            img.src = 'dog.jpeg';
         
        } else if (results[0].label == "meow") {
            img.src = 'cat.jpeg';
           
        } else if (results[0].label == "roar") {
            img.src = 'lion.jpeg';
   
        } else if (results[0].label == "moo") {
            img.src = 'download.jpeg';
      
        }
    }
}
