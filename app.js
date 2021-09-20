
document.addEventListener("DOMContentLoaded", function () {

    let btnSpace = document.createElement("div");
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    button.id = "btn";

    button.appendChild(btnText);
    btnSpace.appendChild(button);
    document.body.appendChild(btnSpace);
    button.style.verticalAlign = "top";

    let container = document.createElement("div");
    document.body.appendChild(container);

    let divCount = 0;

    button.addEventListener("click", function (e) {
        let addDiv = document.createElement("div");
        container.appendChild(addDiv);
        divCount++;
        addDiv.setAttribute("style", "width: 100px; height: 100px; margin: 20px; display: inline-flex; align-content: center; justify-content: center; background-color: black;");
        addDiv.id = divCount;
        addDiv.className = "divSquare";

        let innerDiv = document.createElement("div");
        addDiv.appendChild(innerDiv);
        innerDiv.innerHTML = divCount;
        innerDiv.id = "hiddenText";
        innerDiv.setAttribute("style", "display: none;");

        let colorChoice = ["darkolivegreen", "lavenderblush", "palevioletred", "lavender", "steelblue", "teal", "lightseagreen", "cornflowerblue"];

        document.getElementById(divCount).addEventListener("mouseover", mouseOver);
        document.getElementById(divCount).addEventListener("mouseout", mouseOut);

        function mouseOver() {
            innerDiv.setAttribute("style", "text-align: center; align-self: center; color: white;");
        }

        function mouseOut() {
            innerDiv.style.display = "none";
        }

        addDiv.addEventListener("click", function (e) {
            addDiv.style.backgroundColor = colorChoice[Math.floor(Math.random() * colorChoice.length)];
        });

        addDiv.addEventListener("dblclick", function (e) {
            if (divCount % 2 == 0) {
                if (addDiv.nextElementSibling == null) {
                    alert("No square here!");
                } else {
                    addDiv.nextElementSibling.remove();
                };
            } else {
                if ((addDiv.previousElementSibling == null)) {
                    alert("No square here!");
                } else if (addDiv.previousElementSibling == button){
                    alert("No square here!");
                } else {
                    addDiv.previousSibling.remove();
                };
            };
        });
    });
});