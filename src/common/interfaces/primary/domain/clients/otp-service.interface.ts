/* eslint-disable @typescript-eslint/no-explicit-any */
import { OtpProvider, OtpType } from '../../../../../common/enums';
import { SubInterface } from '../../../../../common/interfaces';

export interface OtpService extends SubInterface {
  type: OtpType;
  config: Record<string, any>;
  provider: OtpProvider;
}

export type OtpServiceInterface = OtpService;
