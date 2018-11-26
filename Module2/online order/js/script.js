// array of objects
var menuitem=[
		{
			type: "starter",
			name: "Soup",
			price: 11.75
		},

		{
			type: "starter",
			name: "Spring Roll",
			price: 9.00
		},

		{
			type: "main",
			name: "Burger",
			price: 17.50
		},
		{
			type: "main",
			name: "Chicken & Chips",
			price: 19.00
		}

];



var  starter=0;
var main=0;
var total=0;

function displaySoup(){
document.getElementById("item1").innerHTML = menuitem[0].name + "<br>" + menuitem[0].price;
starter=menuitem[0].price;
}


function displaySroll(){
document.getElementById("item1").innerHTML = menuitem[1].name + "<br>" + menuitem[1].price;
starter=menuitem[1].price;
}


function displayBurger(){
document.getElementById("item2").innerHTML = menuitem[2].name + "<br>" + menuitem[2].price;
main=menuitem[2].price;
}


function displayCchips(){
document.getElementById("item2").innerHTML = menuitem[3].name + "<br>" + menuitem[3].price;
main=menuitem[3].price;
}


function displayAmount(){
	total=starter+main;
	document.getElementById("total").innerHTML = "<br>" + " Amount:" +total;
}
