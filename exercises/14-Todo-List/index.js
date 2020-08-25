// Your code here
window.onload = function() {
	const lis = document.getElementsByClassName("fa-trash");
	const input = document.querySelector("#addToDo");

	for (let index = 0; index < lis.length; index++) {
		const li = lis[index];
		console.log(li);
		li.addEventListener("click", function(event) {
			deleteTask(li);
		});
	}

	input.addEventListener("keyup", function(event) {
		addTask(event, input);
	});
};

function deleteTask(li) {
	//document.querySelectorAll(".fa-trash")
	li.parentNode.parentNode.parentNode.removeChild(li.parentNode.parentNode);
}

function addTask(event, input) {
	if (event.keyCode === 13) {
		let list = document.querySelector("ul");
		let newLi = document.createElement("li");
		let liTags = "<span><i class='fa fa-trash'></i></span> " + input.value;
		newLi.innerHTML = liTags;
		list.appendChild(newLi);
	}
}
