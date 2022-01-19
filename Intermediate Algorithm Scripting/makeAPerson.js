const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    }

    this.getLastName = function () {
        return fullName.split(" ")[1];
    }

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (firstName) {
        let tempArr = fullName.split(" ");
        tempArr[0] = firstName;
        fullName = tempArr.join(" ");
    }

    this.setLastName = function (lastName) {
        let tempArr = fullName.split(" ");
        tempArr[1] = lastName;
        fullName = tempArr.join(" ");
    }

    this.setFullName = function (name) {
        fullName = name;
    }

};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
console.log(bob.setFullName("John Cena"));
console.log(bob.getFullName());