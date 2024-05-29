let scrambledArray : any= ["student", "of",true,123,"am","a","GIAIC","I"]
let val = scrambledArray.slice(7)[0]
let val2 = scrambledArray.slice(4,5)[0]
scrambledArray.unshift(val)
scrambledArray.pop()
scrambledArray.splice(1,0,val2)
scrambledArray.splice(6,1)
let val3 = scrambledArray.slice(7)[0]
scrambledArray.splice(4,0,val3)
scrambledArray.pop()
let val4 = scrambledArray.slice(7)[0]
scrambledArray.splice(2,0,val4)
scrambledArray.pop()
scrambledArray.pop()
scrambledArray.pop()
console.log(scrambledArray);
