document.addEventListener("DOMContentLoaded", () => {
    // get display element
    const display = document.getElementById("display");
    
    // get all button elements and add event listeners for click events
    const buttons = document.querySelectorAll(".btn");
    
    // initialize currentInput and result variables to empty string and 0 respectively
    let currentInput = "";
    let result = "";
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (value === "=") {
                try {
                    result = eval(currentInput);
                    display.value = result;
                    currentInput = result.toString();
                } catch {
                    display.value = "Error";
                }
            } 
            else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
    const home = document.getElementById("home");
    home.addEventListener("click",()=>{
        window.location.href="/homepage/main.html";
    })
});
