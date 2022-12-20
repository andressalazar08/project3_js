const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');


//Funciones

//Play & pause video function
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}


//update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//Update progress & timestamp
function updateProgress(){
    console.log(video.currentTime);
    //console.log(video.duration);
    //console.log(video);
    progress.value = (video.currentTime/video.duration)*100;

    //timestam actualization
    // Get minutes
    let mins = Math.floor(video.currentTime/60);
    if (mins<10){
        mins= '0' + String(mins);
    }

    // Get secs
    let secs = Math.floor(video.currentTime % 60);
    if (secs<10){
        secs= '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`

}

//Set video time to progress 
//El usuario puede ubicar un punto de reproducción sobre la barra de progreso
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/100;
}


//Stop Video
function stopVideo(){
    video.currentTime=0;
    video.pause();
}

//Event listeners


video.addEventListener('click', toggleVideoStatus); //Conocemos el estatus del vide
video.addEventListener('pause', updatePlayIcon); //actualizamos el icono del play cuando el usuario da pause
video.addEventListener('play', updatePlayIcon); //actualizamos el icono del play cuando el usuario da play
video.addEventListener('timeupdate', updateProgress); //actualizamoe el reloj del player

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
