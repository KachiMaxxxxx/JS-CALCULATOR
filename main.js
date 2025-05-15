addEventListener("DOMContentLoaded", () => {

    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn:not(.equal, .AC, .DE)");
    const clear = document.querySelector(".btn.AC.operator");
    const equals = document.querySelector(".btn.equal.operator");
    const deleteNum = document.querySelector(".btn.DE.operator");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const value = e.target.dataset.num;
            screen.value += value;
        });

    });

    equals.addEventListener("click", (e) => {
        if (screen.value !== "") {
            const answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", (e) => {
        screen.value = "";
    });


    deleteNum.addEventListener("click", (e) => {

        screen.value = screen.value.slice(0, -1);
    });

});