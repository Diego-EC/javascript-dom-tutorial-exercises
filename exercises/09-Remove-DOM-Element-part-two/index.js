let list = document.querySelector("#parentLI");
let childs = list.childNodes;
let childToDelete = childs[3];
childToDelete.parentNode.removeChild(childToDelete);
