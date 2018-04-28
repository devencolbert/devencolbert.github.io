"use strict";

document.getElementById("red").onclick = function () {
    myFunction()
};

function myFunction() {
    var racers = [document.getElementById("superman"), document.getElementById("flash")];
    var superManMove = document.getElementById("superman");
    var flashMove = document.getElementById("flash");

    document.getElementById("red").src = "green_light.png";
    var time = setInterval(race, 5);

    function race() {
        var racer = racers[Math.floor(Math.random() * racers.length)];
        var newPos = parseInt(racer.style.left || 0) + 1;
        racer.style.left = newPos + "px";
        if ((newPos + racer.clientWidth) == 1900) {
            clearInterval(time);

            if (racer.id == "superman") {
                var img = document.createElement("IMG");
                img.setAttribute("id", "win_pic")
                img.setAttribute("src", "Winner_Superman.png");
                document.getElementById("winner").appendChild(img);
            }

            if (racer.id == "flash") {
                var img = document.createElement("IMG");
                img.setAttribute("id", "win_pic")
                img.setAttribute("src", "Winner_Flash.png");
                document.getElementById("winner").appendChild(img);
            }
        }
    }

    document.getElementById("winner").onclick = function () {
        reset()
    };

    function reset() {
        var element = document.getElementById("win_pic")
        element.parentNode.removeChild(element);
        superManMove.style.position = "absolute";
        superManMove.style.left = "0";
        flashMove.style.position = "absolute";
        flashMove.style.left = "0";
        document.getElementById("red").src = "red_light.png";
        
    }

}
