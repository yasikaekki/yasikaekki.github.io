let valid_1 = document.getElementById("validation-1");
let valid_2 = document.getElementById("validation-2");
let result = document.getElementById("box-color");
let hexInput = document.getElementById("hex");
let rgbInput = document.getElementById("rgb");
let rgbaInput = document.getElementById("rgba");
let alfaInput = document.getElementById("alfa");
let alfaValue = document.getElementById("alfa-value");

// result.style.display = "none";
window.onload=()=>{
    hexInput.value = "";
    rgbInput.value = "";
    rgbaInput.value = "";
    alfaInput.value = 1;
}

// function valid(element){
//     element.style.color = "#202040";
// }

// function invalid(element,otherElement){
//     element.style.color = "#f04624";
//     otherElement.value = 0;
// }

function toRgb(){
    let hexCode = hexInput.value;
    let rgbArr = [];
    let text = document.getElementById("invalid-1");
    if(/^#?[A-Fa-f0-9]{6}$/.test(hexCode)){

        hexInput.classList.add("valid");
        hexInput.classList.remove("invalid");
        valid_2.classList.add("valid-success");
        valid_2.classList.remove("valid-failed");
        // result.style.display = "block";
        text.textContent = "";
        hexCode = hexCode.split("#")[1] || hexCode;
        for(let i=0; i<hexCode.length;i+=2){
            rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
            console.log(rgbArr);
        }
        rgbInput.value = "rgb(" + rgbArr + ")";

        alfaInput.addEventListener("input", () => {
            alfaValue.innerHTML = alfaInput.value;
        
            let alfaCode = alfaInput.value;
            // let hexCode = hexInput.value;
            result.style.backgroundColor = "rgba("+rgbArr+","+alfaCode+")";
            rgbaInput.value = "rgba("+rgbArr+","+alfaCode+")";
            console.log(rgbaInput.value)
        });
        
        result.style.backgroundColor = "rgb(" + rgbArr + ")";
    }
    else{

        hexInput.classList.remove("valid");
        hexInput.classList.add("invalid");
        valid_2.classList.remove("valid-success");
        valid_2.classList.add("valid-failed");
        
        newHtml = "Format anda salah!<br> "+"Note: gunakan format "+"<b>"+"#"+"</b> "+"atau range huruf 1-6";
        text.innerHTML = newHtml;
    }
}

function toHex(){
    let rgbCode = rgbInput.value;
    let rgbRegex1 = /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/;
    let rgbRegex2 = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
    let hex = "#";
    let text = document.getElementById("invalid-0");
    if(rgbRegex1.test(rgbCode) || rgbRegex2.test(rgbCode)){
        rgbCode = rgbCode.replace(/[rgb()]+/g,"") || rgbCode;
        rgbCode = rgbCode.split(",");
        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            rgbInput.classList.add("valid");
            rgbInput.classList.remove("invalid");
            valid_1.classList.add("valid-success");
            valid_1.classList.remove("valid-failed");
            // style.display.display = "block";
            text.textContent = "";
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
            });
            hexInput.value = hex;
            let hexCode = hexInput.value;
            alfaInput.addEventListener("input", () => {
                alfaValue.innerHTML = alfaInput.value;
                let rgbArr = [];
                hexCode = hexCode.split("#")[1] || hexCode;
                for(let i=0; i<hexCode.length;i+=2){
                    rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
                    console.log(rgbArr);
                }
                
                let alfaCode = alfaInput.value;
                // let hexCode = hexInput.value;
                result.style.backgroundColor = "rgba("+rgbArr+","+alfaCode+")";
                rgbaInput.value = "rgba("+rgbArr+","+alfaCode+")";
            });

            result.style.backgroundColor = hex;
        }
        else{

            rgbInput.classList.remove("valid");
            rgbInput.classList.add("invalid");
            valid_1.classList.remove("valid-success");
            valid_1.classList.add("valid-failed");

            newHtml = "Format anda salah!<br> "+"Note: gunakan format "+"<b>"+"rgb()"+"</b> "+"atau range huruf 0-255";
            text.innerHTML = newHtml;
        }
    }else{
        
        rgbInput.classList.remove("valid");
        rgbInput.classList.add("invalid");
        valid_1.classList.remove("valid-success");
        valid_1.classList.add("valid-failed");

        newHtml = "Format anda salah!<br> "+"Note: gunakan format "+"<b>"+"rgb()"+"</b> "+"atau range huruf 0-255";
        text.innerHTML = newHtml;
    }

}

function copyrgbFunc() {
    rgbInput.select();
    rgbInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(rgbInput.value);
    
    var tooltip = document.getElementById("Toolrgb");
    tooltip.innerHTML = "Copied!";
}

function outrgbFunc() {
    var tooltip = document.getElementById("Toolrgb");
    tooltip.innerHTML = "Copy to clipboard";
}

function copyhexFunc() {
    hexInput.select();
    hexInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(hexInput.value);
    
    var tooltip = document.getElementById("Toolhex");
    tooltip.innerHTML = "Copied!";
}

function outhexFunc() {
    var tooltip = document.getElementById("Toolhex");
    tooltip.innerHTML = "Copy to clipboard";
}

function copyrgbaFunc() {
    rgbaInput.select();
    rgbaInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(rgbaInput.value);
    
    var tooltip = document.getElementById("Toolrgba");
    tooltip.innerHTML = "Copied!";
}

function outrgbaFunc() {
    var tooltip = document.getElementById("Toolrgba");
    tooltip.innerHTML = "Copy to clipboard";
}