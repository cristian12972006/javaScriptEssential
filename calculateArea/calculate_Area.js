let length;
let width;

function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);

    let area=length*width;

    document.getElementById('result').innerText=`The area of the rectangule is: ${area}`;

}


let art1;
let art2;
let art3;
function groceryTracker(){

    art1=parseFloat(document.getElementById('num1').value);
    art2=parseFloat(document.getElementById('num2').value);
    art3=parseFloat(document.getElementById('num3').value);

    let total= art1+ art2+ art3;

    document.getElementById('result1').innerText=`total de compras es: ${total}`;


}