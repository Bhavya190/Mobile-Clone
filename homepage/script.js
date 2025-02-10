// document.addEventListener("DOMContentLoaded", () => {
//     // Select all preview buttons
//     const previewButtons = document.querySelectorAll(".carousel-caption .btn");
    
//     // Get the border-box element
//     const borderBox = document.querySelector(".border-box1");

//     previewButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             // Find the corresponding image source
//             const imgSrc = localStorage.getItem("backgroundImage")
//             // Set the background image of the border-box
//             borderBox.style.backgroundImage = `url(${imgSrc})`;
//             borderBox.style.backgroundSize = "cover";
//             borderBox.style.backgroundPosition = "center";
//             localStorage.removeItem("backgroundImage");
//         });
//     });
//     const bottomicons=document.querySelectorAll(".bottom-icons .btn")
//     bottomicons.forEach((button) => {
//         button.addEventListener("click", () => {
//             window.location.href="/homepage/main.html";
//         });
//     });
//     const searchtext = document.getElementById("search-input");
//     const searchbutton = document.getElementById("search");
//     searchbutton.addEventListener("click", () => {
//         // Perform search logic here
//         const searchTerm = searchtext.value.toLowerCase();
//         alert("Search term: " + searchTerm);
//         searchtext.value="";
//     });
//     const chrome=document.getElementById("chrome");
//     // chrome.addEventListener("click",()=>{
//     //     window.location.href="https://www.google.com/chrome";
//     // })
//     // const parentDiv = document.getElementById('border-box');
//     //   const divWidth = parentDiv.offsetWidth;
//     //   const divHeight = parentDiv.offsetHeight;
//       chrome.addEventListener('click', () => {
//         // Get the parent div dimensions
//         const parentDiv = document.getElementById('border-box');
//         // const divWidth = parentDiv.offsetWidth;
//         // const divHeight = parentDiv.offsetHeight;
  
//         // Open a new window with the same height as the parent div
//         const newWindow = window.open("https://www.google.com/","_blank",`width = ${divWidth},height=${divHeight}`);
//       });
// });
document.addEventListener("DOMContentLoaded", () => {
    // Set the background image from localStorage
    const borderBox = document.querySelector(".border-box1");
    const savedImgSrc = localStorage.getItem("backgroundImage");

    console.log("Saved image source:", savedImgSrc); // Debugging log

    if (savedImgSrc) {
        borderBox.style.backgroundImage = `url(${savedImgSrc})`;
        borderBox.style.backgroundSize = "cover";
        borderBox.style.backgroundPosition = "center";
        localStorage.removeItem("backgroundImage"); // Remove the saved image from localStorage after displaying it in the border-box
    } else {
        console.log("No image found in localStorage.");
    }

    // Bottom Icons Navigation
    const bottomIcons = document.querySelectorAll(".bottom-icons .btn");
    bottomIcons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "/homepage/main.html";
        });
    });

    // Search Functionality
    const searchText = document.getElementById("search-input");
    const searchButton = document.getElementById("search");
    searchButton.addEventListener("click", () => {
        const searchTerm = searchText.value.toLowerCase();
        alert("Search term: " + searchTerm);
        searchText.value = ""; // Clear search input
    });

    // Chrome Button Functionality
    // const chrome = document.getElementById("chrome");
    // chrome.addEventListener("click", () => {
    //     const parentDiv = document.querySelector(".border-box1");
    //     const divWidth = parentDiv.offsetWidth;
    //     const divHeight = parentDiv.offsetHeight;

    //     window.open("https://www.google.com/", "_blank", `width=${divWidth},height=${divHeight}`);
    // });
});
