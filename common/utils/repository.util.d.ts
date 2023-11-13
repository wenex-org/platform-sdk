import { State, Status } from '../enums';
export declare const isAvailable: ({ deleted_at, restored_at, }: {
    deleted_at?: string | Date | undefined;
    restored_at?: string | Date | undefined;
}) => boolean;
export declare const isApplicable: ({ state, status, }: {
    state?: State | undefined;
    status?: Status | undefined;
}) => boolean;
