// JS-05 Conditions and Expressions
// https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions
// PLEASE open in Node.js https://replit.com/languages/javascript
// Exercise#1
{
// Array creation
let names = ["Maria","Antony","Joy","Juan"]
console.log(names)
}

{ 
// Part_1
names.push("Ken")
console.log(names)
}

{ 
// Part_2 (without function)
const x=("Joy")       
names.includes(x);
}

{ 
// Part_2 (function)
const chkName = (y) => names.includes(y)
console.log(chkName("Ken"))
}

{ 
// Part_3
const names = ["Maria","Antony","Joy","Juan"]
const chkName = ["Joy","Antony","Tom"]
const matchName = []
let x = names.length

function chkNames(chk) {
    for (count = 0; count < x; count++) {
        if (chkName.find(element => element == chk[count])) {
            matchName.push(names[count])
        }
    }
console.log(matchName)
    
}
chkNames(names)
}

{ 
// Part_4
const names = ["Maria","Antony","Joy","Juan"]

const lengthAns = []
let x = names.length

function nameLength(chk) {
	for (count = 0; count < x; count++) {
		lengthAns.push(names[count].length)
		}

	console.log(lengthAns)
	
}
nameLength(names)
}
