export enum Sex {
  FEMALE = 'female',
  MALE = 'male'
};

export interface Animal {
  rowid?: string;
  identifierNumber: string;
  sex: Sex;
  weight?: string;
  description?: string;
};
