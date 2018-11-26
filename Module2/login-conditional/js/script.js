// odd or even

//var x=7;
/*var x=prompt("Please enter a number");
if (x%2==1){
	document.write("odd");

} else {
	document.write("even");
}


//user credentials

var username="yoobee";
var password="12345";
var username = prompt("Please enter your username");
var password= prompt("Please enter your password");
if (username=="Yoobee" && password=="12345"){
	document.write("<br>You are authorized to view the website");
} else {
	document.write("<br>You are not authorized to view the website");
}
*/


var x=5;
var y=10;
var answer=2 * x + y; //displays 20
var result= 2 * (x ** 2); // dispalys 50
document.write( "<br>" + "answer= " + answer + "<br>");
document.write("result= " + result + "<br>");
document.write( ( x <= y )+ "<br>");

document.write( ( x > y ) + "<br>");
document.write( (x == y ) + "<br>");
document.write( (x !== y ) + "<br>");
document.write( ( ( x >= y ) || (x !== y ) ) + "<br>");
document.write( ( ( y<=x ) && (y !== x ) ) + "<br>");



//var day=2;
var day=prompt("enter day number"); //switch and prompt - data type conversion needed
switch (day) {
case '1': document.write("Monday");
break;
case '2': document.write("Tuesday");
break;
default: document.write("Wrong");

}

//switch 
var day = prompt("Please enter a number between 1 and 7");
//document.write("<br><h2>Enter Grade<br></h2>");
//var grade='shfkjPass';
switch (parseInt(day)) { // parseInt() function converts the variable day into integer
	case 1: document.write("<br><h1>Monday</h1>");
	break;
 	case 2: document.write("<br><h1>Tuesday</h1>");
 	break;
 	case 3: document.write("<br><h1>Wednesday</h1>");
 	break;
	case 4: document.write("<br><h1>Thursday</h1>");
	break;
		default: document.write("<br> <h1>Sorry, Wrong Number</h1>");

}