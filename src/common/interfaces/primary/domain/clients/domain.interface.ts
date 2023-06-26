import { SubInterface } from '../../../../../common/interfaces';
import { Status } from '../../../../../common/enums';

export interface Domain extends SubInterface {
  status: Status;
  address: string;
  roles: string[];
}

export type DomainInterface = Domain;
