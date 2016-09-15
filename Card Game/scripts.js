var correctCards = 0;
$( init );

function init() {
	// Hide the success message
	$('#successMessage').hide().css( {
		left: '580px',
		top: '260px',
		width: 0,
		height: 0
	} );	
	
	// Reset the game
	correctCards = 0;
	$('#cardPile').html( '' );
	$('#cardSlots').html( '' );
	
	// Create the pile of shuffled cards
	var words = ['ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyu', 'ju'];

	for ( var i=0; i<10; i++ ) {
		$('<div>' + words[i] + '</div>')
			.data( 'number', i+1 )
			.attr( 'id', 'card'+words[i] )
			.appendTo( '#cardPile' )
			.draggable( {
				containment: '#content',
				stack: '#cardPile div',
				cursor: 'move'
				//revert: true
		} );
	}
	
	// Create the card slots
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	// Randomly orders numbers array
	numbers.sort( function() { return Math.random() - .25 } );

	for ( var i=0; i<10; i++ ) {
		$('<div>' + numbers[i] + '</div>')
			.data( 'number', numbers[i] )
			.appendTo( '#cardSlots' )
			.droppable( {
				accept: 'div#cardPile div',
				hoverClass: 'hovered',
				drop: handleCardDrop
			});
	}
}

function handleCardDrop( event, ui ) {
	var slotNumber = $(this).data( 'number' );
	var cardNumber = ui.draggable.data( 'number' );
	
	// If the card was dropped to the correct slot,
	// change the card color, position it directly
	// on top of the slot, and prevent it being dragged
	// again
	
	// 1 '=' means assignment
	// Means we're assigning value to a variable
	
	// 2 '==' means equivalence
	// You're asking are these two things equivalent?
	// Are the values of the two variables the same?
	
	// 3 '===' means identical
	// Are the two variables equal and identical?

	//Positions the dragged object (card) on to the top
	//left corner of the thing that is was dropped on
	ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
	
	if ( slotNumber == cardNumber ) {
		// Adds "correct" class to thing that was dragged
		ui.draggable.addClass( 'correct' );
		
		// Prevents dragged thing from being dragged any more
		ui.draggable.draggable( 'disable' );
		
		//Prevents thing that had card dropped on it from
		// receiving other things to de dropped on it
		$(this).droppable( 'disable');
		
		// Prevents dropped card from going  back to it's home
		ui.draggable.draggable( 'option', 'revert', false );
		
		// Increment correctCards by 1
		correctCards++;
	}
	
	// If all the cards have been placed correctly then display a message
	// and reset the cards for another go
	
	if ( correctCards == 10 ) {
		$('#successMessage')
			.show()	
			.animate( {
				left: '380px',
				top: '200px',
				width: '400px',
				height: '100px',
				opacity: 1
			},
				500);
	}
	
}