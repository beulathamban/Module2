
//objects and methods

//alert(" object methods");
// function within the object is called a method

//Example 1
/*var employee = new Object;
//var employee={}; //common way 
document.write(Object.getOwnPropertyNames(employee));

employee={
	empId		: 386364,
	empName		: "Ranjith Kumar",
	hoursWorked	: 35,
	overTime	: 5,
	wages		: function() {
		this.wages=(this.hoursWorked*16.75) +(this.overTime*33.50);
		return this.wages;
	}
};
document.write("<br> Employee ID: " + employee.empId);
document.write("<br> Employee Name: " + employee.empName);
document.write("<br> Normal hours worked: " + employee.hoursWorked);
document.write("<br> Over Time hours" + employee.overTime);
document.write("<br> Total Wages: " + employee.wages());

document.write(Object.getOwnPropertyNames(employee));
var employee1= new Object(employee);
document.write(Object.getOwnPropertyNames(employee1));
var employee2=new Object(employee);
*/


//Example:2


var car ={
	regNo		: "NZ293845",
	model		: "BMW  2015",
	type		: "Station Wagon",
	engine		: "Diesel",
	/*move    	: function () {
					var car =document.getElementById("car");
					var start=0;
					speed = setInterval(move, 3);
					function move() {
						if (start >=1600) {
							start=0;
						} else {
							//start=start+1;
							start++;
							car.style.left=start + "px";

						}
					}

					}
*/
}
document.write ( "<br> Car Registration Number: " + car.regNo);
document.write ("<br> Car Model: " + car.model);
document.write ("<br> Car Type:  " + car.type);
document.write ("<br> Car Engine " + car.engine);
document.write (car.move());

var speed;
function moveCar() {
	var car =document.getElementById("car");
	var start=0;
	speed = setInterval(move, 3);
	function move() {
		if (start >=1600) {
			start=0;
		} else {
			//start=start+1;
			start++;
			car.style.left=start + "px";

		}
	}
}

function stopCar() {
	clearInterval(speed);
	alert("Stopped!");
}




















