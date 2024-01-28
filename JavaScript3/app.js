// Part 8
// Array Methods

// //1.forEach
// // let arr = [2,3,4,5,6];

// // let print = function (el){
// //     console.log(el)
// // }
// // arr.forEach(print);

// //or
// let arr = [2,3,4,5,6];
// arr.forEach(function(el){
//     console.log(el);
// })

// // or 
// let arr = [
// {
//     name:"Abhi",
//     marks:94.4,
// },
// {
//     name:"Abhi2",
//     marks:95,
// },
// {
//     name:"Abhi3",
//     marks:99,
// }
// ];
// arr.forEach((student)=>{
//     console.log(student.marks);
// })

//2.Map method
// let num = [2,3,4,5]
// let double = num.map((el) => {
//     return el*el;
// })

// //ex:2
// let student = [
//     {
//         name:"Abhi",
//         marks:94.4,
//     },
//     {
//         name:"Abhi2",
//         marks:95,
//     },
//     {
//         name:"Abhi3",
//         marks:99,
//     }
// ];
// let gpa = student.map((el) =>{
//     return el.marks/10;
// })

// //Method3 filter
// let nums = [1,2,3,4,5]
// let even = nums.filter((el) =>{
//     return (el%2 == 0);
// })

// // Method 4 Every
// console.log([1,2,3,4].every((el) =>
//     el%2 ===0));

// console.log([2, 4].every((el) =>
//     (el%2 ===0)));

// //Method 5 some
// console.log([1,2,3,4].some((el) =>
//     el%2 ===0));

//Method 6 reduce
// let arr = [2,3,4,5]
// let finalValue = arr.reduce((res,el) => res+el);
// console.log(finalValue); //14

// //ex:2 finding maximum number in an array using reduce method
// let arr = [,3,4,5,6]
// let result = arr.reduce((res,el) =>{
//     if(el>res){
//         return el;
//     }
//     else{
//         return res;
//     }
// })
// console.log(result)

//Practice Questions

// //Question1
// //check if all elements in an array are multiples of 10 are not

// console.log([10,20,31,40].every ((el) => el%10 ==0)) // false

//  Question 2// to find the minimum number in an array

// let arr = [2,3,4,0,6]

// let ans = arr.reduce((res,el) =>
// Math.min(res,el));
// console.log(ans)

// //create a function to find the minimum number in an array
// let nums = [2,3,4,5,6]
// function getMin(nums){
//     let min = nums.reduce((res,el) =>
//     {
//         if(el<res)
//         {
//             return el
//         }
//         else{
//             return res
//         }
//     });
//     return min;
// }

// // default parameters
// function sum(a,b=2){
//     return a+b;
// }
// sum(2,);

// // 8. spread(...)
// let arr = [3,4,5,6]
// console.log(...arr) // 3 4 5 6
// console.log(Math.min(...arr)) // 3

// // spread with array literals
// //ex:1
// let arr = [1,2,3,4,5]
// let newArr = [...arr];  // her eit will make a copy of arr and newArr will be the copy of arr
// console.log(newArr); 

// //Ex:2
// let chars =[..."hello"];
// console.log(chars);  // ['h', 'e', 'l', 'l', 'o']

// //ex:3
// let odd = [1,3,5,7,9]
// let even = [2,4,6,8,10]

// let nums = [...odd,...even];
// console.log(nums);

// // Object literals
// const data = {
//     email:"info@gmail.com",
//     password:"abcd",
// };
// console.log(datacopy ={...data}) // {email: 'info@gmail.com', password: 'abcd'}
// console.log(datacopy ={...data , name:"Abhi"}) //{email: 'info@gmail.com', password: 'abcd', name: 'Abhi'}

// //ex:2
// let arr = [1,2,3,4,5];
// let obj1 = {...arr}; //obj1 -> key:val
// console.log(obj1); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

//Rest 
// Allows a function to take an idefinite number of arguments and bundle them in an array
// function sum(...args) {
//     return args.reduce((add,el) => add+el);
// }

// //ex:2
// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min,el) =>{
//         if (el<min) {
//             return el;
//         }
//         else {
//             return min;
//         }
//     });
// }

// //Destructuring
// // storing values of array into multiple variables

// let names = ["Abhi","Tony","Bruce","Peter"]
// let [winner ,runnerup, ...others] = names;
// console.log(winner); // Abhi
// console.log(runnerup); // Tony
// console.log(...others); // Bruce Peter

// // Destructuring for objects
// const student = {
//     name:"Abhi",
//     age:14,
//     class:9,
//     subjects:["hindi","english","math","science"],username:"karan@123",
//     password:"abcd",
//     city:"pune",
// };

// let {username , password} = student;

//Practice  Questions 
// // Question 1. Square and sum the array elements using the arrow function and then find the average of the array.
// let nums = [2,3,3,4,5,6];

// const square = nums.map((num) => num*num);
// console.log(square)

// let sum = square.reduce((acc,cur) => acc+cur,0);
// console.log(sum);

// let avg = sum/nums.length;
// console.log(avg); // final answer  16.5


// //Question 2
// //create a new array whose element = element + 5
// let nums = [2,3,4,5,6]
// console.log(nums.map((nums)=>nums = nums+5));

// //Question 3
// let arr = ["Abhi","Hello","Sleep","Good"]
// console.log(arr.map((arr) => arr.toUpperCase()));

// //Question 4
// const doubleAndReturnArgs = (arr, ...args) =>[
//     ...arr,
//     ...args.map((v) => v*2),
// ];
// console.log(doubleAndReturnArgs([1,2,3],4,5)); //  [1, 2, 3, 8, 10]

// //Question 5
// const mergeObjects =(object1,object2) => ({ ...object1, ...object2 });
// console.log(mergeObjects({ a:1, b:2},{ c:3, d:4}));

