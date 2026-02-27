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

export class Client<Properties extends object = object> {
  protected _members?: MembersService<Properties>;
  protected _accounts?: AccountsService<Properties>;
  protected _channels?: ChannelsService<Properties>;
  protected _contacts?: ContactsService<Properties>;
  protected _messages?: MessagesService<any, Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get members() {
    return (this._members = this._members ?? MembersService.build<Properties>(this.axios, this.pathPrefix));
  }

  get accounts() {
    return (this._accounts = this._accounts ?? AccountsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get channels() {
    return (this._channels = this._channels ?? ChannelsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get contacts() {
    return (this._contacts = this._contacts ?? ContactsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get messages() {
    return (this._messages = this._messages ?? MessagesService.build<any, Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
