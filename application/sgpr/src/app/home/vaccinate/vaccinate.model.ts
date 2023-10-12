export enum VaccinateStatus {
  PENDING = 'pending',
  DONE = 'done',
  CANCELED = 'canceled'
}

export interface Vaccinate {
  id?: string;
  name: string;
  description: string;
  dosage: string;
  period: string;
  status: VaccinateStatus
}
