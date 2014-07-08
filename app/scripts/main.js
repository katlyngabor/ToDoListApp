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