"use strict";

var funds = 50;
var round = 0;

// 隨機回傳範圍[m, n] (包括頭尾)之間的整數
function rand(m, n) {
	return m + Math.floor((n - m + 1) * Math.random());
}

// 隨機回傳一個
function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

// 下注迴圈

var _loop = function _loop() {
	round++;
	console.log("round " + round + ":");
	console.log("\tstarting funds: " + funds + "p");

	var bets = { crown: 0, anchor: 0, heart: 0,
		spade: 0, club: 0, diamond: 0 };

	var totalBet = rand(1, funds);

	if (totalBet === 7) {
		totalBet = funds;
		bets.heart = totalBet;
	} else {
		// 分發
		var remaining = totalBet;
		do {
			var bet = rand(1, remaining);
			var face = randFace();
			bets[face] = bets[face] + bet;
			remaining = remaining - bet;
		} while (remaining > 0);
	}
	//console.log(`Bets is: ${bets}`);
	console.log('\tbets: ' + Object.keys(bets).map(function (face) {
		return face + ": " + bets[face] + " pence";
	}).join(', ') + (" (total: " + totalBet + " pence)"));

	funds = funds - totalBet;

	var hand = [];
	for (var roll = 0; roll < 3; roll++) {
		hand.push(randFace());
	}
	console.log("\thand: " + hand.join(', '));

	// 判斷結果
	var winnings = 0;
	for (var die = 0; die < hand.length; die++) {
		var _face = hand[die];
		if (bets[_face] > 0) winnings = winnings + bets[_face];
	}
	funds = funds + winnings;
	console.log("\twinnings: " + winnings);
};

while (funds > 1 && funds < 100) {
	_loop();
}

console.log("\tending funs: " + funds);