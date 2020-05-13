
var video = document.querySelector("#videoElement");
var model = null;
async function preload() {
  model = await tf.loadLayersModel('/model.json');
}

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

function captureImage(){
  var canvas = document.getElementById('Mycanvas');
  canvas.width = 100;
  canvas.height = 80;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  //convert to desired file format
  var dataURI = canvas.toDataURL('image/jpeg');
  return dataURI;
}

function preprocess(img){
  let tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([28,28]).toFloat(); // .expandDims();
  const rgb = tf.tensor1d([0.2989, 0.587, 0.114])
  tensor = tf.sum(tensor.mul(rgb), 2).expandDims()
  tensor = tensor.reshape([1,28,28,1])
  return tensor
}

function max(arr) {
  let max = arr[0]
  for(let i = 1;i<arr.length;i++)
  {
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}

function predict(){
  // Capture Image
  var url = captureImage()
  var img = document.getElementById('Mycanvas')
  console.log(typeof(img), typeof(img) === new Image() );
  
  // Preprocess Image
  let processedImg = preprocess(img)
  console.log(processedImg);
  // Predict
  model.predict(processedImg).data()
  .then(data => {
    console.log("Prediction : ", data, data.indexOf(1));
    document.getElementById('prediction').innerHTML = data.indexOf(max(data))
  })
  .catch(err => {
    console.log(err);
  })
}