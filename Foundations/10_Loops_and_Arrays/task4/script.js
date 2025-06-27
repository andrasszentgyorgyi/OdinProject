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

let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    let sorted = new Array(arr.length);
    for(let i = 0; i<arr.length; i++){
        sorted[i] = arr[i];
    }
    sorted.sort();
    return sorted;
}
/* function copySorted(arr) {
  return arr.slice().sort();
} */
let arr4 = [1,2,3];
function shuffle(array){

    for(let i = Math.floor(Math.random() * array.length); i<array.length; i++){
        let index = Math.floor(Math.random() * array.length);
        console.log(index);
        let temp = array[index];
        array[index] = array[i];
        array[i] = temp
    }
    return array;
}

/* function shuffle(array) { //MINE BETTER THO
  array.sort(() => Math.random() - 0.5);
} */

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];  

function unique(arr){ //this returns elements that only appear once in the array.
    let outputArray = new Array(0);
    for (let i = 0; i<arr.length; i++){
        let counter = 0;
        for(let j = 0; j<arr.length; j++){
            if (arr[i]==arr[j]){
                counter++;
            }
        }
        console.log(counter);
        if (counter == 1){
            outputArray.push(arr[i]);
        }
    }
    return outputArray;
}

/* function unique(arr) { //this returns an array without duplicate items.
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
} */