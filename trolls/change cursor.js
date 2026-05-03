javascript:(
function () {
    var choice = "auto"; // 👈 change this value to whatever cursor you want

    switch (choice) {
        case "none":
            setCursor("none");
            break;
        case "alias":
            setCursor("alias");
            break;
        case "all-scroll":
            setCursor("all-scroll");
            break;
        case "auto":
            setCursor("auto");
            break;
        case "cell":
            setCursor("cell");
            break;
        case "col-resize":
            setCursor("col-resize");
            break;
        case "copy":
            setCursor("copy");
            break;
        case "e-resize":
            setCursor("e-resize");
            break;
        case "help":
            setCursor("help");
            break;
        case "not-allowed":
            setCursor("not-allowed");
            break;
        case "progress":
            setCursor("progress");
            break;
        case "grabbing":
            setCursor("grabbing");
            break;
        default:
            alert("Invalid cursor type!");
    }

    function setCursor(c) {
        var x = document.getElementsByTagName("*");
        for (var i = 0; i < x.length; i++) {
            x[i].style.cursor = c;
        }
    }
}
)();
