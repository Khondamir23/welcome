let value = "x";

document.querySelectorAll(".game-field").forEach((field) => {
    field.addEventListener("click", function () {
        // Проверка, пусто ли поле
        if (field.innerText === "") {
            field.innerText = value;
            
            // Переключение значения
            if (value === "x") {
                value = "o";
            } else {
                value = "x";
            }
        }
        let result = checkWin()
        if (result != false) {
            alert("Победил " + result + "!");
        }
        
    });
});
function checkWin() {
    
    let combWin=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let cells=document.querySelectorAll(".game-field");
    let win = false
    for (let comb of combWin) {
        if (
            cells[comb[0]].innerText === cells[comb[1]].innerText
            &&
            cells[comb[1]].innerText === cells[comb[2]].innerText
        ) {
            if (cells[comb[0]].innerText != '') {
                win = cells[comb[0]].innerText
                break;
            }
        
        }
    }
    return win;
}
