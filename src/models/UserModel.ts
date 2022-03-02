import users from '@/config/users';

export interface UserModel {
  id: string,
  name: string
}

export const getUserById =
  (id: string): UserModel | undefined => users.find((user: UserModel) => user.id === id);
