// Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// function updateRecords(records, id, prop, value) {
//   for(let eachRecord in records){
//       console.log(`${eachRecord} : ${records[eachRecord]}`);
//   }
//   return records;
// }
// 1245 : [object Object]
// 2468 : [object Object]
// 2548 : [object Object]
// 5439 : [object Object]

function updateRecords(records, id, prop, value) {
  for(let eachRecord in records){
      if (eachRecord == id) {
          if (prop !== "tracks" && value) {
              records[eachRecord][prop] = value;
          } else if (prop === "tracks" && !records[eachRecord].hasOwnProperty(prop)) {
              let arr = [];
              arr.push(value);
              records[eachRecord][prop] = arr;
              // records[eachRecord][prop] = [value];
          } else if (prop === "tracks" && value) {
              records[eachRecord][prop].push(value);
          } else if (value === "") {
              delete records[eachRecord][prop];
          }
      }
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));