//create a user object with name, age, gender, nationality isAdmin
let user = {
    name: "John Paul",
    age: 30,
    gender: "M",
    nationality: "Kenyan",
    isAdmin: true
}

console.log(user)

console.log(user.name)
console.log(user["nationality"])
//Add yob property to the user object

user.yob = 1999

console.log(user)

user["hobbies"] = ["swimming", "fishing", "running"] 

console.log(user)

//Add a method getAge that returns the age of the user when given the current year
user.getAge = function(year){
    return year - this.yob
}
console.log(user.getAge(2020))

//How to remove a property from an object

delete user.gender

console.log(user)

//How to reset or update or replace

user.age = 40

console.log(user)