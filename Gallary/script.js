// document.addEventListener("DOMContentLoaded", () => {
//     // Select all preview buttons
//     const previewButtons = document.querySelectorAll(".carousel-caption .btn");
    
//     // Get the border-box element
//     const borderBox = document.querySelector(".border-box1");

//     previewButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//         //     // Find the corresponding image source
//         //     const carouselItem = document.querySelectorAll(".carousel-item")[index];
//         //     const imgSrc = carouselItem.querySelector("img").getAttribute("src");

//         //     // Set the background image of the border-box
//         // //     borderBox.style.backgroundImage = `url(${imgSrc})`;
//         // //     borderBox.style.backgroundSize = "cover";
//         // //     borderBox.style.backgroundPosition = "center";
//         //     localStorage.setItem("backgroundImage", imgSrc);
//             const imgSrc = carouselItem.querySelector("img").getAttribute("src");
//             const fullPath = window.location.origin + "/Gallary/" + imgSrc;
//             localStorage.setItem("backgroundImage", fullPath);
//             console.log("Image saved to localStorage:", fullPath);
//         });
//     });
//     const home = document.getElementById("home");
//     home.addEventListener("click",()=>{
//         window.location.href="/homepage/main.html";
//     })
// });
document.addEventListener("DOMContentLoaded", () => {
    const previewButtons = document.querySelectorAll(".carousel-caption .btn");

    previewButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Find the closest carousel item for the clicked button
            const carouselItem = event.target.closest(".carousel-item");
            
            if (carouselItem) {
                const imgSrc = carouselItem.querySelector("img").getAttribute("src");
                const fullPath = window.location.origin + "/Gallary/" + imgSrc;
                localStorage.setItem("backgroundImage", fullPath);
            } else {
                alert("Carousel item not found.");
            }
        });
    });

    const home = document.getElementById("home");
    home.addEventListener("click", () => {
        window.location.href = "/homepage/main.html";
    });
});
