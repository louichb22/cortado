// Detect the lazyloading images
let lazyObjects = document.querySelectorAll('.lazyload');

// Define the lazyloader's function
function lazyloader() {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < lazyObjects.length; i++) { 
        distanceFromTop = lazyObjects[i].getBoundingClientRect().top;
        if (distanceFromTop < windowHeight) {
            if (lazyObjects[i].dataset.src) {
                lazyObjects[i].src = lazyObjects[i].dataset.src;
            }
            if (lazyObjects[i].dataset.bg) {
                lazyObjects[i].style.backgroundImage = "url('" + lazyObjects[i].dataset.bg + "')";
            }
        }
    };
}

// Execute every time the user scrolls
window.onscroll = function() {
    lazyloader();
}

// Execute every time the window is resized
window.onresize = function() {
    lazyloader();
}

// Execute on load
lazyloader();