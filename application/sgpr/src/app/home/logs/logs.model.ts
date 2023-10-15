export enum LogAction {
  CREATE_USER = 'CREATE_USER',
  EDIT_USER = 'EDIT_USER',
  DELETE_USER = 'DELETE_USER',
  CREATE_ANIMAL = 'CREATE_ANIMAL', 
  EDIT_ANIMAL = 'EDIT_ANIMAL', 
  DELETE_ANIMAL = 'DELETE_ANIMAL', 
  CREATE_VACCINATE = 'CREATE_VACCINATE', 
  EDIT_VACCINATE = 'EDIT_VACCINATE', 
  UPDATE_STATUS_OF_VACCINATE = 'UPDATE_STATUS_OF_VACCINATE', 
  DELETE_VACCINATE = 'DELETE_VACCINATE', 
  CREATE_CATTLE_PADDOCKS = 'CREATE_CATTLE_PADDOCKS', 
  EDIT_CATTLE_PADDOCKS = 'EDIT_CATTLE_PADDOCKS', 
  DELETE_CATTLE_PADDOCKS = 'DELETE_CATTLE_PADDOCKS', 
  CREATE_INPUT = 'CREATE_INPUT', 
  EDIT_INPUT = 'EDIT_INPUT',
  DELETE_INPUT = 'DELETE_INPUT', 
  CREATE_SALE = 'CREATE_SALE', 
  EDIT_SALE = 'EDIT_SALE', 
  DELETE_SALE = 'DELETE_SALE'
};

export interface Log {
  rowid?: string;
  username: string; 
  date: string; 
  action: LogAction;
};
