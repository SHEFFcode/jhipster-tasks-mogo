import { Moment } from 'moment';

export interface ITask {
  id?: string;
  name?: string;
  dueDate?: Moment;
  complete?: boolean;
}

export const defaultValue: Readonly<ITask> = {
  complete: false
};
