//USER INPUTS//

var firstName = prompt("ENTER FIRST NAME");
var lastName = prompt("ENTER LAST NAME")
var fullName = alert("WELCOME " + (firstName + lastName));

//MOBILE PHONE MODEL//

var fav = prompt("ENTER YOUR FAVOURITE MOBILE MODEL")
var favmobile = "My favourite phone is " + fav;
var length = favmobile.length;
console.log(length)
document.write("LENGTH OF STRING : " + length);
document.write("<br>")

//INDEXOF//

var string = "Pakistani";
var word = string.indexOf("n");
document.write("Index Of n : " + word)
document.write("<br>")

//INDEXOFTWO//

var hamstring = "Hello World";
var wordtwo = hamstring.lastIndexOf("l");
document.write("Last Index Of l: " + wordtwo)

//Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.//

var string = "XYZ 123 ABC 456 ABC 789 ABC";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

console.log(
  getPosition(string, 'ABC', 2) // --> 16
)

document.write("<br>")

//Repeat Q1 using string concat() method.//

var firstName = prompt("ENTER FIRST NAME");
var lastName = prompt("ENTER LAST NAME")
var fullName = firstName.concat( lastName);
console.log(fullName)

//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.//

var city = "HYDERABAD";
document.write("CITY : " + city)
document.write("<br>")
var namechange = city.replace("HYDER","ISLAM");
document.write("AFTER REPLACEMENT : " + namechange)

//Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.//

var message = "Ali and Sami are best friends. They play cricket and football together.";
var messagechange = message.replace("and","&");
console.log(messagechange);

//Write a program that takes user input. Convert and show the input in capital letters.//

var uppercase = "peanuts";
var UPPer = uppercase.toUpperCase();
console.log(UPPer)

//Write a program that takes user input. Convert and show the input in title case.//

var str = "javascript";
var str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

//Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .//

var userName=prompt("Enter your Input: ");
var message;
var split=[];
var arr=[];
for(var i=0;i<userName.length;i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
    {
            message="Correct User Name";
    }
    while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
    {
        alert("please enter a valid userName");                                                                                                                   
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                break;
            }
        }
    }

}
alert(message);

//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.//



//You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var temp = "The quick brown fox jumps over the lazy dog.";
var count = (temp.match(/the/g) || []).length;
console.log(count);

//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

let text = "Pakistan";
let letter = text.charAt(7);
console.log(letter)

//Write a program to convert the following string to an array using string split method.

var university = "UniversityofKarachi";
var ar = university.split('', 19); 
console.log( ar );
document.write("<br>")
document.write(ar[0]);
document.write("<br>")
document.write(ar[1]);
document.write("<br>")
document.write(ar[2]);
document.write("<br>")
document.write(ar[3]);
document.write("<br>")
document.write(ar[4]);
document.write("<br>")
document.write(ar[5]);
document.write("<br>")
document.write(ar[6]);
document.write("<br>")
document.write(ar[7]);
document.write("<br>")
document.write(ar[8]);
document.write("<br>")
document.write(ar[9]);
document.write("<br>")
document.write(ar[10]);
document.write("<br>")
document.write(ar[11]);
document.write("<br>")
document.write(ar[12]);
document.write("<br>")
document.write(ar[13]);
document.write("<br>")
document.write(ar[14]);
document.write("<br>")
document.write(ar[15]);
document.write("<br>")
document.write(ar[16]);
document.write("<br>")
document.write(ar[17]);
document.write("<br>")
document.write(ar[18]);
document.write("<br>")
document.write(ar[19]);
document.write("<br>")

