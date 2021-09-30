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
const newName = ["Joy","Antony","Tom"]
const matchName = []
let x = names.length

function chkNames() {
    for (i = 0; i < x; i++) {
        if (names.find(element => element == newName[i])) {
            matchName.push(newName[i])
        }
    }
	console.log(matchName)
}
chkNames()
}

{ 
// Part_4
const names = ["Maria","Antony","Joy","Juan"]

const lengthAns = []
let x = names.length

const nameLength = () => {
	for (i = 0; i < x; i++) {
		lengthAns.push(names[i].length)
		}
	console.log(lengthAns)
}
nameLength()
}
