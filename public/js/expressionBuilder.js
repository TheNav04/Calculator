import { renderData } from "./mathHistory.js";

const displayExpression = document.getElementById("expressionDemo");
const displayAnswer = document.getElementById('finalAnswer');
const buttons = document.querySelectorAll("#buttons button");   //returns nodeList of all button elements that use class .buttons


export let currentInput = "";
export let finalEval = "";

export function addButtonFunctionality(){
    buttons.forEach(button => { //forEach used to loop through elements in arraylike structure
        console.log(button);
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "C") {
                currentInput = "";
                finalEval = "";
            } 
            else if(value === "B"){
                currentInput = currentInput.substring(0, currentInput.length - 1);
            }
            else if (value === "=") {
                try {
                    finalEval = eval(currentInput).toString();
                    renderData(currentInput, finalEval);
                } catch {
                    finalEval = "Error";
                }
            }
            else {
                currentInput += value;
            }

            displayExpression.textContent = currentInput || "0";
            displayAnswer.textContent = "= " + finalEval || "=";
        });
});
}


