import { Status } from '../../../enums';
import { Core, Dto, MakeOptional } from '../../common';
export interface ClientDomain extends Core {
    name: string;
    status: Status;
    subjects: string[];
}
export type ClientDomainDto = Dto<MakeOptional<ClientDomain, 'status'>>;
