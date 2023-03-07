function invertString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const myString = 'Me contratem!';
const invertedString = invertString(myString);
console.log(invertedString); 
