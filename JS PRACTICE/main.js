    // Question 1

    // Write the function printInt(n)
    // taking one parapmeter n and print all natural numbers
    // from 1 to n in console.
function printInt(n) {
        // Using a loop print from 1 to n
        // start: 1
        // var i = 1;
        // // stop: n
    for(var x=1;x<=n;x++){
        //console.log(x);   
        }
    } 

    //printInt(10);
    //printInt(13);



    // Question 2

    // Write the funcion printinRev(n) taking one parameter n and print all natural 
    //numbers in reverse in console (from n to 1).
 function printIntRev(n) {
        for(var i=n;i>=1;i--){
            console.log(i);
        }
    }
    printIntRev(10);
    //console.log(reverse.toString("n"));


    //Question 3

    // Write the function checkInput(x) taking one parameter x 
    //and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
    // Examples:
        // checkInput(5) ====> ‘number’
        // checkInput(‘hello’)======> ‘string’
        // checkInput(‘5’) ======> ‘string’
        // checkInput(true)=====> boolean
        // checkInput([1,2,3,4]) =====> -1

function checkInput(x) {
    // checking if x is either number, string or boolean
        if(x is a number) {
            return "number"
        }   else if (x is a string) {
            return "string" 
        }   else if (x is a booloean) {
            return "booloean"
        }   else {
            return -1;
        }
    }
    if (typeof x === "number" || typeof x === "string" || typeof x ==="booloean") {
    return typeof x
    }  else {
       return -1;
    }

    // console.log(checkInput([1,2,3,4,]))
    // console.log()checkInput("132"));
    //console.log()checkInput(false));
    //console.log()checkInput("132, 122, 222"));
        

    //Question 4

    //Write the function simpleEvenAdding(num) taking a number and
    // add up all the even numbers from 1 to num. 
	   // Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
       // simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
       // simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
       // simpleEvenAdding(1) ======> 0
       // simpleEvenAdding(0) =======> 0
function simpleEvenAdding(num) {

  // store the answer
  var solution = 0;

  // loop over from 1 to num
  // for(var i=1; i<=num;i++){
  //   //check if current index is even or odd
  //   if(i % 2 === 0) {
  //    solution += i;
  //   }
    
  // }
  for (var i=0;i<=num;i+=2) {
        solution += i;
  }
    return solution;
}

console.log(simpleEvenAdding(10));
    

    //Question 5

    //Write the function letterCapitalize(str) taking a string and 
    //capitalize the first letter of each word. The given words will be separated by only one space.
	//Examples:
    //letterCapitalize(“hello world”) ===========> “Hello World”
    //letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”

    //Hint: There is a built-in function in javaScript that change
    //string into uppercase. There is also a function to separate string into
    // an array of words.

    // use split and toUpperCase and seperate the characters
    // "hello"[0].toUpperCase()
    //"hello".slice(1)
    //"hello"[0].toUpperCase() + "hello".slice(1)
    function letterCapitalize(str){
        // seperate the str into array of words
        // using split
        var words = str.split(" ");

        //Store the answer
        var solition ="";
        
        // find the first character in each word
        for(var i=0;i<words.length; any {
          var upperWord = words[i].replace(words[i][0], words[i][0.]toUpperCase());
          solution += upperWord;
        }

        return solution.slice(1);
    }

        //loop over the array of words
        // capitalize the first character of each word
    
    console.log(letterCapitalize("hello world"));
    console.log(letterCapitalize("you cannot find your answer online"));


    //Questiom 6

    //Write the function simpleReverse(str) taking a string and return
    // the string in reversed order. 
	//Examples:
    // simpleReverse(‘hello’) ======> ‘olleh’
    // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

    //Hint: Think of how you can loop through a string or array of
    //characters backwards to produce a new string

    //"hello".split('');
function simplereverse(str){
    // transfer str into array
    str.split("");

    //reverse the array
    var reArray = strArray.reverse();

    //transfer array back into string
    return reArray.join('');
}

//console.log(simpleReverse("Good Morning"));

    //Question 7

    //Write the function findDiff(arr) taking an array of numbers as
    // parameter and return the difference between the maximum number
    //and the minimum number (max - min). 
	//Examples:
	//findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	//findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	//findDiff([1, 1, 1, 1, 1]) =======> 0 
    //findDiff([1]) ======> 0;
    //findDiff([]) =======> 0;

    function findDiff(arr){
         //find minimum number in the array
        var min = Math.max(... arr);

        //find the maximum number in the array
        var max = Math.max(... arr);

        //find max - min

        //return the max-min;
}

console.log(finDiff([1,2,3,5,4,10,2]));
 

    //Question 8

    //Write the function timeConvert(num) taking a number as parameter and
    // return the
    // number of hours and minutes the parameter converts to. 
    //Separate the number of hours and minutes with a colon.
	//Example:
		//timeConvert(61) ======> 1:1
		//timeConvert(63) =======> 1:3
		//timeConvert(120)======> 2:0
		//timeConvert(59)=======> 0:59
        //Hints: Dividing and modulo the number 60.
        function timeConvert(num){
        // getting the hour
        var hour = parseInt(num/60);
        //getting the minuets
        var minutes = num % 60
        //combine the answer
        return hour + ":" + minutes
    }

    console.log(timeConvert(123));
    console.log(timeConvert(59));
        



//Question 9

// Write the function checkInput(x) taking one parameter
// x and return the string 'number' if x is a number;
// return the string 'string' if x is a string;
// and return 'boolean' if x is a boolean.
// Otherwise returns -1.
//function checkInput(x) {
  //  return typeof x; 
// }
//Input

//Input N: 10
//Output

// Natural numbers from 10-1 in reverse: 
//10, 9, 8, 7, 6, 5, 4, 3, 2, 1
   
//Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

N: 10
Output
//Enter starting value: 15
//Enter end value: 5
15
14
13
12
11
10
9
8
7
6
5

// MSIMBO
// JavaScript Assignment
// Description
   // This is going to be a separated assignment helping you to learn and practice JavaScript. Finish the following questions in main.js.

    // Question 1:
    // Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

    function printInt(n) {
        // Using a loop print from 1 to n
        // start: 1
        // var i = 1;
        // // stop: n
       for(var x=1;x<=n;x++){
           console.log(x);
        }
    } 
    
    printInt(10);

    // Question 2:

    // Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

    // Question 3:

   // Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
   // Examples:
        // checkInput(5) ====> ‘number’
        // checkInput(‘hello’)======> ‘string’
        // checkInput(‘5’) ======> ‘string’
        // checkInput(true)=====> boolean
        // checkInput([1,2,3,4]) =====> -1

    // Question 4:
    // Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
        // Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
            // simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
            // simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
            // simpleEvenAdding(1) ======> 0
            // simpleEvenAdding(0) =======> 0
            //from 1 to num.
            function simpleEvenAdding(num){
                // store the answer
                // var solution =
                // loop over numbers from 1 to num
                for(){
                    //check if current index is even or odd
                }
            }





    // Question 5:

    // Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
       // Examples:
          //  letterCapitalize(“hello world”) ===========> “Hello Word”
    // letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
    // slit, toUpperCase
    "hello[0]".toUpperCase()
    function letterCapitalize(str){
        // separate the str into array of words
        // using split

        // loop over the array of words
        // capitalize the first character
    }
        
    // Hint: There is a built-in function in javaScript that change string into uppercase. There is also a function to separate string into an array of characters.


    // Question 6:

    // Write the function simpleReverse(str) taking a string and return the string in reversed order. 
      //  Examples:
            // simpleReverse(‘hello’) ======> ‘olleh’
            // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

    // Hint: Think of how you can loop through a string or array of characters backwards to produce a new string
    // Reverse String method



    // Question 7:

   //  Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
       // Examples:
        // findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
        // findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
        // findDiff([1, 1, 1, 1, 1]) =======> 0 
    // findDiff([1]) ======> 0;
    // findDiff([]) =======> 0;

    function findDiff(arr) use max method
    find min to max

    // Question 8:

    // Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
       // Example:
            // timeConvert(61) ======> 1:1
            // timeConvert(63) =======> 1:3
            // timeConvert(120)======> 2:0
            // timeConvert(59)=======> 0:59
            // Hints: Dividing and modulo the number 60.


    // Question 9:

    // Write the function findStr(str, long) taking two strings as parameters
    // and return how many str you can find in long. Assume Str is not empty string.
    // Example:
        // findStr(“hi”, “dasdhidasdahidashi”) =======> 3
        // findStr(“o”, “daodo”) =======> 2
        // findStr(“ha”,”abcde”)=======> 0
        // findStr(“h”, “hihelloho”)======> 3
        function findStr(str, long){
            var splitedArray = long.split(str);
            return splitedArray.length - 1;
        }


        // Question 10:

    // Write the function selfDividingNumbers(left, right) taking two 
    //number bound as parameters and returns an array of every possible self dividing number between 
    // them, including the bounds. 

    // Hint: A self-dividing number is a number that is divisible by
    // every digit it contains. For example, 128 is a self-dividing number
    // because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

    //Examples:
        //selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
        //selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
    //selfDividingNumbers(12, 21) =======> [12, 15]

    function selfDividingNumbers(left, right){
       // store the answer 
       var solution = [];
       for (var i=0; i< digits.length;i++){
        if(isSelfDividing(i));{
        solution.push(i)
       }
    }
    return solution;
}

    function isSelfDividing(num){
        var digits = num.toString().split('');

        for(var i=0; i< digits.length; i++){}
        if (num % digits[i] !==0) {
            return false;
        }
    }
console.log(isSelfDividing(1,22))


//Question 11

// Write the function moveZeros(nums) taking an array of numbers
// and move all 0’s to the end of it while maintaining the relative order
// of the non-zero elements.  For example:
    //moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
    //moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
    //moveZeros([0,0,0]) ======> [0,0,0]
    //moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]
function moveZeros(nums) {
    //count the number of 0s
    var counter = 0;

    //store the solution array
    var solution = [];

    for(i=0;i<inums.length;i++){
      if(nums[i] === 0){
          counter++;
       } else {
         solution.push(nums(i));
      }

    }
// addingos
for(var j=counter;j>0;j--){
    solution.push(0);
}
return solution;
}

console.log(moveZeros([1,0,21,4,0,0,4]));





//Question 12

    // Create an average(parameter) nums: function that calculates the average
    // of an array of numbers.
        //Examples: 
        //average([2, 6]) =====> 4
        //average([2, 3, 3, 5, 7, 10]) ======> 5
        //average([7, 1432, 12, 13, 100]) ======> 312.8
        //average([]) ======> 0
    function average(nums) {
        if (nums.length === 0){
            return 0;
        }
        // adding up all numbers
        var sum = 0;
        for (var i=0;i<nums.length;i++){
            sum += nums[i];
        }
        //divide by its length
        return sum / nums.length
    }

    console.log(average([1,2,5,3,1]));






   // Deliverables
        Create a new repository in your github and named it “JavaScript Practice”. Put all functions into one file called “main.js”. 
    Tagging a Release
    We will be using code repository tags (or releases) to "submit" assignments. When you consider your work complete and ready for evaluation (ready for release), go to your code repository in GitHub and generate a release by navigating to "releases". Then click on "Create a new release" and type the name of the tag in the input field labeled "Tag version". We will be using the following tags for the various assignments:

    v1.0(this assignment)
    
    If you need to resubmit the assignment then create a new tag by adding a version number, e.g.,
    v1.1, v1.2, etc...
    
    I will grade the very last release. The date/time you create the tag will be considered the date/time of submission. 

    amples:
        