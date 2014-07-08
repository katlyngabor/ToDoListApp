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
