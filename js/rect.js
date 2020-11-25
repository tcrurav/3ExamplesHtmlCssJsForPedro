window.onload = initialize;

var municipalities = [
  {
    name: "Telde",
    weigth_average: 90
  },
  {
    name: "Las Palmas de GC",
    weigth_average: 65
  },
  {
    name: "Arucas",
    weigth_average: 70
  },
  {
    name: "Gáldar",
    weigth_average: 59
  }
]

function initialize() {
  var svgControl = document.getElementById("weight-graph");

  for (var i = 0; i < municipalities.length; i++) {
    svgControl.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalities[i].weigth_average * 10}" fill="red"></rect>`;
    svgControl.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="white">${municipalities[i].name}</text>`;
  }
}