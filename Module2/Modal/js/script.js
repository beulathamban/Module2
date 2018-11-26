
$(function(){
	$(".header__menuicon").click(function(){
        $(".header__nav--list").toggle();
    });

});

function evalRadio() {
	

	 if (document.getElementById("circle").checked) {

	
		
	       $(".circle").show();
	        $(".square").hide();
	        $(".rectangle").hide();
	        
	} 



	if (document.getElementById("square").checked) {
 			$(".circle").hide();
	        $(".square").show();
	        $(".rectangle").hide();


		} 



	 if (document.getElementById("rectangle").checked) {
 			$(".circle").hide();
	        $(".square").hide();
	        $(".rectangle").show();


		} 

	if (document.getElementById("all").checked) {

		    $(".circle").show();
	        $(".square").show();
	        $(".rectangle").show();
	}

}

document.getElementById("circle").addEventListener("click", evalRadio);
document.getElementById("square").addEventListener("click", evalRadio);
document.getElementById("rectangle").addEventListener("click", evalRadio);
document.getElementById("all").addEventListener("click", evalRadio);

//document.getElementById("image1").addEventListener("click", modalShow);

/*function modalShow(){

	 modal.style.display = "block";
	 $("#modal").dialog();
}
*/


var modal = document.getElementById("modal");

var image1= document.getElementById("image1");

var span = document.getElementsByClassName("close")[0];

image1.onclick=function(){
	modal.style.display="block";
}
span.onclick = function() {
    modal.style.display = "none";
}

/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/















