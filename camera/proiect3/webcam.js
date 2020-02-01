(function(){
  navigator,getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

  navigator.getMedia(
    //constraints
    {video:true,audio:false},

    function(stream){
      var video = document.getElementsByTagName('video')[0];
      video.src = window.URL.createObjectURL(stream);
      video.play();
    },

    function(error){
      console.log(error);
    }

    document.getElementById("capture").addEventListener("click", takeSnapshot);
})();

function takeSnapshot(){
    var canvas = document.getElementById("canvas");
    var video = document.getElementById("player");
    var image = document.getElementById("output");

    width = video.videoWidth
    height = video.videoHeight

    context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    context.drawImage(video, 0, 0, width, height);

    var imageDataURL = canvas.toDataURL('image/png');
    image.setAttribute('src', imageDataURL);
}
