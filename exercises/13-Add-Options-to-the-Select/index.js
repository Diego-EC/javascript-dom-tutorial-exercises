window.onload = function() {
	console.log("The website was loaded...");
	const countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let select = document.querySelector("#mySelect");

	for (var i = 0; i < countries.length; i++) {
		const countrieToAdd = countries[i];
		let newOption = document.createElement("option");
		newOption.textContent = countrieToAdd;
		newOption.value = countrieToAdd;

		document.querySelector("#mySelect").appendChild(newOption);
	}

	select.addEventListener("change", function(event) {
		alert(event.target.value);
	});
};
