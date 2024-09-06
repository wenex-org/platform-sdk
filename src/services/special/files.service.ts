/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance, ResponseType } from 'axios';

import { File, FileDto, Serializer } from '../../common/interfaces';
import { RequestConfig, RestfulService } from '../../common/classes';

export class FilesService extends RestfulService<File, FileDto> {
  constructor(protected axios: AxiosInstance) {
    super('files', axios);
  }

  async download<T = any>(
    id: string,
    config: RequestConfig<File> = {},
    responseType: ResponseType = 'blob',
  ): Promise<T> {
    config.responseType = responseType;
    const url = this.url(`download/${id}`);
    return this.get<T>(url, config);
  }

  async upload(
    items: { value: Blob; filename?: string }[],
    scope: 'private' | 'public',
    config: RequestConfig<File> = {},
  ): Promise<Serializer<File>[]> {
    const form = new FormData();
    items.forEach((item) => form.append('file', item.value, item.filename));

    Object.assign(config, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const url: string = this.url(`upload/${scope}`);
    return this.post<Serializer<File>[], FormData>(url, form, config);
  }
}
