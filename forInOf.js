// for in loop in array
const numbers = [11, 21, 31];
for (let x in numbers) {
  console.log(x); // 0,1,2 => index
  console.log(numbers[x]); //11,21,31 => value
}

//for in loop in object
const numbers1 = { a: 4, b: 5, c: 6 };
for (let x in numbers1) {
  console.log(x); // a,b,c => key
  console.log(numbers1[x]); //4,5,6 => value
}

// for of loop in array 
const numbers2 = [11, 21, 31];
for (let x of numbers2) {
  console.log(x); // value
}
// for of loop in array 
const numbers3 =  { a: 4, b: 5, c: 6 };
for (let x of numbers3) { // array is not iterable
  console.log(x); 
}
