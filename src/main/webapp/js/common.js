$(document).ready(function(){
	console.log("carousel");
	$("#jumbotron-iceland").focus();
    // Activate Carousel
	 $("#myCarousel").carousel({interval: 2000});
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
});
