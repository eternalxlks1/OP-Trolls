function unblurPage() {
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            transition: filter 0.3s ease;
            filter: blur(0px) !important;
        }

        .blurred {
            filter: blur(8px) !important;
        }
    `;
    document.head.appendChild(style);

    // remove blur instantly
    document.body.classList.remove("blurred");
}
