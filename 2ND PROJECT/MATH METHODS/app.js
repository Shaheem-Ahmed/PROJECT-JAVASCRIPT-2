//Write a program that takes a positive integer from user & display the following in your browser.

var integer = prompt("ENTER AN INTEGER");
var roundoff = Math.round(integer);
console.log(roundoff);
document.write(roundoff);
document.write("<br>")
var secondinteger = Math.floor(integer);
document.write("<br>")
document.write(secondinteger)
document.write("<br>")
var thirdinteger = Math.ceil(integer);
document.write("<br>")
document.write(thirdinteger)
document.write("<br>")

//Write a program that takes a negative floating point number from user & display the following in your browser.

var integer = prompt("ENTER A NEGATIVE NUMBER");
var roundoff = Math.round(integer);
console.log(roundoff);
document.write(roundoff);
document.write("<br>")
var secondinteger = Math.floor(integer);
document.write("<br>")
document.write(secondinteger)
document.write("<br>")
var thirdinteger = Math.ceil(integer);
document.write("<br>")
document.write(thirdinteger)
document.write("<br>")

//Write a program that displays the absolute value of a number.//

var absolene = prompt("ENTER VALUE(either positive or negative)")
document.write("THE REAL VALUE : " + absolene)
document.write("<br>")
var absolute = Math.abs(absolene)
document.write("<br>")
document.write("THE ABSOLUTE VALUE : " + absolute)
console.log(absolute)

//Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

document.write("<br>")
var dice = Math.floor(Math.random() * 10);
console.log(dice)
document.write("<br>")
document.write("THE RANDOM VALUE : " + dice)

//Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

document.write("<br>")
var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    document.write(" Random Coin Value: Head")
} else if(floor === 1)
{
    document.write(" Random Coin Value: Tails")
}

//Write a program that shows a random number between 1 and 100 in your browser.

document.write("<br>")
var dice = Math.floor(Math.random() * 100);
console.log(dice)
document.write("<br>")
document.write("THE RANDOM VALUE BETWEEN 0 TO 100 : " + dice)

//Write a program that stores a random secret number from 1 to 10 in a variable.

var realNum = 9;
var TYPE = prompt("TYPE THE SECRET NUMBER")
if(TYPE == 9){
    alert("CONGRATULATIONS")
}else if(TYPE < 9){
    alert("TRY AGAIN")
}

if(TYPE > 10){
    alert("INVALID! WRITE A NUMBER BETWEEN 1 TO 10")
}

//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
document.write("<br>")
var weight = prompt("ENTER WEIGHT")
document.write("THE WEIGHT OF THE USER IS : " + weight)
console.log(weight)