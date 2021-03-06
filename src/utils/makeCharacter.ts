const bias = 50; // bias for lowercase characters; the chance of a lowercase character is ${bias} times more than normal

export default function makeCharacter() {
  const chosenType = Math.floor(Math.random() * (bias + 2) + 1);
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  switch (chosenType) {
    case 1:
      return upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    case 2:
      return numbers.charAt(Math.floor(Math.random() * numbers.length));
    default:
      return lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
}
