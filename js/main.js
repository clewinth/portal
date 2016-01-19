
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

