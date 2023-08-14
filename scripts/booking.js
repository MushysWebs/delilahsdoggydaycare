/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? No theydont need to be intialized until clicked
// When do they need to be reset or updated? when the clear button is clicked or when other buttons are clicked to update cost
let costPerDay = 35;
let numberOfDays = 0;
const days = document.querySelectorAll(".day-selector")
const calculatedCost = document.getElementById("calculated-cost")
const halfDay = document.getElementById("half")
const fullDay = document.getElementById("full")
const clearButton = document.getElementById("clear-button")




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.querySelectorAll(".day-selector li").forEach(day => {
    day.addEventListener("click", function() {
        if (!this.classList.contains("clicked")) {
            this.classList.add("clicked");
            numberOfDays++;
        } else {
            this.classList.remove("clicked");
            numberOfDays--;
        }
        recalculateCost();
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
/********* clear days *********/

clearButton.addEventListener("click", function() {
  var days = document.querySelectorAll(".day-selector li");  // get all the day elements again
  days.forEach(day => day.classList.remove("clicked"));
  numberOfDays = 0;
  recalculateCost();
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener("click", function() {
    costPerDay = 20;
    this.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", function() {
    costPerDay = 35;
    this.classList.add("clicked");
    halfDay.classList.remove("clicked");
    recalculateCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateCost() {
  calculatedCost.innerHTML = costPerDay * numberOfDays;
}
