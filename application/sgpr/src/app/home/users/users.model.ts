export enum UserType {
  ADMIN = 'ADMIN',
  CONTROLLER = 'CONTROLLER',
  OBSERVER = 'OBSERVER'
};

export interface User {
  rowid?: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  type: UserType;
};
