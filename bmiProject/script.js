
const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent from form submission,allow to process the input  without reloading the page.
  
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
  
    const bmi = weight / ((height / 100) * (height / 100));
    const roundOffBmi = Math.round(bmi * 10) / 10; // Round off
  

    let popUp = "Your BMI is " + roundOffBmi + ". ";
  
    if (roundOffBmi < 18.6) {
      popUp += "Underweight.";
    } else if (roundOffBmi <= 24.9) {
      popUp += "Normal range.";
    } else {
      popUp += "Overweight.";
    }
  
    document.getElementById("results").textContent = popUp; // used to efficiently and safely update the text content of an element in the DOM.
  });
  