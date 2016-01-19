document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});











Schedule form
name - first, last
effective date - today
<script>
   document.getElementById('date').value = (new Date()).format("m/dd/yy");
</script>
new schedule - 100%, 80%, 75%, 60%, 50%
confirm

$( "form" ).change(function() {
	console.log('form')
	event.preventDefault()

	var new-schedule = $()
}


Address form
name - first, last
effective date - today
address 1
address 2
city
state
zip
confirm


Commuting form
name - first, last
effective month - jan thru dec
deduction - transit
deduction - parking
total
confirm




