import makeGroup from "./makeGroup";

export default function generatePassword(): string {
  const password = `${makeGroup()}-${makeGroup()}-${makeGroup()}`;
  if (hasNumbers(password) && hasUppercase(password)) return password;
  else return generatePassword();
}

function hasNumbers(password: string) {
  const regex = /\d/g;
  return regex.test(password);
}

function hasUppercase(password: string) {
  const regex = /[A-Z]/;
  return regex.test(password);
}
