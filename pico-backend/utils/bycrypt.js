import { hash, compare } from "bcrypt";
const saltRounds = 10;

export async function hashPassword(password) {
  return hash(password, saltRounds);
}

export async function comparePassword(password, hashedPassword) {
  return compare(password, hashedPassword);
}
