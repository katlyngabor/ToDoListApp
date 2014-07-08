<<<<<<< HEAD
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
=======
	$(document).ready( function() {		
	
		$('#addToList').click( function() {
			var todoDescription = $('#listInfo').val();
			
			$('.list').prepend('<div class="todo">'
				+ '<div>'
				//making new classes inside js 
					+ '<input type="checkbox" class="checkingList" name="checking list"/>'
					+ '</div>'
					+ '<div class="listInfo">'
					+ todoDescription
					+ '</div>'
			+'</div>');
			
			$('#textArea')[0].reset();
			
			$('.checkingList').unbind('click');
			$('.checkingList').click( function() {
				var todo = $(this).parent().parent();
				todo.toggleClass('checked');
			});
			return false;		
		});  
	});
>>>>>>> origin/thachbranch
