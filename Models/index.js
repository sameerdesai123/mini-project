var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log(`Something went wrong!, ${error}`);
    });
}

function start(e) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log(`Something went wrong!, ${error}`);
    });
}

function stop(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}

async function preload() {
  const model = await tf.loadLayersModel('/model.json');
  console.log("model loaded sucessfully");
}
