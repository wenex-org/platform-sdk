import type { AxiosInstance } from 'axios';

import { MembersService } from './members.service';
import { AccountsService } from './accounts.service';
import { ChannelsService } from './channels.service';
import { ContactsService } from './contacts.service';
import { MessagesService } from './messages.service';

export * from './members.service';
export * from './accounts.service';
export * from './channels.service';
export * from './contacts.service';
export * from './messages.service';

export class ConjointClient<Properties extends object = object> {
  protected _members?: MembersService<Properties>;
  protected _accounts?: AccountsService<Properties>;
  protected _channels?: ChannelsService<Properties>;
  protected _contacts?: ContactsService<Properties>;
  protected _messages?: MessagesService<any, Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get members() {
    return (this._members = this.members ?? MembersService.build<Properties>(this.axios));
  }

  get accounts() {
    return (this._accounts = this.accounts ?? AccountsService.build<Properties>(this.axios));
  }

  get channels() {
    return (this._channels = this.channels ?? ChannelsService.build<Properties>(this.axios));
  }

  get contacts() {
    return (this._contacts = this.contacts ?? ContactsService.build<Properties>(this.axios));
  }

  get messages() {
    return (this._messages = this.messages ?? MessagesService.build<any, Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ConjointClient<Properties>(axios);
  }
}
