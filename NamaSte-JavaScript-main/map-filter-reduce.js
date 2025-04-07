//map, filter, and reduce are higher order function in javascript.

const arr = [5, 1, 3, 2, 6];

//Double - [10, 2, 6, 4, 12]

//Triple - [15, 3, 9, 6, 18]



const output = arr.map((double) => {
   return double * 2;
});

console.group(output);

const result = arr.map((triple) => {
  return triple * 3;
});

console.group(result);


//Convert the arr to Binary - ["101", "1", "11", "10", "110"]

const answer = arr.map((binary) => {
  return binary.toString(2);//forumal to convert number to binary
});

console.group(answer);


//We got the fristNames of our users[] who's age is less than 20
// const ans8 = users.filter((x) => x.age < 20).map((x) => x.fristName);

// console.log(ans8);


//list out the full names
//{}
const users = [
  { fristName: "chidera", lastName: "Nwanosike", age: 29 },
  { fristName: "chuwuka", lastName: "Nwanosike", age: 26 },
  { fristName: "chinechrem", lastName: "Nwanosike", age: 23 },
  { fristName: "onyinye", lastName: "Nwanosike", age: 29 },
  { fristName: "chimudalu", lastName: "Nwanosike", age: 17 },
];

const ans6 = users.map((user) => {
    const fullName = user.fristName + " " + user.lastName;
    return `${fullName}`;
})
console.log(ans6);



//Filter()

const object = [10, 15, 20, 25, 30];

//filter odd values in our object

//filter even values in our object

//filter numbers greater than 19

const ans1 = object.filter((even) => {
  return even % 2 === 0; //forumal for finding even numbers
})

console.log(ans1);

const ans2 = object.filter((odd) => {
  return odd % 2; //forumal for finding odd numbers
});

console.log(ans2);


const ans3 = object.filter((greater) => {
  return greater > 19; //
});

console.log(ans3);

//We got the fristNames of our users[] who's age is less than 20
const ans8 = users.filter((x) => x.age < 20).map((x) => x.fristName);

console.log(ans8);



//Reduce()

//find the sum or the max number in the reduce array

const reduce = [20, 40, 50, 60];

//retrun the age= { 29 : 2, 26 : 1, 23 : 1, 17 : 1};
const ans7 = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(ans7);

//Find the sum of the number
const ans4 = reduce.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(ans4);


function sumNum (reduce){
    let sum = 0;
    for (let i = 0; i < reduce.length; i++){
        sum = sum + reduce[i]
    }
    return sum;
}

console.log(sumNum(reduce));



//This code is correct
function findSumNum () {
 const reduce = [20, 40, 50, 60];

 let sum = 0;
 for (let i = 0; i < reduce.length; i++) {
    sum = sum + reduce[i];
 }
 return sum;
}
console.log(findSumNum());



//Find the Max of the number

//The frist and second code is the same but it's wirtten in diffrent logic


function sumMax(reduce) {
  let max = 0;
  for (let i = 0; i < reduce.length; i++) {
    if (reduce[i] > max) {
      max = reduce[i];
    }
  }
  return max;
}

console.log(sumMax(reduce));


//reduce logic
const ans5 = reduce.reduce((max, curr) => {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(ans5);



