testArray = [1,2,3,4,5,6,7,8,9,10];
const result = document.querySelector('.output');
result.textContent = "";

function isEven(number){
    return number % 2 == 0;
}

function sumOfTripledEvens(array){
    const evenNumbersArray = array.filter(isEven);
    array.map((number)=>number*3);
    const sumOfTripledEvens = array.reduce((total, currentItem) => {
        return total += currentItem;
    });
    const para = document.createElement('p');
    para.textContent = sumOfTripledEvens;
    result.appendChild(para);
}