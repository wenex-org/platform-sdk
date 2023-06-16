import { BaseInterface } from '@app/common/interfaces';
import { ValueType } from '@app/common/enums';

export interface Artifact extends BaseInterface {
  key: string;
  type: ValueType;
  value?: any;
}

export type ArtifactInterface = Artifact;
