//Objects are datatypes that contain more than one value of different types
//Objects are declared as name:value pairs


//Example1: Personal is an object having properties - id, names, age, dateofbirth, address, phone, etc
//Example2: Student is an object having properties - id, name, course, level, subjects, marks, attendance, etc
//Example3: Car is an object having properties - RegNo, Year, Model, Colour, type etc

//Illustration 1
var person={}; // declaration
 // declaration using new keyword
var person={id:"NZ1234", name:"Bryan", age:45, phone:83635525, address1:"28 Britannia Street ", address2:"Wellington"}; //declaration and initial values

document.write(person.id + "<br>"); // displaying a property of the object using (.) dot operator. easy and common practice
document.write(person["id"] + "<br>");



document.write(person.name + "<br>");
document.write(person.age + "<br>");
document.write(person.phone + "<br>");
 
person.age=38; // changing a property value
document.write(person.age + "<br>");
document.write(person.address1 + person.address2);



//Illustration 2
var menuitem1 = {
	name : "Soup",
	type : "starter",
	price : 11.75,
	contains : "chicken mushroon"
};

var menuitem2 = {
	name : "burger",
	type : "main",
	price : 17.50,
	contains : "beef veges cheese"
};

document.write ("<br> " + menuitem1.name + " contains " + menuitem1.contains);
document.write("<br> Price of soup is " + menuitem1.price);
document.write("<br> Price of burger is " + menuitem2.price);

document.write ("<br> Total =  " + (menuitem1.price +menuitem2.price));



//arrays in objects - JSON


var menuitem = [{
	name : "Soup",
	type : "starter",
	price : 11.75,
	contains : "chicken mushroon"
},

{
	name : "burger",
	type : "main",
	price : 17.50,
	contains : "beef veges cheese"
}];

document.write("<br> objects with arrays: menu name :"+ menuitem[1].name);





var firstMenu=menuitem1; //same and not a copy. menuitem1 is assigned to firstMenu, any change to firstMenu will affect menuitem1
document.write ("<br> " + firstMenu.type);



//declaration using new keyword - object person is a prototype for person1
var person1 = new Object(person); //new object called person1 is created of the type person. 
document.write("<br> new object person1" + person1.type);
document.write("<br> The properties of the new object person1 are :  " + Object.getOwnPropertyNames(person1));


//function of a property is called method
//classes are the superset of objects and methods of the same type