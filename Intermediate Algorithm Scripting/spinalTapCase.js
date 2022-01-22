function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    let tempStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // regular expression /\s+|_+/g, which will select single or more than one white spaces and underscores.
    let resStr = tempStr.replace(/(\s+|_+)/g, "-");
    return resStr.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small  Things"));
console.log(spinalCase("The____AndyGriffith_Show"));
console.log(spinalCase("Teletubbies    say Eh-oh"));