$(document).ready(function() {
	$('#description').keypress(function(e){
		if (e.which == 13){
				$('.container').append($('#todo_input').val());	
				$('#todo_input').val('');
		};

	});

	var template = _.template($('#container').html() );

		var Item = function(info){
			var info = info || {};
			this.id = info.id || _.uniqueId('item');
			this.description = info.description;
			this.complete = info.complete || false;
		}

	var test = new Item();

		$('#add').click(function(){
			var input = $('input:text').val();
			var task = new Item({
				description: input
			});
			console.log(task.description);
			event.preventDefault();
		});  
	});

	function makingList(Item){
		$('.item').html(template(Item));
	};