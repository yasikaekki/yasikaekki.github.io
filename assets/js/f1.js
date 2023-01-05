let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function() {
    res.value = parseInt(n1.value)+parseInt(n2.value);
});
document.getElementById("sub").addEventListener("click", function() {
    res.value = parseInt(n1.value)-parseInt(n2.value);
});
document.getElementById("mul").addEventListener("click", function() {
    res.value = parseInt(n1.value)*parseInt(n2.value);
});
document.getElementById("div").addEventListener("click", function() {
    res.value = parseInt(n1.value)/parseInt(n2.value);
});

function copyFunc() {
    res.select();
    res.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(res.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}