import { OtpProvider, OtpType } from '@app/common/enums';
import { SubInterface } from '@app/common/interfaces';

export interface OtpService extends SubInterface {
  type: OtpType;
  config: Record<string, any>;
  provider: OtpProvider;
}

export type OtpServiceInterface = OtpService;
