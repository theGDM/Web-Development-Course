function findLongestWordLength(str) {
let freq = 0;
let max = 0;
  for(let i = 0; i < str.length; ++i){
      if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      ++freq;
    }else if(str[i] == ' '){
      if(freq > max){
        max = freq;
      }
      freq = 0;
    }
  }
  if(freq > max){ //this is for the last word, it can too longest
    max = freq;
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));