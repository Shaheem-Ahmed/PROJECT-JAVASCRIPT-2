//function that takes first & last name and then it greets the user using his full name.

function abc(){
   var a = prompt("ENTER YOUR FIRST NAME");
   return a;
}

function def(){
    var b = prompt("ENTER YOUR LAST NAME")
    return b;
}

var z = abc()
var x = def()
console.log(z + x)

//Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function adding(){
    var num1 = prompt("ENTER FIRST NUMBER")
    var num2 = prompt("ENTER SECOND NUMBER")
    var num3 = num1 + num2;
    
}

var num3 = adding()
document.write(num3)

//Write a function that squares its argument.


var sumOfSquares = function (num) {
    var i,
      sum = 0;
  
    for (i = 1; i <= num; i += 1) {
      sum += i * i;
    }
    return sum;
  }
  
  var num = parseInt(prompt("Enter a number:"), 10); 
  
  console.log("The sum of squares for numbers up to and including " + num + " is " +
    sumOfSquares(num)) ;

//Write a nested function that computes hypotenuse of a right angle triangle.

function getHypotenuseLength(a, b) { 
    if (a && b && Number.isFinite(a) && Number.isFinite(b)) {  
        return Math.sqrt((a * a) + (b * b)); 
    } 
    throw "Invalid numbers"; 
} 
 
getHypotenuseLength(5, 12) 


//Write a function that calculates the area of a rectangle. A = width * height


function myFunction() {
  
    var length = prompt("Enter a whole number for the length of your rectangle.");
    var width = prompt ("Enter a whole number for the width of your rectangle.");
    var depth= prompt ("Enter a whole number for the depth of your rectangle prism");
    
       
    var perimeter = (2 * length ) + (2 * width );
    var area= length * width ;
    var volume= length * width * depth;
    
     document.getElementById("a").innerHTML =
            "Area of rectangle:"  + area;
     document.getElementById("p").innerHTML =
            "perimeter of rectangle:"  + perimeter ;
     document.getElementById("v").innerHTML =
            "volume of rectangle prism:"  + volume;
    }

//Write a JavaScript function that checks whether a passed string is palindrome or not?

var test = prompt("ENTER YOUR WORD");
  is_palindrome(test);

function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
        return false;
      }
    }
    return true;
      }
  function is_palindrome( str )
  {
    let ans = check_palindrome(str);
    if( ans == true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
  }
  
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.



function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

var YOURWORD = prompt("TYPE YOUR WORD");

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word(YOURWORD));

//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

var WORDSFOR = prompt("ENTER YOUR STRING")

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count(WORDSFOR));

//Write a function that computes factorial of a number.


var num = prompt("ENTER YOUR NAME THAT YOU WANT FACTORIZED? ")

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(num);
  console.log(num)
