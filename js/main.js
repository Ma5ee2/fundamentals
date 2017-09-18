var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		window.alert("You found a match!");
	} else {
		window.alert("Sorry, try again.");
	}

};

var flipCard = function() {
	console.log('flipCard function called')
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

};

var createBoard = function() {
	//for loop to loop through the cards array.
	for (var i = 0; i < cards.length; i++) {
		// create an img element and stored it in a variable cardElement.
		var cardElement = document.createElement('img');
		// Adding src attribute to the cardElement.
		cardElement.setAttribute('src', 'images/back.png');
		// setting the 'data-id' attribute to be the index of the current element.
		cardElement.setAttribute('data-id', i);
		//Created a click event method to add click event to the cardElement.
		cardElement.addEventListener('click', flipCard);
		//method to append the current card element to the game-board id.
		document.getElementById('game-board').appendChild(cardElement);

	}
};

createBoard();	
