export enum Sex {
  FEMALE = 'female',
  MALE = 'male'
};

export interface Animal {
  id?: string;
  identifierNumber: string;
  sex: Sex;
  weight?: string;
};
