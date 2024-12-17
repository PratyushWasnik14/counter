// store count and ini as zero
// listen for clicks
// increment when button is clicked
// change count-el in the html to reflect the increment


let countEl = document.getElementById("count-el"); // Get the counter element
let saveEl = document.getElementById("save-el" );
let count = 0; // Initialize counter variable

function increment() {
    count+=1; // Increment the count
    countEl.textContent = count; // Update the displayed count
    }

function save(){
    saveEl.textContent += count+" - ";
    countEl.textContent = 0;
    count=0
}




