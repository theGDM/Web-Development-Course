//practical example
function enterFirstName(first) {
    return function enterLastName(last) {
        return function enterAge(age) {
            return function printDetails() {
                console.log(`Your Name is ${first} ${last} and age is ${age}.`);
            }
        }
    }
}

console.log("Enter your first name");
var enterLastName = enterFirstName("Jasbir");
console.log("Enter your last name");
var enterAge = enterLastName("Singh");
console.log("Enter your age");
var printdetails = enterAge(25);
printdetails();
