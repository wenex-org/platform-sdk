/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseInterface } from '../../../../common/interfaces';
import { ValueType } from '../../../../common/enums';

export interface Config extends BaseInterface {
  key: string;
  type: ValueType;
  value?: any;
}

export type ConfigInterface = Config;
