import type { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Client, ClientDto } from '../../common/interfaces';
export declare class ClientsService extends RestfulService<Client, ClientDto> {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
}
