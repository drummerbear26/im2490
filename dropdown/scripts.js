$(document).ready(function() {

	$('button#btn-students').on('click', function() {
		var students = new Array("Meg", "Nik", "Ryan", "Steve");
		
		$("#dropdown").find('option').remove();
		
		for (var s = 0; s <= students.length - 1; s++) {
			$("#dropdown").append('<option value="' + students[s] + '">' + students[s] + '</option>');
		}
		
		// alert(students[0] + " is the Bomb!");
	});
	
	$('button#btn-power_rangers').on('click', function() {
		var series = new Array("in Space", "Zeo", "Lost Galaxy", "Time Force");
		
		$("#dropdown").find('option').remove();
		
		for ( var p = 0; p <= series.length - 1; p++) {
			$("#dropdown").append('<option value="' + series[p] + '">' + series[p] + '</option>');	
		}
		
		//alert("Your tennis raquet is broken");
	});
	
	$('button#btn-clear').on('click', function() {
		
		$("#dropdown").find('option').remove();
	});
	
});