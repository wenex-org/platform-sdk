import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Member, MemberDto } from '../../common/interfaces/conjoint';

export class MembersService<Properties extends object = object> extends RestfulService<Member<Properties>, MemberDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('conjoint/members', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new MembersService<Properties>(axios);
  }
}
