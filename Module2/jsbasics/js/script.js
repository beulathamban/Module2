//document.write("hello");


//var a = 50; // variable declared and assigned an initial  value
//var b = 10;
//var c = a + b; // mathematical operator + is used for addition
//document.getElementById("values").innerHTML ="The value of a is " + 
//a + "</br>" + "The value of b is " + b + "</br>" + "a + b=" + c ;



//Mathematical operator
// replace + with -, *, / for subtraction, multiplication and division respectively 
//c = ( a * b ) / 5 - 50; // 
//document.getElementById("values").innerHTML= "c = " + c ; // sum of a and b is outputted on the DOM


//relational operator
//var answer = 40 > 50;
//document.getElementById("values").innerHTML=answer  ;
//replace > with < (less than), <= (less than or equal to),>= (greater than or equal to), == (equal to), !== (not equal)


//logical operator
//var result= (4 > 5) || (5 !== 5); //or operator
//document.getElementById("values").innerHTML=result;
//replace with and (&&) operator and not(!) operator

//var age = 15;
// use of ternary operator
//result = age > 17 ? "eligible for driving license" : " sorry cannot drive ";

//document.getElementById("values").innerHTML=result;

//conditional structure
/*if (age > 17) {
	document.write("eligible for full driving license");
} else if (age==17) {
	document.write("Congratulations! you are eligible for learners license ")
} else {
	document.write("not eligible for driving<br>");
}
*/
//multiple conditions - displays weekdays

//var day =5;

/*if (day==1) {
	document.write("<br><h1>Monday</h1>");
} else if (day==2){
	document.write("<br><h1>Tuesday</h1");
} else if (day==3){
	document.write("<br>Wednesday");
} else if (day==4){
	document.write("<br>Thursday");
} else if (day==5){
	document.write("<br>Friday");
} else if (day==6){
	document.write("<br>Saturday");
} else if (day==7){
	document.write("<br>Sunday");
} */

//switch 
//var day = prompt("Please enter a number between 1 and 7");
/*document.write("<br><h2>Enter Grade<br></h2>");
var grade='shfkjPass';
switch (grade) {
	case 'A': document.write("<br><h1>Marks between 80 and 100</h1>");
	break;
 	case 'B': document.write("<br><h1>Marks between 65 and 79</h1>");
 	break;
 	case 'C': document.write("<br><h1>Marks between 55 and 64</h1>");
 	break;
	case 'Pass': document.write("<br><h1>Marks between 50 and 54</h1>");
	break;
		default: document.write("<br> <h1>Sorry, Failed in your exam</h1>");

}*/
var marks=64;
if ((marks>=80)&& (marks<=100)){
	document.write("You got a Grade A");
} else if ((marks>=65)&& (marks<=79)) {
	document.write("You got a Grade B");
} else if ((marks>=55)&& (marks<=64)) {
	document.write("You got a Grade C");
}else if ((marks>=50)&& (marks<=54)) {
	document.write("You have managed to Pass in the exam");
} else {
	document.write("Sorry! You have failed in the exam");
}




/*
// display menu items using switch 

//displaying the greatest 
var x=10;
var y=20;
if (x>y) {
	document.write("<br> x is greater than y");
} else 
	document.write("<br> y is greater than x");


// incrementor and decrementor
x = x + 1 ;
document.write("<br> x= " + x  );
x+=1;
document.write("<br> x= " + x  );
x++;
document.write("<br> x= " + x  );
++x;
document.write("<br> x= " + x  );


// greeting
var date=new Date();

document .write("<br> " + date);
if (new Date().getHours() < 12 ){
	document .write("<br> Good Morning");
} else if (new Date().getHours() < 18) {
	document .write("<br> Good Afternoon");
} else if (new Date().getHours() < 24 ) {
	document .write("<br> Good Evening");
}


//mark processing with user input 

var mark= 30;
var mark = prompt("Please enter your mark");
if(mark>=90){
	document.write ("<br> Distinction");
} else if (mark>=80) {
	document.write ("<br> First Class");
} else if (mark>=65) {
document.write ("<br> Second  Class");
} else if (mark >= 50){
	document.write ("<br> Passed");
} else 
	document.write ("<br> Failed");


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