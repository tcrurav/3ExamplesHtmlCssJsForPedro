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
  var overWeightControl = document.getElementById("over-weight");

  const OVER_WEIGHT_THRESHOLD = 62;
  var municipalitiesOverThreshold = 0;

  for (var i = 0; i < municipalities.length; i++) {
    if(municipalities[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThreshold++;
  }

  overWeightControl.innerHTML = municipalitiesOverThreshold;
}