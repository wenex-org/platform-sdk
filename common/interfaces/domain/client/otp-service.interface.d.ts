import { ClientOtpProvider, ClientOtpType } from '../../../enums';
import { Core, Dto, MakeOptional, Properties } from '../../common';
export interface ClientOtpService extends Core {
    type: ClientOtpType;
    config: Properties;
    provider: ClientOtpProvider;
}
export type ClientOtpServiceDto = Dto<MakeOptional<ClientOtpService, 'provider'>>;
