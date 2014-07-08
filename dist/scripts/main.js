function addText(){
    var input = document.getElementById('input').value;
    //document.getElementById('do').innerHTML = input;
    var element=document.createElement("P");
    var textinput=document.createTextNode(input);
    element.appendChild(textinput);
    document.getElementById('todo').appendChild(element);
    


	// $('#buttonclick').on('click', function(){
 //    	document.getElementById('input').val('');
	// });


 }


