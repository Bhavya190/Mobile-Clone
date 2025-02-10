document.addEventListener("DOMContentLoaded", () => {

    function updateTime(){
        const currhr =  String(new Date().getHours()).padStart('2', '0');
        const currmin =  String(new Date().getMinutes()).padStart('2', '0');
        const currsec =  String(new Date().getSeconds()).padStart('2', '0');
        const hrdiv =  document.getElementById('hourDisplay');
        const mindiv = document.getElementById('minuteDisplay');
        const secdiv = document.getElementById('secondDisplay');
        hrdiv.textContent = currhr;
        mindiv.textContent = currmin;
        secdiv.textContent = currsec;
    };
    updateTime();
    setInterval(updateTime, 1000);  // Update every second
    const home = document.getElementById("home");
    home.addEventListener("click",()=>{
        window.location.href="/homepage/main.html";
    })
});