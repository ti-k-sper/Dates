function calculAge(diffPlaneteDay, diffPlaneteYear, planete){
	var birthDay = document.getElementById("day").value;
	var birthMonth = document.getElementById("month").value;
	var birthYear = document.getElementById("year").value;
	var dayYear = 365.26;
	today = (new Date()).getTime();
	birthdate = (new Date(birthYear, birthMonth, birthDay)).getTime();
	// my age in day
	ageDay = (today - birthdate) / (1000 * 3600 * 24);
	// my age in year
	ageYear = ageDay / dayYear;
	
	if (ageDay > 0){
		agePlaneteDay = parseFloat(ageDay / diffPlaneteDay).toFixed(2);
		agePlaneteYear = parseFloat(ageDay / diffPlaneteYear).toFixed(2);
		ageDay = parseFloat(ageDay).toFixed(2);
		document.getElementById("earthDay").value = ageDay;
		document.getElementById("planete").value = planete;
		document.getElementById("planeteDay").value = agePlaneteDay;
		document.getElementById("planeteYear").value = agePlaneteYear;
	}
}