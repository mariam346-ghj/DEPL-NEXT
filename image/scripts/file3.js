// Higher Order Function- Map 
 /* Higher Order Functions => is a function that accepts function as a parameters
  and / or returns function
   map
    - method created a { new array } 
   - poulated with the results of calling a provided function on every element 
   - in the caling array Syntax map(callback function (element , index, array){} ,thisArg)
    Element => current element being processed in the array
     Index => the index of the current index being processed in the array
      Array => the current array
       Function 
       Anonymous function  
       named function */
        // // double the numbers of array 
        // let myArr = [6, 9, 5, 4, 8]; 
        // console.log(myArr); 
        // let newArr = [];
         // for (let i = 0; i < myArr.length; i++)  // newArr.push(myArr[i] + myArr[i]);
              // } 
              // console.log(newArr);
               // let add = myArr.map(function (ele) { // return ele + ele; // }) // console.log(add);
                // // Ex01 => using map with anonymous function
                 // let addSelf = myArr.map(function (element , index , array)
                   // // console.log(current element being processed${element});
                     // // console.log(current index being processed ${index}); // // console.log(array being processed ${array}); // // console.log(This value is ${this}); // return element + element; // }); // console.log(addSelf); // // Ex02 => using map with named function // function addition(ele) { // return ele + ele; // } // let add = myArr.map(addition); // console.log(add); // // Higher Order Functions - Map Practice // let swapCase = "NoNaMeSpAcE"; // let invertedNum = [-1, 3, 5, -6]; // let ignorNum = "NoLam123No"; // let str= swapCase.split('').join(''); // console.log(str); // // frist conver string to array ussing split // let swap = swapCase.split("").map(function (ele) { // return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(); // }).join(""); // console.log(swap); // let myNums = invertedNum.map(function (ele) { // // return ele > 0 ? -ele : -ele // return -ele // }) // console.log(myNums) // // // Test in console // let onlyStr = ignorNum.split('').map(function (ele) { // return isNaN(parseInt(ele)) ? ele : ''; // }).join(''); // console.log(onlyStr); // Higher Order Functions - Filter /* method created a new array with all element that pass the test implemented by the provided function Syntax filter(callback function (element , index, array){} ,thisArg) Element => current element being processed in the array Index => the index of the current index being processed in the array Array => the current array */ // // Get frinds start with M // let frinds = ["Yossef","Alaa", "Mohammed", "Mahdy", "Ali", "Saleh", "Mahmoud"]; // let startM = frinds.filter(function (ele) { // return ele.startsWith("M"); // it's a condition // }); // console.log(startM); // // //get all even numbers // let numbers = [2, 5, 9, 8, 7, 4]; // let evenNums = numbers.filter(function (ele) { // return (ele % 2 === 0); // }); // console.log(evenNums); // Higher Order Functions - Filter Practice // // Ex01 // let sentenc = "My Name is Lamiaa and I work as a FullStack Developer"; // let wordsFour = sentenc.split(' ').filter(function (ele){ // return ele.length > 4; // }).join(' '); // console.log(wordsFour) // //Ex02 // let ignorNum = "NoLam123No"; // let onlyStr = ignorNum.split('').filter(function (ele) { // return isNaN(parseInt(ele)); // }).join(''); // console.log(onlyStr); // // // //Ex03 // let mix = 'ABC239f7er6' // let doubleNum = mix.split('').filter(function (ele) { // return !isNaN(parseInt(ele)) // }).map(function(ele){ // return ele * 2; // }).join(''); // console.log(doubleNum); // Higher Order Functions - Reduce /* method excutes a reducer function on each element of the array resulting in a single output value Syntax reduce(callback function (accumulater , CurrentVal, CurrentIndex, Source Aay){} ,initialValue) accumulater => the accumulated value is the previously returned in the last invocation CurrentVal => the current element being processed in the array CurrentIndex => the index of current element being processed in the array -- Start from the index 0 if the initial value is provided -- otherwise, it start from