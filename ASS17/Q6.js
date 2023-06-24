
var deckRevealedIncreasing = function(deck) {
    deck.sort(function(a, b){return a-b});
    var result = [];
    var queue = [];
    for (var i = 0; i < deck.length; i++) {
        queue.push(i);
    }
    while (queue.length > 0) {
        result[queue.shift()] = deck.shift();
        if (deck.length > 0) {
            queue.push(queue.shift());
        }
    }
    return result;
};