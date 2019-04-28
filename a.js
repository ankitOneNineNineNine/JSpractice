var input = document.querySelector("input");
var button = document.querySelector("button");
var ul = document.querySelector("ul");
button.addEventListener("click", buttonfunction);
input.addEventListener("keypress", inputfunction);
function buttonfunction(){
	if(input.value.length > 0){
			var li = document.createElement("li");
			li.onclick = change;
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
	}
}
function inputfunction(event){
	if(input.value.length > 0 && event.which == 13){
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
	}
}





