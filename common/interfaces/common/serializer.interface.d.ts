import { MakeRequired } from './generic.interface';
export type Total = {
    total: number;
};
export type Result = {
    result: 'OK' | 'NOK';
};
export type Data<T> = {
    data: T;
};
export type Items<T> = {
    items: T[];
};
export type Serializer<T extends {
    id?: string;
    owner?: string;
    clients?: string[];
    created_at?: Date;
    created_by?: string;
    created_in?: string;
    version?: string;
    rand?: string;
    timestamp?: string;
}> = MakeRequired<T, 'id' | 'owner' | 'clients' | 'created_at' | 'created_by' | 'created_in' | 'version' | 'rand' | 'timestamp'>;
