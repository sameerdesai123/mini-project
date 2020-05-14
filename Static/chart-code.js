var config_1 = {
  type: 'line',
  data: {
    labels: ['epoch:1', 'epoch:2', 'epoch:3', 'epoch:4', 'epoch:5', 'epoch:6', 'epoch:7', 'epoch:8', 'epoch:9', 'epoch:10', 'epoch:11', 'epoch:12'],
    datasets: [{
      label: 'Training Accuracy',
      backgroundColor: '#880000',
      borderColor: '#880000',
      data: [0.9147, 0.9729, 0.9796, 0.9843, 0.9856, 0.9878, 0.9892, 0.9904, 0.9914, 0.9913, 0.9913, 0.9922],
      fill: false,
    }, {
      label: 'Validation Accuracy',
      fill: false,
      backgroundColor: '#000088',
      borderColor: '#000088',
      data: [0.9811, 0.9864, 0.9876, 0.9893, 0.9901, 0.9892, 0.9911, 0.991, 0.9925, 0.9919, 0.9925, 0.9915]
    }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Model Accuracy'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Epochs'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};

var config_2 = {
  type: 'line',
  data: {
    labels: ['epoch:1', 'epoch:2', 'epoch:3', 'epoch:4', 'epoch:5', 'epoch:6', 'epoch:7', 'epoch:8', 'epoch:9', 'epoch:10', 'epoch:11', 'epoch:12'],
    datasets: [{
      label: 'Training Loss',
      fill: false,
      backgroundColor: '#008888',
      borderColor: '#008888',
      data: [0.2784, 0.0910, 0.0665, 0.0539, 0.0479, 0.0400, 0.0354, 0.0321, 0.0295, 0.0287, 0.0280, 0.0251]
    }, {
      label: 'Validation Loss',
      fill: false,
      backgroundColor: '#008800',
      borderColor: '#008800',
      data: [0.0602, 0.0396, 0.0358, 0.0320, 0.0288, 0.0303, 0.0254, 0.0269, 0.02376, 0.0231, 0.0243, 0.0256 ],
    }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Model Loss'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Epochs'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};


function showChart() {
  var ctx_1 = document.getElementById('acc-canvas').getContext('2d');
  new Chart(ctx_1, config_1);
  var ctx_2 = document.getElementById('loss-canvas').getContext('2d');
  new Chart(ctx_2, config_2);
}

function increaseChartSize(){
  var acc = document.getElementById('acc-canvas');
  acc.classList.remove('w-50');
  
  var loss = document.getElementById('loss-canvas');
  loss.classList.remove('w-50')
}

function decreaseChartSize() {
  var acc = document.getElementById('acc-canvas');
  acc.classList.add('w-50');
  
  var loss = document.getElementById('loss-canvas');
  loss.classList.add('w-50')
}