//Map to names

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
console.log(names); */

//-------------------

//Map to objects
/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = users.map(({name, surname, id})=>({id, fullName: name + " " + surname}));
for(prop in usersMapped){
    console.log(usersMapped[prop].fullName);
} */

//-------------------
//Sort users by age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(arr){
    arr.sort((a,b)=>a.age-b.age);
}

for(prop in arr){
    console.log(arr[prop].name);
}

//-------------------
//Get average age

console.log(getAverageAge(arr));

function getAverageAge(arr){
    let sum = 0;
    let count = 0;
    for(prop in arr){
        sum+=arr[prop].age;
        count++;
    }
    return sum/count;
}

function getAverageAgeAlt(arr){
    return arr.reduce((prev, user)=>prev+user.age,0) / arr.length;
}

console.log(getAverageAgeAlt(arr));

//-------------------
//Create keyed object from array
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
console.log(usersById);

