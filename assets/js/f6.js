let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-message");
let valid = document.getElementById("validation-1");
let copytext = document.getElementById("copytext");

decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);

    binInp.value = decValue.toString(2);
});

binInp.addEventListener("input", () => {
    let binValue = binInp.value;

    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        binInp.classList.add("valid");
        binInp.classList.remove("invalid");
        valid.classList.add("valid-success");
        valid.classList.remove("valid-failed");
        errorMsg.textContent = '';
    } else {
        newHtml = "Format anda salah!<br> "+"Note: gunakan format angka "+"<b>"+"0 dan 1"+"</b> "+"pada inputan binary";
        binInp.classList.remove("valid");
        binInp.classList.add("invalid");
        valid.classList.remove("valid-success");
        valid.classList.add("valid-failed");
        console.log(newHtml);
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

function copyFunc() {
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}