import type { AxiosInstance, ResponseType } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Items, Serializer } from '../../common/core/interfaces';
import { File, FileDto, ShareLinkReq, ShareLinkRes } from '../../common/interfaces/special';

export class FilesService<Properties extends object = object> extends RestfulService<File<Properties>, FileDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('special/files', axios, pathPrefix);
  }

  download<T = any>(id: string, config: RequestConfig<File<Properties>> = {}, responseType: ResponseType = 'blob'): Promise<T> {
    config.responseType = responseType;
    const url = this.url(`download/${id}`);
    return this.get<T>(url, config);
  }

  async share(id: string, data: ShareLinkReq, config: RequestConfig<File<Properties>> = {}): Promise<ShareLinkRes> {
    return (await this.post<Data<ShareLinkRes>, ShareLinkReq>(this.url(`${id}/share`), data, config)).data;
  }

  async upload(
    items: { value: Blob; filename?: string }[],
    scope: 'private' | 'public',
    config: RequestConfig<File<Properties>> = {},
  ): Promise<Serializer<File<Properties>>[]> {
    const form = new FormData();
    config.headers = config.headers ?? {};
    items.forEach((item) => form.append('file', item.value, item.filename));
    Object.assign(config.headers, { 'Content-Type': 'multipart/form-data' });
    const url: string = this.url(`upload/${scope}`);
    return (await this.post<Items<Serializer<File<Properties>>>, FormData>(url, form, config)).items;
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new FilesService<Properties>(axios, prefix || '/');
  }
}
