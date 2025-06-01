import type { AxiosInstance, ResponseType } from 'axios';

import { File, FileDto } from '../../common/interfaces/special';
import { Items, Serializer } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';

export class FilesService<Properties extends object = object> extends RestfulService<File<Properties>, FileDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('special/files', axios);
  }

  download<T = any>(id: string, config: RequestConfig<File<Properties>> = {}, responseType: ResponseType = 'blob'): Promise<T> {
    config.responseType = responseType;
    const url = this.url(`download/${id}`);
    return this.get<T>(url, config);
  }

  async upload(
    items: { value: Blob; filename?: string }[],
    scope: 'private' | 'public',
    config: RequestConfig<File<Properties>> = {},
  ): Promise<Serializer<File<Properties>>[]> {
    const form = new FormData();
    items.forEach((item) => form.append('file', item.value, item.filename));
    Object.assign(config, { headers: { 'Content-Type': 'multipart/form-data' } });
    const url: string = this.url(`upload/${scope}`);
    return (await this.post<Items<Serializer<File<Properties>>>, FormData>(url, form, config)).items;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new FilesService<Properties>(axios);
  }
}
