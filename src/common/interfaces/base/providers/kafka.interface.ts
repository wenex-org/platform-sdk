import { CreateDto, UpdateDto } from '@app/common/dto';
import { ClientKafka } from '@nestjs/microservices';
import { OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';

import { QueryFilter, Filter, OneFilter, UniqueFilter } from '../filters';
import { KafkaObject, ServiceOptions } from '../index';

export interface KafkaProvider<T> extends OnModuleInit {
  readonly channel: string;
  readonly client: ClientKafka;

  count(filter: QueryFilter<T>, options?: ServiceOptions): Observable<KafkaObject<number>>;

  create(data: CreateDto<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;

  find(filter: Filter<T>, options?: ServiceOptions): Observable<KafkaObject<T[]>>;
  cursor(filter: Filter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;

  findOne(filter: OneFilter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;
  findById(filter: UniqueFilter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;

  deleteOne(filter: OneFilter<T>, options: ServiceOptions): Observable<KafkaObject<T>>;
  deleteById(filter: UniqueFilter<T>, options: ServiceOptions): Observable<KafkaObject<T>>;

  restoreOne(filter: OneFilter<T>, options: ServiceOptions): Observable<KafkaObject<T>>;
  restoreById(filter: UniqueFilter<T>, options: ServiceOptions): Observable<KafkaObject<T>>;

  destroyOne(filter: OneFilter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;
  destroyById(filter: UniqueFilter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;

  updateOne(data: UpdateDto<T>, filter: OneFilter<T>, options?: ServiceOptions): Observable<KafkaObject<T>>;
  updateBulk(
    data: UpdateDto<T>,
    filter: QueryFilter<T>,
    options?: ServiceOptions,
  ): Observable<KafkaObject<number>>;
  updateById(
    data: UpdateDto<T>,
    filter: UniqueFilter<T>,
    options?: ServiceOptions,
  ): Observable<KafkaObject<T>>;
}

export type KafkaProviderInterface<T> = KafkaProvider<T>;
