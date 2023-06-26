/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseInterface } from '../../../../../common/interfaces';
import { ValueType } from '../../../../../common/enums';

export interface Artifact extends BaseInterface {
  key: string;
  type: ValueType;
  value?: any;
  validator?: string; // avj validator from configs
}

export type ArtifactInterface = Artifact;
