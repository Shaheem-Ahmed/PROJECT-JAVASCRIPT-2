//Write a program that displays current date and time in your browser.

var d = new Date();
 d.setFullYear(2021);
 console.log(d)


//Write a program that alerts the current month in words.

var d = new Date();
 d.getMonth();
 console.log(d)

//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}else if(c === "Mon"){
    document.write()
}else if(c === "Tue"){
    document.write()
}else if(c === "Wed"){
    document.write()
}else if(c === "Thr"){
    document.write()
}else if(c === "Fri"){
    document.write()
}

//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var day = prompt();
if(day == "monday"){
    alert("TODAY IS MON");
} else if (day == "tuesday"){
    alert("TODAY IS TUE")
} else if (day == "wednesday"){
    alert("TODAY IS WED")
} else if (day == "thursday"){
    alert("TODAY IS THU")
} else if (day == "friday"){
    alert("TODAY IS FRI")
} else if (day == "saturday"){
    alert("TODAY IS SAT")
} else if (day == "sunday"){
    alert("TODAY IS SUN")
}



//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("It's PM")
}else if(c === "13:"){
    document.write("It's PM")
}else if(c === "14:"){
    document.write("It's PM")
}else if(c === "15:"){
    document.write("It's PM")
}else if(c === "16:"){
    document.write("It's PM")
}else if(c === "17:"){
    document.write("It's PM")
}else if(c === "18:"){
    document.write("It's PM")
}else if(c === "19:"){
    document.write("It's PM")
}else if(c === "20:"){
    document.write("It's PM")
}else if(c === "21:"){
    document.write("It's PM")
}else if(c === "22:"){
    document.write("It's PM")
}else if(c === "23:"){
    document.write("It's PM")
}else if(c === "24:"){
    document.write("It's AM")
}else if(c === "01:"){
    document.write("It's AM")
}else if(c === "02:"){
    document.write("It's AM")
}else if(c === "03:"){
    document.write("It's AM")
}else if(c === "04:"){
    document.write("It's AM")
}else if(c === "05:"){
    document.write("It's AM")
}else if(c === "06:"){
    document.write("It's AM")
}else if(c === "07:"){
    document.write("It's AM")
}else if(c === "08:"){
    document.write("It's AM")
}else if(c === "09:"){
    document.write("It's AM")
}else if(c === "10:"){
    document.write("It's AM")
}else if(c === "11:"){
    document.write("It's AM")
}

//Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var dategame = prompt("TYPE THE DATE")

if(dategame < 15){
 alert("“First fifteen days of the month”")
}else if(dategame > 15){
    alert("“Last days of the month”.")
}

//Write a program that determines the minutes since midnight, Jan. 1, 1970

document.write("<br>")
var d = new Date();
 d.setFullYear(2021);
 console.log(d)

 var millsSince = d.getTime();
 var minutesSince = d.getMinutes();
 console.log(millsSince)
 document.write("<br>")
 document.write("ELAPSED MILLISECONDS SINCE JANUARY 1 1970: " + millsSince)
 document.write("<br>")
 document.write("ELAPSED MINUTES SINCE 1ST JAN 1970: " + minutesSince)
 console.log(minutesSince)

//Write a program to ask the user about his age. Calculate and show his birth year in your browser.
document.write("<br>")
var CUrrentAGE = prompt("ENTER YOUR AGE")
var fixed = 2021;
var Year = fixed - CUrrentAGE;
console.log(Year)
document.write("THE BIRTH YEAR IS: " + Year)
document.write("<br>")
document.write("YOUR AGE IS: " + CUrrentAGE)

//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
document.write("<br>")
var d = new Date();
 d.setFullYear(2021);
 console.log(d)

 var HUNYEARS = new Date();
HUNYEARS.setFullYear(1921);
document.write("100 YEARS BEFORE IT WAS " + HUNYEARS)
console.log(HUNYEARS)

//Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var today = new Date();

today.setHours(today.getHours() - 1);
console.log(today)

//Write a program that creates a Date object for the last day of the last month of 2020

var ENDDAY = new Date(); 
ENDDAY.setFullYear(2020, 11, 31);
console.log(ENDDAY);



//Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?

document.write("<br>")

var day1 = new Date(); 
var day2 = new Date("06/18/2015");

var difference= Math.abs(day2-day1);
var days = difference/(1000 * 3600 * 24)

console.log(days)

//Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

document.write("<br>")

var day1 = new Date();
var day2 = new Date("01/01/2015");

var difference= Math.abs(day2-day1);
var days = difference/(1000)

console.log(days)


