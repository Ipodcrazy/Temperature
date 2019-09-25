'use strict';

document.getElementById("btn").addEventListener("click", convert);

function convert() {

    //setting the Fahenheit variable
    let fnum = document.getElementById("f-value").value;
    console.log(fnum);

    //giving the result/Celcius a name
    let result = document.getElementById("c-value").value;
    console.log(result);

    //doing the math
    let var1 = 32;
    let result1 = fnum - var1;
    console.log(result1)
    let result2 = result1 * (5 / 9);

    //Putting the result into the HTML

    document.getElementById("c-value").innerHTML = (result2) + "°";
}
