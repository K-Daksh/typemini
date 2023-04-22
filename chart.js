let dataObj = [];
let accObj = [];
let dataCheck = localStorage.getItem("acc");
setInterval(() => {
  if (dataCheck != localStorage.getItem("acc")) {
    window.location.reload();
    console.log("Page updated");
  }
}, 500);
let getAcc = localStorage.getItem("acc");
if (dataCheck == null) {
  document.querySelector(".chart").classList.add("message");
  document.querySelector(".chart").innerHTML =
    "<p>No data to display, give atleast 1 test.</p>";
} else {
  document.querySelector(".chart").classList.remove("message");
}

let getString = localStorage.getItem("score");
const stringToArray = getString.split(" + ");
const stringToArrayAcc = getAcc.split(" + ");
stringToArray.map(function (e, i) {
  dataObj[i] = new Array(String(i + 1), parseFloat(e));
});
stringToArrayAcc.map(function (e, i) {
  accObj[i] = new Array(String(i + 1), parseFloat(e));
});
// console.log(stringToArrayAcc);
const totalData = stringToArray.length;

// setting max and avg speed

const avgSpeed = document.querySelector(".avg-typing-speed");
const avgAcc = document.querySelector(".avg-typing-accuracy");
const bestSpeed = document.querySelector(".best-typing-speed");
const bestAcc = document.querySelector(".best-typing-accuracy");
let maxSpeed = 0.0;
let maxAcc = 0;
stringToArray.map(function (e) {
  parseFloat(e) > maxSpeed ? (maxSpeed = parseFloat(e)) : (maxSpeed = maxSpeed);
});
stringToArrayAcc.map(function (e) {
  parseInt(e) > maxAcc ? (maxAcc = parseFloat(e)) : (maxAcc = maxAcc);
});
let avgSpeedDisplay = stringToArray.reduce(function (total, cur) {
  return total + Number(cur);
}, 0);
avgSpeedDisplay /= totalData;
let avgAccDisplay = stringToArrayAcc.reduce(function (total, cur) {
  return total + Number(cur);
}, 0);
avgAccDisplay /= totalData;
console.log(avgAccDisplay);
document.querySelector(
  ".avg-typing-speed"
).textContent = `Average Speed : ${avgSpeedDisplay.toFixed(1)}`;
document.querySelector(
  ".avg-typing-accuracy"
).textContent = `Average Accuracy : ${avgAccDisplay.toFixed(1)}`;
document.querySelector(
  ".best-typing-speed"
).textContent = `Best Speed : ${maxSpeed.toFixed(1)}`;
document.querySelector(
  ".best-typing-accuracy"
).textContent = `Best Accuracy : ${maxAcc.toFixed(1)}`;

//cacl rank
const rank = document.querySelector(".rank");
if (localStorage.getItem("score") != null) {
  let calcRank = localStorage
    .getItem("score")
    .split(" + ")
    .reduce(function (total, cur) {
      return total < Number(cur) ? (total = Number(cur)) : (total = total);
    }, 0);
  if (calcRank > 45 && calcRank <= 60) {
    rank.textContent = "S";
  } else if (calcRank > 60 && calcRank <= 80) {
    rank.textContent = "G";
  } else if (calcRank > 80) {
    rank.textContent = "P";
  } else {
    rank.textContent = "L";
  }
}
//
//clear data
document.querySelector(".reset-data").addEventListener("click", function () {
  localStorage.removeItem("score");
  localStorage.removeItem("acc");
  localStorage.getItem("profilePic");
  console.log("cleared local storage");
});
//
//

var chart = JSC.chart("chartDiv", {
  debug: true,
  legend_visible: false,
  title_label_text: "Typing Performance",
  yAxis: {
    scale: { range: [0, 130] },
  },
  xAxis: {
    crosshair_enabled: true,
    scale: { range: [0, totalData] },
  },
  defaultSeries: {
    type: "line",
    defaultPoint_marker_visible: false,
    lastPoint: {
      yAxisTick: {
        axisId: "secondY",
        label_text: "%yValue",
      },
    },
  },
  series: [
    {
      name: "Speed",
      points: dataObj,
    },
    {
      name: "Accuracy",
      points: accObj,
    },
  ],
});
