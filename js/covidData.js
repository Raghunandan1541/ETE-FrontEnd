const button = document.querySelector("#button");
const country = document.querySelector("#nation");
const sDate = document.querySelector("#startDate");
const eDate = document.querySelector("#endDate");

const confirmed=document.querySelector("#confirmed");
const active=document.querySelector("#active");
const deaths=document.querySelector("#deaths");

button.addEventListener('click', () => {
	if(country.value === '' || sDate.value === '' || eDate.value === '') {
		alert('Enter the required field');
	} else {
		var url="https://api.covid19api.com/country/"+country.value+"?from="+sDate.value+"T00:00:00Z&to="+eDate.value+"T00:00:00Z";

		fetch(url)
		.then((res) => res.json())
		.then((res) => {
			
			var length=res.length;
			var index=length-1;

			var c=res[index].Confirmed;
			var a=res[index].Active;
			var d=res[index].Deaths;

			confirmed.innerHTML=c;
			active.innerHTML=a;
			deaths.innerHTML=d;

			document.querySelector("#result").style.display="block";
			
		})
	}
});
