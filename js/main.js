
//***Setup for hamburger menu***
document.getElementsByTagName("burger")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});

//***Setup for making Policies, Benefits, Recruitment, Getting Paid, and Forms boxes get larger on click***
$(document).ready(function(){
	$("button").click(function(){
		$("aside class="aside aside-1"").animate({
			left: '75px',
			height: '+=150px',
			width: '+=150px'
		});
	});
});

// Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
$(document).ready(function() {

});

//Prevent a form submission with the ```event.preventDefault()``` function
$( ".readmorelink" ).click(function(e) {		
	e.preventDefault();							
});		

//Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
//If a user clicks "Read More" on the primary column:
$(".readmorelink").click(function() {
	$( "#show-this-on-click" ).slideDown( "slow", function() {		//have the text in the <p> tag slide down
	});																//along with a "Read Less" link in the blog post 
	$( ".readmorelink" ).addClass( "hide" );						//using $.slideDown() and $.show()
	$( ".readless" ).removeClass( "hide" );							//hide the "Read More" link using ```$.hide()```
});

//Prevent a form submission with the ```event.preventDefault()``` function
$(".readlesslink").click(function(e) {
	e.preventDefault();
});		

// If a user clicks "Read Less" on the primary column:
$(".readless").click(function() {									//have the ```<p>``` slide up
	$( "#show-this-on-click" ).slideUp( "slow", function() {		//and hide the "Read Less" link using  ```$.slideUp()```
	$( ".readmorelink" ).removeClass( "hide" );						//and ```$.hide()```
	$( ".readless" ).addClass( "hide" );							//show the "Read More" link using ```$.show()```
});																
});


//***Basic setup for forms below, but ran out of time to complete due to focus on form setups on index***

// Schedule form
// name - first, last
// effective date - today
// <script>
//    document.getElementById('date').value = (new Date()).format("m/dd/yy");
// </script>
// new schedule - 100%, 80%, 75%, 60%, 50%
// confirm

// $( "form" ).change(function() {
// 	console.log('form')
// 	event.preventDefault()

// 	var new-schedule = $()
// }


// Address form
// name - first, last
// effective date - today
// address 1
// address 2
// city
// state
// zip
// confirm


// Commuting form
// name - first, last
// effective month - jan thru dec
// deduction - transit
// deduction - parking
// total
// confirm

