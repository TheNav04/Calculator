//This module for keeping the math history
const history = document.getElementById('WhereHistoryGoes');


//TODO: Need to print new value at the top



export function renderData(expression, finalAns){
    const newData = document.createElement('p');
    newData.textContent = expression + " = " + finalAns + "\n";
   
    history.insertBefore(newData,  history.firstElementChild);  //Will add before an element
    // history.appendChild(newData);    Will add to the bottom
    console.log(history.textContent);
    console.log(history.querySelectorAll('p'));
}



