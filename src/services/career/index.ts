import type { AxiosInstance } from 'axios';

import { BranchesService } from './branches.service';
import { ServicesService } from './services.service';
import { EmployeesService } from './employees.service';
import { BusinessesService } from './businesses.service';

export * from './branches.service';
export * from './services.service';
export * from './employees.service';
export * from './businesses.service';

export class Client<Properties extends object = object> {
  protected _branches?: BranchesService<Properties>;
  protected _services?: ServicesService<Properties>;
  protected _employees?: EmployeesService<Properties>;
  protected _businesses?: BusinessesService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get branches() {
    return (this._branches = this._branches ?? BranchesService.build<Properties>(this.axios));
  }

  get services() {
    return (this._services = this._services ?? ServicesService.build<Properties>(this.axios));
  }

  get employees() {
    return (this._employees = this._employees ?? EmployeesService.build<Properties>(this.axios));
  }

  get businesses() {
    return (this._businesses = this._businesses ?? BusinessesService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
