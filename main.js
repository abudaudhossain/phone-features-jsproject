const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const feature = document.getElementById("feature");




let rotateValue = circle.style.transform;
let rotateSum;

// let featureRotateValue = feature.style.transform;
// let featureRotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

    // featureRotateSum = featureRotateValue + "rotate(90deg)";
    // feature.style.transform = featureRotateSum;
    // featureRotateValue = featureRotateSum;
}
downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

    // featureRotateSum = featureRotateValue + "rotate(90deg)";
    // feature.style.transform = featureRotateSum;
    // featureRotateValue = featureRotateSum;
}

setInterval(function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
},3000)




