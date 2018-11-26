document.write("<pre> <h2> <center> ");
// Storing data in an array

var fruits=["Orange", "Mango", "Apple", "Grapes", "Kiwi", "Pomegranate", "Natjie"];
//fruits=[0,-5,300,-56,45,29,200];

/*for(var i=0; i<fruits.length; i++) {
 document.getElementById("list").innerHTML +="<li>" + fruits[i] + "</li>";
}*/


// sorting an array
function sortFruit() {
var temp =" ";
for (var i = 0; i <(fruits.length); i++) {

	for (var j = (i + 1); j < (fruits.length); j++) {

		//descending order
		if (fruits[i] > fruits[j]) {

		//ascending order
		//if (fruits[i] > fruits[j]) {

			temp = fruits[i];
			fruits[i] = fruits[j];
			fruits[j] = temp;

		}
	}
}

//sorted array
document.getElementById("sortlist").innerHTML=("<br> <br> Sorted Array: " + fruits);
document.getElementById("list").innerHTML="";
for(var i=0; i<fruits.length; i++) {

 document.getElementById("list").innerHTML +="<li>" + fruits[i] + "</li>";
}
}



// search an item in the array

function searchFruit() {
	var bool=true;
outerloop:
while (bool==true) {

var search=document.getElementById("search").value;

for ( i = 0; i < fruits.length; i++) {

	if (search === fruits[i]) {
		document.getElementById("searchresult").innerHTML= ("<br> <br>Here you go...! I found a Red Apple for you in the basket !!! " + fruits[i] + "     ");
		if (fruits[i] === "Apple") {
			document.getElementById("searchresult").innerHTML += ("<img src='image/fruit2.jpeg' style='width:150px; height:150px;'>");
		}
		break outerloop;

	}  else {
		continue;
	}
		
}
document.getElementById("searchresult").innerHTML= ("<br> <br> Sorry, I didnt find your choice in my basket. Do you want any other fruit? " );
bool=false;
	
}


}

//filter


/*var numbers = [6,3,83,394,0,2,-4,4];

//var criteria = parseInt(prompt ("Enter a number. I will give less than that number available in the array"));

for (i = 0; i <= numbers.length; i++) {

	if ( numbers[i] < criteria) {
		document.write ( "<br> " + numbers[i] + "<br>");
	}
}*/



function filterFruit(){
var checkbox=document.getElementById("filter");
if (checkbox.checked==true) {
	document.getElementById("searchresult").innerHTML= "Mango, Orange and Natjie" ;
}



}

function colorEval() {
	
	

	//console.log(a.trim().toLowerCase());
	if ((color.value).trim().toLowerCase()=== "red") {
		
		document.getElementById("thankyou").innerHTML ="Yes, It is red. Thank you";
	} else {
		document.getElementById("thankyou").innerHTML ="Sorry! its a red color";
	}
}






