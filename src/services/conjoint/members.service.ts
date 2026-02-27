import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Member, MemberDto } from '../../common/interfaces/conjoint';

export class MembersService<Properties extends object = object> extends RestfulService<Member<Properties>, MemberDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('conjoint/members', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new MembersService<Properties>(axios, prefix || '/');
  }
}
