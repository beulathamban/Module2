document.write ("Displaying the maximum value among 3 numbers");

// comparing a,b,c to find the biggest
function maxi(x,y,z) {
	if ((x>y) && (x>z)) {
		document.write("<br> A is the biggest among " + x + "," + y + "," + z);
	} else if ( y > z ) {
		document.write("<br> B is the biggest among " + x + "," + y + "," + z);
	} else {
 		document.write("<br> C is the biggest among " + x + "," + y + "," + z);
	}

}
var a=2000;
var b= 415;
var c= 23;
maxi(a,b,c);

maxi(1000,2500,1500);

function max_two(x,y) {
	if ( x > y ) {
		document.write("<br> A is the biggest among " + x + "," + y );
	} else {
 		document.write("<br> B is the biggest among " + x + "," + y );
	}
}

max_two(45,23);




//finding the biggest in an array
/*function myMax() {
	var personHeight =[155,163,125,180,157];

	var max = 0; // suitable for positive value
 	//var max = -10000000; // sutiable when you include nagtive values
	for (var i = 0; i < 5; i++) {

		if ( personHeight[i] > max ) {
			max= personHeight[i];
		}

	}
	return max;
}


document.write("<br>The biggest value in the array is " + myMax());





*/

//finding the biggest in an array
function myMin() {
	var personHeight =[155,163,125,180,157];

	var min =100000000; // suitable for positive value
 	//var max = -10000000; // sutiable when you include nagtive values
	for (var i = 0; i < 5; i++) {

		if ( personHeight[i] < min ) {
			min = personHeight[i];
		}

	}
	return min;
}


document.write("<br>The smallest value in the array is " + myMin());

// sorting 

var fruits=["orange","mango","apple"];
var temp =  " ";

for (var i = 0; i < 3; i++) {

	for (var j= i+1; j < 3; j++) {

		if ( fruits[i] > fruits [j] ) {
			temp = fruits[i];
			fruits[i] = fruits [j];
			fruits [j] = temp;
		}

	}



}

document.write("<br>" +fruits);// sorted list must be displayed























