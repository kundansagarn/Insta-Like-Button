var main = document.querySelector(".main");
var i = document.querySelector("i");

main.addEventListener("dblclick", function(){
    i.style.visibility = "visible";
    i.style.transform = "translate(-50%, -50%) scale(1)";
    setInterval(function(){
        i.style.visibility = "visible";
        i.style.transform = "translate(-50%, -50%) scale(0)";
        i.style.opacity = 0.9;
        i.style.transition = "ease-in-out .45s"
    },3000);
})