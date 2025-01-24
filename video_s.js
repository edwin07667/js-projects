let a=document.querySelectorAll(".video-slide");
a.forEach(function(video){
video.addEventListener("click",function(){
    video.classList.toggle('active');
})
})