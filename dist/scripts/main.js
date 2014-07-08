function addText(){
    var input = document.getElementById('input').value;
    //document.getElementById('do').innerHTML = input;
    var element=document.createElement("P");
    var textinput=document.createTextNode(input);
    element.appendChild(textinput);
    document.getElementById('todo').appendChild(element);
    

$('#input').val('');

 }


var Item = function(options){
	var options = options || {};
	this.text = options.text;
	this.checked = function (){
		if(options.checked = true)
			options.completed=true;

	};

}