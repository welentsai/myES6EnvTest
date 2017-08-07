'use strict';

const sentences = [
	{subject: 'JavaScript', verb:'is', object: 'great'},
	{subject: 'Elephants', verb:'are', object: 'large'},
];

// es6 功能: 解構
function say({subject, verb, object}) {
	// es6 功能: 範本字串
	console.log(`${subject} ${verb} ${object}`);
}

// es6 功能: for..of
for(let s of sentences) {
	say(s);
}

// 轉成 布林
// 0 => false , 非0 => true
const n = 0;
const b1 = Boolean(n);
if(b1) {
	console.log('True');
} else {
	console.log('False');
}