let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let colorCode = document.getElementById("color-code");
let gradient = document.getElementById("gradient-box");
let inputColor = document.getElementById("inputcolor");

function changeGradient() {
    gradient.style.background="linear-gradient("+inputColor.value+","+color1.value+","+color2.value+")";
    console.log(gradient.style.background);
    colorCode.value = gradient.style.background;
}

inputColor.addEventListener("input",changeGradient);
color1.addEventListener("input",changeGradient);
color2.addEventListener("input",changeGradient);

function copyFunc() {
    colorCode.select();
    colorCode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(colorCode.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}