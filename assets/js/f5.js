let mph = document.getElementById("mph");
let knots = document.getElementById("knots");
let kph = document.getElementById("kph");
let match = document.getElementById("mach");

mph.addEventListener("input", function() {
    let w = this.value;
    let x = w/1.150779;
    let y = w*1.609344;
    let z = w/761.207;

    knots.value = x;
    kph.value = y;
    match.value = z;
});

knots.addEventListener("input", function() {
    let x = this.value;
    let w = x*1.150779;
    let y = x*1.852;
    let z = x/661.4708;

    mph.value = w;
    kph.value = y;
    match.value = z;
});

kph.addEventListener("input", function() {
    let y = this.value;
    let w = y/1.609344;
    let x = y/1.852;
    let z = y/1225.044;

    mph.value = w;
    knots.value = x;
    match.value = z;
});

match.addEventListener("input", function() {
    let z = this.value;
    let w = z*761.207;
    let x = z*1225.044;
    let y = z*661.4708;

    mph.value = w;
    knots.value = x;
    kph.value = y;
});

function copymphFunc() {
    mph.select();
    mph.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mph.value);
    
    var tooltip = document.getElementById("Toolmph");
    tooltip.innerHTML = "Copied!";
}

function outmphFunc() {
    var tooltip = document.getElementById("Toolmph");
    tooltip.innerHTML = "Copy to clipboard";
}

function copyknoFunc() {
    knots.select();
    knots.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(knots.value);
    
    var tooltip = document.getElementById("Toolkno");
    tooltip.innerHTML = "Copied!";
}

function outknoFunc() {
    var tooltip = document.getElementById("Toolkno");
    tooltip.innerHTML = "Copy to clipboard";
}

function copykphFunc() {
    kph.select();
    kph.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(kph.value);
    
    var tooltip = document.getElementById("Toolkph");
    tooltip.innerHTML = "Copied!";
}

function outkphFunc() {
    var tooltip = document.getElementById("Toolkph");
    tooltip.innerHTML = "Copy to clipboard";
}

function copymacFunc() {
    match.select();
    match.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(match.value);
    
    var tooltip = document.getElementById("Toolmac");
    tooltip.innerHTML = "Copied!";
}

function outmacFunc() {
    var tooltip = document.getElementById("Toolmac");
    tooltip.innerHTML = "Copy to clipboard";
}