document.addEventListener("DOMContentLoaded", function () {

    // fake glitch effect on screen
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lime";

    const warning = document.createElement("div");
    warning.innerText = "⚠ SYSTEM WARNING ⚠";
    warning.style.position = "fixed";
    warning.style.top = "20px";
    warning.style.left = "20px";
    warning.style.fontSize = "20px";
    warning.style.color = "red";
    document.body.appendChild(warning);

    // popup (safe joke message)
    alert("TROLL MODE ACTIVE ⚠ This is just a simulation for fun.");

    // random text glitch effect
    setInterval(() => {
        document.body.style.opacity = (Math.random() * 0.3 + 0.7).toString();
    }, 200);
});
