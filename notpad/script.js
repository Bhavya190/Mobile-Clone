document.addEventListener("DOMContentLoaded",() =>{
    const bottomIcons = document.querySelectorAll(".bottom-icons .btn");
    bottomIcons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "/homepage/main.html";
        });
    });
});