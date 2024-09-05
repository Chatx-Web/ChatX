export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export interface UserTypeWithoutId extends Omit<UserType, "_id"> {}

export interface JWTUserType {
  sub: string;
  username: string;
  email: string;
}
