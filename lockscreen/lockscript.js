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
            if (value === "ok") {
                if(display.value==="1234"){
                    window.location.href="/homepage/main.html";
                }
                else{
                    alert("Invalid Pin");
                    currentInput="";
                    result="";
                    display.value = result;
                }
            } 
            else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
