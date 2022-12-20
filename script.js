let audioBox = document.getElementById("audio_box");

window.addEventListener("keydown",playChord);

function playChord(event){
    audioBox.pause();
    if(event.key==="c"){
        audioBox.src="audio/audio1.ogg";
    }
    else if(event.key==="a"){
        audioBox.src="audio/audio2.ogg";
    }
    else if(event.key==="f"){
        audioBox.src="audio/audio3.ogg";
    }
    else if(event.key==="g"){
        audioBox.src="audio/audio4.ogg";
    }
    else if(event.key==="e"){
        audioBox.src="audio/audio5.ogg";
    }
    else{
        audioBox.src="";
    }
    audioBox.play();
}