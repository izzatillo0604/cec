console.log("Sayt ishlayapti");
document.querySelector("h1").textContent
= "Do'konimizga xush kelibsiz";
document.getElementById("myButton").addEventListener("click", function() {
alert("Tugmani bosdingiz!");
});
function welcommeMessage() { alert("Do'konimizga xush kelibsiz1");
}
window.onload = welcommeMessage;