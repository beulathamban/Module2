$(function(){
				$(".details").hide();
  
			});

//Pure Javascript
		/*var images=document.getElementsByClassName("image");

		var birdCollection=document.getElementsByClassName("bird");
		var fruitCollection=document.getElementsByClassName("fruit");
		var flowerCollection=document.getElementsByClassName("flower");*/


//displaying all	
		function allImages(){
		
				$(".details").hide();
  			
				$(".image").show();
  
		}
//filtering birds
		function birds(){
		$(".image").hide();
  
			
		$(".details").hide();
  
		$(".bird").show();
  
			
//Pure Javascript
			/*var fileNum=1;
			
			
			for (i=0; i <= (birdCollection.length-1); i++) {
				
				document.getElementById("imageContainer").innerHTML +=  "<img src='image/bird" + fileNum + ".jpeg'>";
				console.log(fileNum);
					fileNum +=1;

				
			}*/
		}
//Filtering fruits*/
		function fruits(){
			
				$(".image").hide();
  	
				$(".details").hide();
  
				$(".fruit").show();
  
		}
//Filtering flowers
		function flowers(){
			
				$(".image").hide();
  
		
				$(".details").hide();
  
			
				$(".flower").show();
  		
		}
//displaying individual item details
	function details(){

				$(".image").hide();
  	
				$(".details").show();
  		
	}

	function callModal() {
			$(".container").hide();
			document.getElementById('modal').style.display ="block";

		}

		function closeModal() {
  			document.getElementById('modal').style.display = "none";
  				$(".container").show();
		}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
   function showSlides(n) {
  var i;
  var images = document.getElementsByClassName("images");
 

  if (n > images.length) {
  	slideIndex = 1
  }   //reset to 1 when maximum number is reached

  if (n < 1) {
    slideIndex = images.length
  } // link back to the last one when first one is reached

  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }

  images[slideIndex-1].style.display = "block";
 
  
}














