let kilo = document.getElementById("kg");
let gram = document.getElementById("g");

kilo.addEventListener("input", function() {
    let x = this.value;
    let y = x*1000;
    gram.value = y;
});

gram.addEventListener("input", function() {
    let y = this.value;
    let x = y*0.001;
    kilo.value = x;
})