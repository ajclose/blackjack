/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let handNumbers = []
  for (var i = 0; i < hand.length; i++) {
    currentCard = hand[i]
    if (currentCard === "K"|| currentCard === "J" || currentCard === "Q") {
      handNumbers.push("10")
    } else {
      handNumbers.push(currentCard)
    }
  }

  let sortedHand = handNumbers.sort()

  let currentValue = 0
  for (var j = 0; j < sortedHand.length; j++) {
    let currentCard = sortedHand[j]
    if (currentCard === "A") {
      if (currentValue <= 10) {
        currentValue += 11
      } else {
        currentValue += 1
      }
    } else {
      currentValue += parseInt(currentCard)
    }
  }
  return currentValue;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
