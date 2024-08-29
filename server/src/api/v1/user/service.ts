import { UserType } from "./types";

const users: UserType[] = [];

export function createUser(user: UserType) {
  users.push(user);
  console.log(`created user ${user}`);
}

export function removeUser(user: UserType) {
  const userIndex = users.indexOf(user);

  if (userIndex === -1) return;

  users.splice(userIndex, 1);
  console.log(`removed user ${user}`);
}

export function findUserWithEmail(email: string): UserType | undefined {
  return users.find((user) => user.email === email);
}
