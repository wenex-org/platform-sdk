import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Note, NoteDto } from '../../common/interfaces/content';

export class NotesService<Properties extends object = object> extends RestfulService<Note<Properties>, NoteDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('content/notes', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new NotesService<Properties>(axios);
  }
}
