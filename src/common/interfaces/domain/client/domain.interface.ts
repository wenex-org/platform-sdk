import { Status } from '../../../enums';
import { Core } from '../../common';

export interface ClientDomain extends Core {
  name: string;
  status: Status;

  subjects: string[];
}
