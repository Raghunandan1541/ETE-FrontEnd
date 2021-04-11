const button = document.querySelector("#button");
const country = document.querySelector("#nation");
const sDate = document.querySelector("#startDate");
const eDate = document.querySelector("#endDate");

const confirmed=document.querySelector("#confirmed");
const active=document.querySelector("#active");
const deaths=document.querySelector("#deaths");

button.addEventListener('click', () => {

	var today = new Date();
	var d = String(today.getDate()).padStart(2, '0');
	var m = String(today.getMonth() + 1).padStart(2, '0');
	var y = today.getFullYear();

	today = y + '-' + m + '-' + (d+1);
	
	if(country.value === '' || sDate.value === '' || eDate.value === '') {

		alert('Enter the required field');

	} else if(eDate.value > today) {

		alert('End Date must be less then current date');

	} else if(sDate.value > eDate.value) {

		alert('Start Date must be less then end Date');

	} else {

		var url="https://api.covid19api.com/country/"+country.value+"?from="+sDate.value+"T00:00:00Z&to="+eDate.value+"T00:00:00Z";

		fetch(url)
		.then((res) => res.json())
		.then((res) => {
			
			var length=res.length;
			var index=length-1;

			var conf=res[index].Confirmed;
			var actv=res[index].Active;
			var dths=res[index].Deaths;

			confirmed.innerHTML=conf;
			active.innerHTML=actv;
			deaths.innerHTML=dths;

			document.querySelector("#result").style.display="block";
			
		});
	}
});
