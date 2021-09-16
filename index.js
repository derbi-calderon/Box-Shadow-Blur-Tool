
window.onload = init;

var in_vals;
var slid_vals;

function init() {
    in_vals = document.querySelectorAll(".in_value");
    slid_vals =  document.querySelectorAll(".slider");
    
    updateBoxShadow0();
    addEvents();
}

function updateBoxShadow0() {    
    var box = document.querySelector(".box");
    box.style.boxShadow = `${in_vals[0].value}px ${in_vals[1].value}px 
                            ${in_vals[2].value}px ${in_vals[3].value}px #${in_vals[4].value}`;  
    slid_vals[0].value = in_vals[0].value;
    slid_vals[1].value = in_vals[1].value;
    slid_vals[2].value = in_vals[2].value;
    slid_vals[3].value = in_vals[3].value;
        
}

function updateBoxShadow1() {
    in_vals[0].value = slid_vals[0].value;
    in_vals[1].value = slid_vals[1].value;
    in_vals[2].value = slid_vals[2].value;
    in_vals[3].value = slid_vals[3].value;
    updateBoxShadow0();
}

function addEvents() {
    for(var i of in_vals) {
        i.addEventListener("keyup", updateBoxShadow0, false);
    }
    
    for(var i of in_vals) {
        i.addEventListener("change", updateBoxShadow0, false);
    }
    
    
    for(var j of slid_vals) {
        j.addEventListener("input", updateBoxShadow1, false);
    }
}

