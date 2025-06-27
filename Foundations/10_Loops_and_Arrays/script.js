function camelize(input){
    const splitAtDashes = input.split('-');
    for(let i = 1; i<splitAtDashes.length; i++){
        let currentWord = String(splitAtDashes[i]);
        currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
        splitAtDashes[i] = currentWord;
    }
   let outputString = splitAtDashes.join("");
   return outputString;
}

/* function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
} */

function filterRange(arr,a,b){
    return arr
        .filter((num)=>num>=a && num<=b);
}

function filterRangeInPlace(arr,a,b){
    for(let i = 0; i<arr.length; i++){
        let val = arr[i];
        if(val < a || val > b){
            arr.splice(i,1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
//alert(arr);

let arr2 = [5, 2, 1, -10, 8];

function sortInDecreasingOrder(arr){
    arr.sort();
    let sortedArray = new Array(arr.length);
    let counter = 0;
    while (arr.length!=0){
        const element = arr.pop();
        sortedArray[counter] = element;
        counter++;
    }
    console.log(sortedArray);
}

//arr.sort((a, b) => b - a);