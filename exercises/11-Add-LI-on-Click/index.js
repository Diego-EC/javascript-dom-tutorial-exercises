let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");

	let newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";
	list.appendChild(newLi);
});
