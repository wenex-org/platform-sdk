import { Result as ResultEnum } from '@app/common/enums';

import { Base, BaseSub } from './base';
import { Core } from './core.interface';
import { Optional } from './generic.interface';

export type Total = { total: number };

export type Result = { result: ResultEnum };

// ----------------------------------------
// Data Interfaces
// ----------------------------------------

export type Data<T extends Optional<Core>> = {
  data: T;
};

export type Items<T extends Optional<Core>> = {
  items: T[];
};

// ----------------------------------------
// Serializer Interfaces
// ----------------------------------------

export type Serializer<T extends Optional<Core>> = Omit<
  T,
  'id' | 'created_at' | 'version' | 'rand' | 'timestamp'
> &
  Required<Pick<T, 'id' | 'created_at' | 'version' | 'rand' | 'timestamp'>>;
export type SerializerInterface<T extends Optional<Core>> = Serializer<T>;
