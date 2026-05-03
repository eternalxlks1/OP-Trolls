document.addEventListener("DOMContentLoaded", function () {

    // make screen look "hacked"
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lime";
    document.body.style.fontFamily = "monospace";
    document.body.style.overflow = "hidden";

    // create overlay text
    const overlay = document.createElement("div");
    overlay.innerText = "SYSTEM LOADING...";
    overlay.style.position = "fixed";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.fontSize = "30px";
    overlay.style.color = "lime";
    document.body.appendChild(overlay);

    // glitch flicker effect
    setInterval(() => {
        document.body.style.opacity = Math.random() > 0.5 ? "1" : "0.8";
    }, 120);

    // random "code rain" text
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*";

    function spawnText() {
        const el = document.createElement("div");
        el.innerText = chars[Math.floor(Math.random() * chars.length)];
        el.style.position = "fixed";
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.top = Math.random() * window.innerHeight + "px";
        el.style.color = "lime";
        el.style.fontSize = "18px";
        el.style.opacity = "0.7";

        document.body.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 1000);
    }

    setInterval(spawnText, 50);

});
