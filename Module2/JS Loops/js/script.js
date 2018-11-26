// Loop structure help to repeat a block of statements 



// while loop - repeats statements  as long as the expression is true else terminates
document.write("use of while loop<br>");
var i = 0;
            
         
            while (i < 5){
               document.write("Hello : " + i + "<br />");
               i++;
            }
         
            


// do...while loop - as same as while but condition is cheked at the end, so atleast once the loop will be executed

document.write("<br> Use of do..while loop <br>");

var i = 0;

do {
	document.write("Hello : " + i + "<br />");
	i++;

} while (i < 5);



// for loop
document.write("<br> Use of for loop <br>");
for (var j = 0; j < 5; j++) {

	document.write("Hello : " + j + "<br />");

}

//for..in loop---- will learn when ohjects are introduced

var x="Yoobee School of Design";
document.write("<br>"+ x + "<br>");
for (var i=0; i<x.length; i++){
	document.write("*");
}
document.write("<br>");

// multiplication tables

for(var i=1; i<=10; i++) {
	
	document.write("<br>" + 5 + "x" + i + "=" + (5*i));
}



//nested loops
for(var i=1; i<=10; i++) {
	for (var j=1; j<=i; j++){
		document.write("# ");
	}
	document.write("<br>");
}




