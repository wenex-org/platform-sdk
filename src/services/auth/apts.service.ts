/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AxiosInstance } from 'axios';

import { Query } from '../../common/core/interfaces/mongo';
import { Apt, AptDto } from '../../common/interfaces/auth';
import { RestfulService } from '../../common/core/classes';
import { Optional, Data, Total } from '../../common/core/interfaces';
import { RequestConfig, ResponseType } from '../../common/core/types';

export class AptsService<Properties extends object = object> extends RestfulService<Apt<Properties>, AptDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('auth/apts', axios);
  }

  /**
   * Method not implemented.
   */
  override updateById<Path extends object = object, C extends RequestConfig<Apt<Properties>> = RequestConfig<Apt<Properties>>>(
    id: string,
    data: Optional<AptDto<Properties>>,
    config?: C,
  ): Promise<
    ResponseType<Data<Partial<Omit<Apt<Properties>, keyof Path> & Path>>, Partial<Omit<Apt<Properties>, keyof Path> & Path>, C>
  > {
    throw new Error('Method not implemented.');
  }

  /**
   * Method not implemented.
   */
  override updateBulk<C extends RequestConfig<Apt<Properties>> = RequestConfig<Apt<Properties>>>(
    data: Optional<AptDto<Properties>>,
    query: Query<Apt<Properties>>,
    config?: C,
  ): Promise<ResponseType<Total, number, C>> {
    throw new Error('Method not implemented.');
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new AptsService<Properties>(axios);
  }
}
