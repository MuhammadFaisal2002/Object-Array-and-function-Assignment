var people = {
    friends: []
};
var friend1 = {
    firstName: "Muhammad",
    lastName: "Faisal",
};
var friend2 = {
    firstName: "Muhammad2",
    lastName: "Faisal2",
    id: 124
};
var friend3 = {
    firstName: "Muhammad3",
    lastName: "Faisal3",
};
people.friends.push(friend1, friend2, friend3);
console.log(people.friends);
