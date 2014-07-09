
// $('#todo_input').keypress(function(e){
// 	if (e.which == 13){
// 			$('.input-container').append($('#todo_input').val());	
// 			$('#todo_input').val('');
// 	};

// });


var template = _.template($('#input-container-template').html() );


$(document).ready(function() {		
	var Item = function(info){
		var info = info || {};
		this.id = info.id || _.uniqueId('item');
		this.description = info.description;
		this.complete = info.complete || false;
	}

	$('#add').click(function(){
		var input = $('input:text').val();
		var task = new Item({
			description: input
		});
		console.log(task.description);
		event.preventDefault();
	});  
});

//I made the function below before I realized that I don't know where to point the template. Hence the question mark.

// function makingList(Item){
// 	$(?).html( template(Item));
// };








