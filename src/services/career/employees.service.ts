import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Employee, EmployeeDto } from '../../common/interfaces/career';

export class EmployeesService<Properties extends object = object> extends RestfulService<
  Employee<Properties>,
  EmployeeDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/employees', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new EmployeesService<Properties>(axios);
  }
}
