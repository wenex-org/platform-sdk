import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Serializer } from '../../common/core/interfaces';
import { Sms, SmsDto, SmsSendDto } from '../../common/interfaces/touch';

export class SmssService<T = any, Properties extends object = object> extends RestfulService<
  Sms<T, Properties>,
  SmsDto<T, Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('touch/smss', axios, pathPrefix);
  }

  async send(data: SmsSendDto<T, Properties>, config?: RequestConfig<Sms<T, Properties>>): Promise<Serializer<Sms<T, Properties>>> {
    return (await this.post<Data<Serializer<Sms<T, Properties>>>, SmsSendDto<T, Properties>>(this.url('send'), data, config)).data;
  }

  static build<T = any, Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new SmssService<T, Properties>(axios, prefix);
  }
}
