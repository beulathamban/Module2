var allProducts = [
    {
        name: 'product 1',
        price: 10,
        image: 'product1.jpg'
    },
    {
        name: 'product 2',
        price: 15,
        image: 'product2.jpg'
    },
    {
        name: 'product 3',
        price: 20,
        image: 'product3.jpg'
    },
    {
        name: 'product 4',
        price: 10,
        image: 'product4.jpg'
    },
    {
        name: 'product 5',
        price: 15,
        image: 'product5.jpg'
    },
    {
        name: 'product 6',
        price: 18,
        image: 'product6.jpg'
    },
    {
        name: 'product 7',
        price: 25,
        image: 'product7.jpg'
    },
    {
        name: 'product 8',
        price: 8,
        image: 'product8.jpg'
    },
    {
        name: 'product 9',
        price: 12,
        image: 'product9.jpg'
    },
    {
        name: 'product 10',
        price: 20,
        image: 'product10.jpg'
    }
];
var productsContainer = document.getElementById('allProducts');

for (var i = 0; i < 5; i++) {
    addProductToPage(allProducts[i]);
}

function filterProducts(){
    event.preventDefault();

    var minPrice = document.getElementById('minPrice').value;

    productsContainer.innerHTML = '';

    for (var i = 0; i < allProducts.length; i++) {

        if( allProducts[i].price >= minPrice){
            addProductToPage(allProducts[i]);

        } else {
            continue;
        }
    }
}


function addProductToPage(singleProduct){
    var productDiv = document.createElement('div'); //DOM Manipulation
    productDiv.className = 'myCards';
    console.log(productDiv.className);
//setting innerHTML
    productDiv.innerHTML += '<img class="myPhotos" src="images/'+singleProduct.image+'" alt="Card image cap">'
    productDiv.innerHTML += '<div class="">';
    productDiv.innerHTML += '<h3 class="">'+singleProduct.name+'</h3>';
    productDiv.innerHTML += '<h5 class="">$'+singleProduct.price+'</h5>';
    productDiv.innerHTML += '<p class="">'+allProducts.indexOf(singleProduct)+'</p>';
 
    productDiv.innerHTML += '</div>';

    productsContainer.appendChild(productDiv); //DOM Manipulation
}

var photo=[];
 photo = document.getElementsByClassName("myPhotos");

function addPhoto() {
    var i;
   
outerloop:
    for (i = 0; i < allProducts.length; i++) {
    

        for (var j=0; j<photo.length; j++) {
                

            var left=(photo[j].getAttribute("src"));
        

            var right= ("images/"+allProducts[i].image); //image of the object
          
            if (left == right) {
                
               
                continue outerloop;

            } 

        }  
                  if (i >= allProducts.length-1)     {
                    addProductToPage(allProducts[i]);
                    alert ("no more photos");
                  } else {
                  
                    addProductToPage(allProducts[i]);
             
            }
            break;
      
         
    }
  return photo;
  
}
console.log(photo);

/*$("#deletePhoto").hover(function(){
    ("Please refresh before deleting photos");
});*/

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
}); 

function deletePhoto() {
     var child;
     
    var x = prompt("Enter product number?");
    for (var i=0; i< photo.length; i++) {
       
     
       var filename=photo[i].getAttribute("src");
       console.log(filename);
        var filenumber= filename.substr(14,1);
        console.log(filenumber);
  
    if (photo.length > 3) {
        if (x == (filenumber)) {
           
           
            child= productsContainer.childNodes[i+1]; 

            console.log(child);
         

            productsContainer.removeChild(child); //DOM Manipulation
            break;
            } 
    }

    else {
        alert ("sorry, cannot remove. Minimum 3 products must be on display");
        break;
    }
  }

}


document.getElementById("addPhoto").addEventListener('click',addPhoto);
document.getElementById("deletePhoto").addEventListener('click',deletePhoto);


//working with DOM
console.log (document.getElementsByClassName("myPhotos")); //using class name to get all elements with the same class name
console.log (document.getElementsByTagName("h5")); // using tag name to get all elements with the same tag name
console.log (document.querySelector("img"));
console.log (document.querySelector(".myPhotos"));
console.log (document.querySelectorAll(".myPhotos"));

console.log (productsContainer.innerHTML); //getting  text  & markup
console.log (productsContainer.textContent); // gets and sets text only

// Traversing DOM
console.log (productsContainer.childNodes[2]);
var child = productsContainer.childNodes[2];
console.log (child.parentNode);
console.log (child.previousSibling);
console.log (child.nextSibling);
console.log (productsContainer.lastChild);
console.log (productsContainer.firstChild);
console.log (photo[3].hasAttribute("src")); // gives true if present else false if not present
console.log(photo[2]);
photo[3].setAttribute("alt","Wolf");

console.log(photo[3].getAttribute("alt"));
console.log(photo[3]);





