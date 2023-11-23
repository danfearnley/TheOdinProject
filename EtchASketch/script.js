const gridNumber = 16;
const pageBody = document.getElementById("grid");

for (let i = 0; i < gridNumber; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let j = 0; j < gridNumber; j++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
        gridCell.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "white";
        })
        gridRow.appendChild(gridCell);
    }
    pageBody.appendChild(gridRow);
}