$(document).on('ready', function(){
	var customDate = new Date();

	function addDays(myDate, days) {
		return new Date(myDate.getTime() + days * 24 * 60 * 60 * 1000);
	}
	// append customeDate to the .cal-date 

	// puts the customeDate in the .cal-date div
	

	$('.cal-date').text(customDate);

	// Edit in place function
	var makeEditable = function () {
		// CREATE INPUT BOX
		var displayType = $(this).css('display');
		var inputBox = $("<textarea class='inputBox'>Edit Here</textarea>");
		$(this).after(inputBox);
		$('.inputBox').height($(this).outerHeight());
		$('.inputBox').width($(this).outerWidth());
		$('.inputBox').css('padding', $(this).css('padding'));
		$('.inputBox').css('border', $(this).css('border'));
		// grabs the margin from whatever you clicked on and applies it to the new input
		$('.inputBox').css('margin', $(this).css('margin'));
		$('.inputBox').css('height', $(this).css('height'));
		
		//SAVE TEXT AND PRESERVE LINE BREAKS
		var savedText = $(this).html().replace(/<br>/g, '\n');
		$('.inputBox').val(savedText);

		//FOCUS AT END
		$('.inputBox').focus();
		$('.inputBox').val( $('.inputBox').val() + ' ');
		
		//HIDE EDITABLE BOX
		$(this).css('display','none');
		var editableItem = this;


		//SAVE INPUT AND REMOVE INPUTBOX ON BLUR
		inputBox.on('blur', function() {
			console.log(editableItem);

			//SAVE INPUT TEXT AND PRESERVE LINE BREAKS
			var inputText = $(this).val().replace(/\n/g, '<br/>').trim();
			$(editableItem).html(inputText);

			//REMOVE TEXTAREA AND DISPLAY ITEM
			$(this).remove();
			$('.editable').css('height', $('.inputBox').css('height'));
			$('.editable').css('display', displayType);

		});
	}

	$(document).on('click', '.editable', makeEditable);
});




// TASKS
// 1) GET DATE to dynamically add when appending (column of divs should each be one day)
// 2) will need to create a function that updates the date
//    then append new days as we scroll will need to keep adding days



// 
// 