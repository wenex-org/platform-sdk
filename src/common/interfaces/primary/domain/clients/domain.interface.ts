import { SubInterface } from '@app/common/interfaces';
import { Status } from '@app/common/enums';

export interface Domain extends SubInterface {
  status: Status;
  address: string;
  roles: string[];
}

export type DomainInterface = Domain;
