$(document).ready(function() {		
	var Item = function(info){
		var info = info || {};
		this.id = info.id || _.uniqueId('item');
		this.description = info.description;
		this.complete = info.complete || false;
	}

	$('#add').click(function(){
		var text = document.getElementById("input");
		var task = new Item({
			description: 'hi'
		});
		console.log(task.description);
		event.preventDefault();
	});  
});