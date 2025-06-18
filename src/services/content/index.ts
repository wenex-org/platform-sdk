import type { AxiosInstance } from 'axios';

import { NotesService } from './notes.service';
import { PostsService } from './posts.service';
import { TicketsService } from './tickets.service';

export * from './notes.service';
export * from './posts.service';
export * from './tickets.service';

export class Client<Properties extends object = object> {
  protected _notes?: NotesService<Properties>;
  protected _posts?: PostsService<Properties>;
  protected _tickets?: TicketsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get notes() {
    return (this._notes = this._notes ?? NotesService.build<Properties>(this.axios));
  }

  get posts() {
    return (this._posts = this._posts ?? PostsService.build<Properties>(this.axios));
  }

  get tickets() {
    return (this._tickets = this._tickets ?? TicketsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
