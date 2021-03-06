import makeCharacter from "./makeCharacter";

export default function makeGroup() {
  let result = "";

  for (let i = 0; i < 6; i++) {
    result += makeCharacter();
  }
  return result;
}
