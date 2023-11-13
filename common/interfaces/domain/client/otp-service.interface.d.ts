import { ClientOtpProvider, ClientOtpType } from '../../../enums';
import { Core, Properties } from '../../common';
export interface ClientOtpService extends Core {
    type: ClientOtpType;
    config: Properties;
    provider: ClientOtpProvider;
}
