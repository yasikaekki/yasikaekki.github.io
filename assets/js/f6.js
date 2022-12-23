let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-message");
let newHtml = '';

decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);

    binInp.value = decValue.toString(2);
});

binInp.addEventListener("input", () => {
    let binValue = binInp.value;

    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
    } else {
        newHtml += "Format anda salah!<br> ";
        newHtml += "Note: gunakan format angka ";
        newHtml += "<b>";
        newHtml += "0 dan 1";
        newHtml += "</b> ";
        newHtml += "pada inputan binary";
        errorMsg.innerHTML = newHtml;
    }

    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
});