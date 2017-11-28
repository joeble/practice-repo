// This program takes in arguments and prints their sum.

let sum = 0
const argLength = process.argv.length

for (let i = 2; i < argLength; i++) {
	sum += +process.argv[i]
	// also works:
	// sum += Number(process.argv[i])
}

console.log(sum)