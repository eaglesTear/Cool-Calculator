// THIS PROGRAM CANNOT PERFORM ADVANCED FUNCTIONS LIKE OPERATOR ORDER OF PRECEDENCES ETC.
let outputArea = document.getElementById("output-area");

// MAIN CALCULATOR OPERATIONS WITH EVAL TO DEAL WITH STRING RETURNS
function calc(input) {
    let pressed = input.innerHTML;

    if (pressed === "=") {
        outputArea.innerHTML = eval(outputArea.innerHTML);
    } else if (pressed === "CE") {
        outputArea.innerHTML = "0";
    } else {
        if (outputArea.innerHTML === "0") {
            outputArea.innerHTML = pressed;
        } else {
            outputArea.innerHTML += pressed;
        }
    }
}

// BACKSPACE OPERATION: USE SLICE TO REMOVE LAST CHARACTER OF USER INPUT
function backspace() {
    const VALUE = event.target.innerText;
    const TEST = document.getElementById("output-area");
    outputArea.innerText = TEST.innerText.slice(0, -1);
    // PREVENT DISPLAY AREA BEING DELETED IF NO CHARACTER PRESENT / VALUE IS 0
    TEST.innerText.length === 0 ? outputArea.innerHTML = "0" : "";
}

// PERCENTAGE CALCULATOR DROPS IN FROM THE TOP
let showPercCalc = false;

function activatePerc() {
    document.getElementById("percentage-calc-area").style.display = "block";
    //document.getElementById("percentage-calc-area").style.transition = "1.5s";
    if (showPercCalc === false) {
        //document.getElementById("percentage-calc-area").style.marginTop = "0px";
        showPercCalc = true;
    } else if (showPercCalc === true) {
        //document.getElementById("percentage-calc-area").style.marginTop = "-1200px";
        document.getElementById("percentage-calc-area").style.display = "none";
        showPercCalc = false;
    }
}

// TOGGLE DISPLAY COLOUR BETWEEN RED & NEON GREEN (CLIENT ACTION)
let btnColor = false;

function toggleColour() {
    if (btnColor === false) {
        outputArea.style.color = "#FF0000";
        btnColor = true;
    } else if (btnColor === true) {
        outputArea.style.color = "#39FF14";
        btnColor = false;
    }
}

// PERCENTAGE RESULT IS USER-INPUT DIVIDED BY 100, MULTIPLIED BY PERCENTAGE REQUIRED
function calcPercentage() {
    let getInput = document.getElementById("user-input").value;
    let getPercentage = document.getElementById("percentage").value;
    let getResult = (getInput / 100) * getPercentage;
    document.getElementById("result").value = getResult;
}