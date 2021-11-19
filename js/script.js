let hamburger = document.getElementById('btn_menu')
let menu = document.getElementById('menu_list')
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show')
});

const html = document.querySelector('html')
function scrollNoSmooth() {
    html.style.scrollBehavior = 'smooth';
}

scrollNoSmooth();

(function () {
    var throttle = function (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function () {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("resize", "optimizedResize");
})();

window.addEventListener("optimizedResize", function () {
    console.log("Resource conscious resize...");
});
