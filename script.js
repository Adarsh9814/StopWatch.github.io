var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

// fetching  all the Elementfrom html
const hrElem=document.getElementById("hr");
const minElem=document.getElementById("min");
const secElem=document.getElementById("sec");
const countElem=document.getElementById("count");


// fetching all the variable form local storage
window.onload = function() {
    if (localStorage.hr) {
        hr= Number(localStorage.hr);
    } else {
        localStorage.hr = 0;
    }

    if (localStorage.min) {
        min = Number(localStorage.min);
    } else {
        localStorage.min = 0;
    }


    if (localStorage.sec) {
        sec = Number(localStorage.sec);
    } else {
        localStorage.sec = 0;
    } 


    if (localStorage.count) {
        count = Number(localStorage.count);
    } else {
        localStorage.count = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if(hr < 10){
        hrString = "0" + hrString;
    }

    if(min < 10){
        minString = "0" + minString;
    }

    if(sec < 10){
        secString = "0" + secString;
    }

    if(count < 10){
        countString = "0" + countString;
    }


    hrElem.innerHTML = hrString;
    minElem.innerHTML = minString;
    secElem.innerHTML = secString;
    countElem.innerHTML = countString;

};

var timer = false;

// start function : start the timer
function start(){
    timer =true;
    stopwatch();

}

// stop function: stop the function
function stop(){
    timer = false;
    localStorage.hr = hr;
    localStorage.min = min;
    localStorage.sec = sec;
    localStorage.count = count;
}

// reset function: reset the timer
function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0; 
    count = 0; 

    hrElem.innerHTML = "00";
    minElem.innerHTML = "00";
    secElem.innerHTML = "00";
    countElem.innerHTML = "00";

    localStorage.hr = hr;
    localStorage.min = min;
    localStorage.sec = sec;
    localStorage.count = count;
}

// main function to start the timer
function stopwatch(){
    if(timer == true){
        count++;

        if(count == 100){
            sec++;
            count = 0;
        }

        if(sec == 60){
            min++;
            sec = 0;
        }

        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }
        
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10){
            hrString = "0" + hrString;
        }

        if(min < 10){
            minString = "0" + minString;
        }

        if(sec < 10){
            secString = "0" + secString;
        }

        if(count < 10){
            countString = "0" + countString;
        }


        hrElem.innerHTML = hrString;
        minElem.innerHTML = minString;
        secElem.innerHTML = secString;
        countElem.innerHTML = countString;



       setTimeout( "stopwatch()",10);
    }
}