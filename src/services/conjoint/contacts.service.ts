import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Contact, ContactDto } from '../../common/interfaces/conjoint';

export class ContactsService<Properties extends object = object> extends RestfulService<
  Contact<Properties>,
  ContactDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('conjoint/contacts', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ContactsService<Properties>(axios);
  }
}
