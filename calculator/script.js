function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    return n.toLocaleString("en");
}
function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g, ''))
}

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;

}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

var operator = document.getElementsByClassName("operator")
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            var output = reverseFormattedNumber(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var history = getHistory();
            var output = getOutput();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseFormattedNumber(getOutput());
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number")
for (var i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function () {
        var output = reverseFormattedNumber(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}