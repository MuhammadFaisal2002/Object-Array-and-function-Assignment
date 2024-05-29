type people1 = {
    friends : Friend[],
}
type Friend = {
    firstName : string,
    lastName : string,
    id? :number
}
let people  : people1 = {
    friends : []
}
let friend1 : Friend = {
    firstName : "Muhammad",
    lastName : "Faisal",
}
let friend2 : Friend = {
    firstName : "Muhammad2",
    lastName : "Faisal2",
    id : 124
}
let friend3 : Friend = {
    firstName : "Muhammad3",
    lastName : "Faisal3",
}
people.friends.push(friend1,friend2,friend3)
console.log(people.friends)