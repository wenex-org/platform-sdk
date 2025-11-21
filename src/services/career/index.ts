import type { AxiosInstance } from 'axios';

import { StocksService } from './stocks.service';
import { StoresService } from './stores.service';
import { ProductsService } from './products.service';
import { BranchesService } from './branches.service';
import { ServicesService } from './services.service';
import { EmployeesService } from './employees.service';
import { CustomersService } from './customers.service';
import { BusinessesService } from './businesses.service';

export * from './stocks.service';
export * from './stores.service';
export * from './products.service';
export * from './branches.service';
export * from './services.service';
export * from './employees.service';
export * from './customers.service';
export * from './businesses.service';

export class Client<Properties extends object = object> {
  protected _stocks?: StocksService<Properties>;
  protected _stores?: StoresService<Properties>;
  protected _products?: ProductsService<Properties>;
  protected _branches?: BranchesService<Properties>;
  protected _services?: ServicesService<Properties>;
  protected _employees?: EmployeesService<Properties>;
  protected _customers?: CustomersService<Properties>;
  protected _businesses?: BusinessesService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get stocks() {
    return (this._stocks = this._stocks ?? StocksService.build<Properties>(this.axios));
  }

  get stores() {
    return (this._stores = this._stores ?? StoresService.build<Properties>(this.axios));
  }

  get products() {
    return (this._products = this._products ?? ProductsService.build<Properties>(this.axios));
  }

  get branches() {
    return (this._branches = this._branches ?? BranchesService.build<Properties>(this.axios));
  }

  get services() {
    return (this._services = this._services ?? ServicesService.build<Properties>(this.axios));
  }

  get employees() {
    return (this._employees = this._employees ?? EmployeesService.build<Properties>(this.axios));
  }

  get customers() {
    return (this._customers = this._customers ?? CustomersService.build<Properties>(this.axios));
  }

  get businesses() {
    return (this._businesses = this._businesses ?? BusinessesService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
