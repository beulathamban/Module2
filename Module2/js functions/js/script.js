// functions are subprograms/ procedure that can be called to reuse


//function is defined
/*function sum() {
var a=prompt("Enter a number");
var b=prompt("Enter another number");
var c=parseInt(a) + parseInt(b);// converts the text/string type into Integer(number)
document.write("The sum of a and b is "  + c + "<br>");
}


sum(); // calls the function */

//sum(5,6);
//sum(30,20);
//sum(100,123);

/*var a=prompt("Enter a number");
var b=prompt("Enter another number");
var c=sum(parseInt(a), parseInt(b));

//var a,b,c; //global variable - active everywhere
function sum(x,y) { // dummy parameter/argument

return c=x+y;// converts the text/string type into Integer(number)
//document.write("The sum of a and b is "  + c + "<br>");
}


document.write("The sum of a and b is "  + c + "<br>");

*/

//Example of passing a text and a number into a function


// var name=prompt("Enter your name");
// var age=prompt("Enter your age");
// var age=parseInt(age);

// hello(name,age); //calling hello function 

// function hello(name, age){
// 	document.write("Hello " + name + "! <br>" + "You are " + 
// 		age + "years old<br>");
// }


// multiply
/*var a=prompt("Enter a number");
var b=prompt("Enter another number");
var c=multiply(parseInt(a), parseInt(b));

function multiply(x,y) { 

return c=x*y;

}

document.write("The a multiply by b is "  + c + "<br>");*/

//Problem 1
/*function sum_consecutive(){
	var sum = 0;
	for(var i = 1; i <= 10; i++){
		sum = sum + i;

	}
	return sum;
}


document.write("The sum of first 10 consecutive numbers is " + sum_consecutive() + "<br>");

//Problem 2
function sum_different(){
	var sum = 0;
	
	for(var i = 1; i <= 10; i++){
		var x=parseInt(prompt("Enter a number"));
		sum = sum + x;

	}
	return sum;
}

document.write("The sum of first 10 consecutive numbers is " + sum_different() + "<br>");





//Problem 3
function occurences() {
	var tot=0;
	for(var i = 1; i <= 10; i++){
		var x=parseInt(prompt("Enter a number"));
		if (x==5) {
		tot = tot + 1;
		}

	}
	return tot;

}
document.write("The number of occurances of 5 in the given list of numbers is " + occurences() + "<br>");
*/
//Problem 4
/*function mult_table(m,n){

	for (i=1 ; i <= n; i++) {
		document.write(m + "x" + i + "=" + (m*i) + "<br>");
	}

}

var x=parseInt(prompt("Which table you want?"));
var y=parseInt(prompt("Do you want the table upto...."));


mult_table(x,y);
*/

//Mathematical formula calculator
function areaSquare(side){
   document.write("Area of Square=" + (side*side) + "<br>");
}
function areaRect(len,wid){
   document.write("Area of Rectangle=" + (len*wid) + "<br>");
}
function areaCircle(rad){
   document.write("Area of Circle=" + (3.14*rad**2) + "<br>");
}
function periRect(len,wid){
   document.write("Area of Rectangle=" + (2*(len+wid)) + "<br>");
}
function circumCircle(rad){
   document.write("Area of Circle=" + (2*3.14*rad) + "<br>");
}
var side,len, wid, rad;
side= 4;
len=5;
wid=10;
rad=2;
areaSquare(side);
areaRect(len,wid);
areaCircle(rad);
periRect(len,wid);
circumCircle(rad);


//document.write();












