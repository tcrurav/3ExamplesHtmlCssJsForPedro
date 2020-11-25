window.onload = initialize;

var municipalities = [
  {
    name: "Telde",
    weigth_average: 60
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
  var selectControl = document.getElementById("municipalities");

  for (var i = 0; i < municipalities.length; i++) {
    selectControl.innerHTML += `<option>${municipalities[i].name}</option>`;
  }
}